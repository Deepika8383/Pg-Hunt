import pool from '../Services/neon/db.js';

export const getPGsByCity = async (cityName) => {
  const cityQuery = `SELECT id FROM cities WHERE LOWER(name) = LOWER($1)`;
  const cityResult = await pool.query(cityQuery, [cityName]);

  if (cityResult.rows.length === 0) return [];

  const cityId = cityResult.rows[0].id;

  const pgQuery = `
    SELECT 
      p.id AS property_id,
      p.name,
      p.address,
      p.description,
      p.gender,
      p.rent,
      p.rating_clean,
      p.rating_food,
      p.rating_safety
    FROM properties p
    WHERE p.city_id = $1
  `;
  const pgResult = await pool.query(pgQuery, [cityId]);
  const properties = pgResult.rows;

  for (let property of properties) {
    // Fetch amenities
    const amenityQuery = `
      SELECT a.name, a.type, a.icon
      FROM properties_amenities pa
      JOIN amenities a ON pa.amenity_id = a.id
      WHERE pa.property_id = $1
    `;
    const amenityResult = await pool.query(amenityQuery, [property.property_id]);
    property.amenities = amenityResult.rows;

    // Fetch testimonials
    const testimonialQuery = `
      SELECT user_name, content
      FROM testimonials
      WHERE property_id = $1
    `;
    const testimonialResult = await pool.query(testimonialQuery, [property.property_id]);
    property.testimonials = testimonialResult.rows;
  }

  return properties;
};
