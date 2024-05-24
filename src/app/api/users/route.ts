import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // return res.status(200).json(req.body)
  return res.status(200).json({ name: "jon" })
}