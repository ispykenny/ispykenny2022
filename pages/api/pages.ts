// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const contentful = require('contentful');


type Data = {
  name: string
}

const client = contentful.createClient({
  space: process.env.SPACE,
  accessToken: process.env.API,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const page = req.query.pageData;
  const entries = await client.getEntries({'content_type': 'page'})
  .then((entry : any) => {
    return entry.items;
  })
  const post = entries.find((entry : any) => entry.fields.header.toLowerCase().split(' ').join('') === page)
  res.status(200).json(post)
}
