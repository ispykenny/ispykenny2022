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
  const post = await entries.find((entry : any) => entry.fields.header.toLowerCase().split(' ').join('') === page)


  if(post) {
    res.status(200).json(post)
  } else {
    res.status(404)
  }
}
