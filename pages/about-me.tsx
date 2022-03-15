import { PageTitle } from 'components/elements/PageTitle/PageTitle';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { Container } from 'components/layouts/Grid/Grid';
import { SEO } from 'components/Seo';
import { NextPage, GetStaticProps } from 'next';
import { Socials } from 'components/sections/Socials/Socials';
import { SmartContent } from 'components/sections/SmartContent/SmartContent';


const AboutMe: NextPage <any> = ({pageData}) => {
  return (
    <>
      <SEO 
        title={pageData.header}
        description={pageData.seoSummary}
      />
      <Container narrow={true} hasShimmy={true}>
        <PageTitle>
          <Sleeve text={pageData.pageTitle} delay={90}/>
        </PageTitle>
        <Socials/>
        <SmartContent richText={pageData.smartContent} hasSleeved={true}/>
      </Container>
    </>
  )
}


export const getStaticProps : GetStaticProps = async () => {
  const endpointResponse = await fetch('https://ispykenny-api.herokuapp.com/aboutme');
  const responseToJson = await endpointResponse.json();
  return { 
    props: {
      pageData: responseToJson.fields 
    }
  }
}


export default AboutMe;