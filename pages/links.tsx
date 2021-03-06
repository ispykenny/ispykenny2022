import { PageTitle } from 'components/elements/PageTitle/PageTitle';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { Container } from 'components/layouts/Grid/Grid';
import { Socials } from 'components/sections/Socials/Socials';
import { SEO } from 'components/Seo';
import { NextPage } from 'next';


const Links : NextPage = () => {
  return (
    <>
      <SEO 
        title="Find me online!"
        description="Kenny Krosky social media links"
      />
      <section>
        <Container hasShimmy={true} narrow={true}>
          <PageTitle>
            <Sleeve text="I'm on the interwebs"/>
          </PageTitle>
          <p>
            <Sleeve text="Super active across various social media platforms. Let's connect!"/>
          </p>
          <Socials/>
        </Container>
      </section>
    </>
  )
}

export default Links;