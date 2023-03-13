import { NextApiRequest, NextApiResponse } from 'next';
import { IProvince } from '@/../interfaces';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

export default async function fetchProvinces(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const { name } = req.query;
    const provincias = await fetch(`${process.env.API_URL}?nombre=${name}`);
    const data = await provincias.json();

    if (data.total === 0) {
      return res.status(404).json({ message: 'Province not found' });
    }

    res.status(200).json(data as IProvince[]);
  } else {
    res.status(401).json({ message: 'Not authorized :(' });
  }
}
