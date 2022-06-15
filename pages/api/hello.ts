// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}


export const API_BASE_URL = "https://ecomapi.mwebservices.co/api";
export const APP_URL = "https://ecg-storefront.vercel.app";
