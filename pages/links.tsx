import { PageTitle } from 'components/elements/PageTitle/PageTitle';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { Container } from 'components/layouts/Grid/Grid';
import { Socials } from 'components/sections/Socials/Socials';
import { NextPage } from 'next';


export const Links : NextPage = () => {
  return (
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
  )
}

export default Links;