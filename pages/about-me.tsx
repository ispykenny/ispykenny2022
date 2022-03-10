import { PageTitle } from 'components/elements/PageTitle/PageTitle';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { Container } from 'components/layouts/Grid/Grid';
import { SEO } from 'components/Seo';
import { NextPage } from 'next';
import { Socials } from 'components/sections/Socials/Socials';
import { SmartContent } from 'components/sections/SmartContent/SmartContent';

export const getStaticProps = async () => {
  const endpointResponse = await fetch(process.env.URL+'aboutme');
  const responseToJson = await endpointResponse.json();
  return { 
    props: {
      pageData: responseToJson.fields 
    }
  }
}

const AboutMe: NextPage <any> = ({pageData}) => {
  return (
    <>
      <SEO 
        title={pageData.header}
        description={pageData.seoSummary}
      />
      <section>
        <Container narrow={true} hasShimmy={true}>
          <PageTitle>
            <Sleeve text={pageData.pageTitle} delay={90}/>
          </PageTitle>
          <Socials/>
          <SmartContent richText={pageData.smartContent}/>
        </Container>
      </section>
    </>
  )
}

export default AboutMe;