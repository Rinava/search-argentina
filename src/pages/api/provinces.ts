import { NextApiRequest, NextApiResponse } from 'next';
import { IProvince } from '@/../interfaces';

export default async function fetchProvinces(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nombre } = req.query;
  const provincias = await fetch(`${process.env.API_URL}?nombre=${nombre}`);
  const data = await provincias.json();

  if (data.total === 0) {
    return res.status(404).json({ message: 'Provincia no encontrada' });
  }

  res.status(200).json(data as IProvince[]);
}
