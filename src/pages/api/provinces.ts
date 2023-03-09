import { NextApiRequest, NextApiResponse } from 'next';
export default async function fetchProvinces(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nombre } = req.query;
  const provincias = await fetch(`${process.env.API_URL}?nombre=${nombre}`);
  const data = await provincias.json();
  res.status(200).json(data);
}
