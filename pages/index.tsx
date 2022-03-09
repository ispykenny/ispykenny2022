import type { NextPage } from 'next'
import { Hero } from '../components/sections/Hero/Hero';
import { SEO } from '../components/Seo'
import { Products } from 'components/sections/Products/Products';

const data = {
  pageTitle: "Hello, I'm Kenny Krosky. I'm a Software Engineer & Designer",
  pageTitleContent: "I'm a family man (3 kids), coffee obsessed, an amateur woodworker. I'm passionate about all things Front-end, specifically <strong>JavaScipt</strong>, <strong>CSS</strong>, and <strong>APIs</strong>. Currently a Senior software engineer at <strong>Microsoft</strong>, previously <strong>Adobe</strong>."
}


const Home: NextPage <any> = ({theData}) => {
  return (
    <>
      <SEO 
        title="Home Page"
        description="This page is the home page of ispykenny"
      />
      <Hero {...data}/>
      <Products/> 
    </>
  )
}


export default Home
