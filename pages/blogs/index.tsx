import { PageTitle } from 'components/elements/PageTitle/PageTitle';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { Container } from 'components/layouts/Grid/Grid';
import { BlogListings } from 'components/sections/BlogListings/BlogListings';
import { NextPage, GetStaticProps } from 'next';
import styles from 'components/sections/BlogListings/BlogListings.module.scss';

const Blogs: NextPage <any> = ({pageData}) => {
  return (
    <Container 
      narrow={true}
      hasShimmy={true}
      >
      <div className={styles.BlogHomeTitle}>
        <PageTitle>
          Words <br/>
          By Kenny.
        </PageTitle>
      </div>
      {pageData.map((blog:any, index:number) => (
        <div key={index}>
          <BlogListings content={blog.fields} />
        </div>
      ))}
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getResponse = await fetch(`${process.env.URL}/blog`);
  const responseToJson = await getResponse.json();
  return {
    props: {
      pageData: responseToJson
    }
  }
}

export default Blogs