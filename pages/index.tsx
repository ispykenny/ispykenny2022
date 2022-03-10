import { NextPage } from 'next'
import { Hero } from '../components/sections/Hero/Hero';
import { SEO } from '../components/Seo'
import { Products } from 'components/sections/Products/Products';


export const getServerSideProps = async () => {
  const endpointResponse = await fetch(process.env.URL+'homepage');
  const responseToJson = await endpointResponse.json();

  return { 
    props: {
      pageData: responseToJson.fields 
    }
  }
}


const Home: NextPage <any> = ({pageData}) => {
  return (
    <>
      <SEO 
        title={pageData.header}
        description={pageData.seoSummary}
      />
      <Hero {...pageData}/>
      <Products/> 
    </>
  )
}


export default Home
