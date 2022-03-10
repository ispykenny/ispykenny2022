require('dotenv')
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.SPACE,
  accessToken: process.env.API,
});

const getPageData = async (query) => {
  const entries = await client.getEntries({'content_type': 'page'})
  .then((entry) => {
    return entry.items;
  })
  const post = entries.find((entry) => entry.fields.header.toLowerCase().split(' ').join('') === query)
  if(post) {
    return post
  } else {
    return null
  }
}


const handler = async (event) => {
  const query = event.queryStringParameters.page
  const pageData = await getPageData(query);
  return {
    statusCode: 200,
    body: JSON.stringify(pageData)
  }
}



module.exports = { handler }