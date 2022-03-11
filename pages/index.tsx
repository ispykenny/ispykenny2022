import { NextPage, GetStaticProps } from 'next'
import { Hero } from '../components/sections/Hero/Hero';
import { SEO } from '../components/Seo'
import { Products } from 'components/sections/Products/Products';



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

export const getStaticProps : GetStaticProps = async () => {
  const endpointResponse = await fetch('https://ispykenny-api.herokuapp.com/homepage');
  const responseToJson = await endpointResponse.json();

  return { 
    props: {
      pageData: responseToJson.fields 
    }
  }
}

export default Home
