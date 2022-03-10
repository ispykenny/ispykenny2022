import { PageTitle } from 'components/elements/PageTitle/PageTitle';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { Container } from 'components/layouts/Grid/Grid';
import { NextPage } from 'next';

const Blogs: NextPage = () => {
  return (
    <Container 
      narrow={true}
      hasShimmy={true}
      >
      <PageTitle>
        <Sleeve text="No blogs yet" delay={80}/>
      </PageTitle>
    </Container>
  )
}

export default Blogs