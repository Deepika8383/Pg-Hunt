// controller/PGController.js
import { getPGsByCity } from '../models/PGModel.js';

export const fetchPGsByCity = async (req, res) => {
  try {
    const { city } = req.params;
    const data = await getPGsByCity(city);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
