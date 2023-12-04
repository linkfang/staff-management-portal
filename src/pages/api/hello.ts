// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/server/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  prisma.person
    .findMany({ include: { expertise: { where: { name: 'Web Frontend' } } } })
    .then((res) => console.log(res[0].expertise))

  res.status(200).json({ name: 'John Doe' })
}
