import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { Container } from 'components/layouts/Grid/Grid';
import { SmartContent } from 'components/sections/SmartContent/SmartContent';
import { SEO } from 'components/Seo';
import {NextPage} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '/components/sections/BlogListings/BlogListings.module.scss';

const Post: NextPage <any> = ({page}) => {
  return (
    <>
      <SEO 
        title={'- ' +page.seoTitle}
        description="Content by Kenny Krosky"
      />
      <Container hasShimmy={true} narrow={true}>
        <div className={styles.blogContent}>
          <Link href="/blogs">
            <a className={styles.viewAll}>View More Blogs</a>
          </Link>
          <Image    
            src={`https://${page.featuredImage.fields.file.url}`}
            width="1000"
            height="340"
            alt=""
          />
          <h1>
            {page.seoTitle}
          </h1>
          <SmartContent richText={page.content} hasSleeved={false}/>
        </div>
      </Container>
    </>
  )
}

export const getStaticProps = async (context:any) => {
  const fetchPost = await fetch(process.env.URL+'/post/'+context.params.title)
  const postToJson = await fetchPost.json();
  return {
    props: {
      page: postToJson.fields
    }
  }
}

export const getStaticPaths = async() => {
  const fetchedData = await fetch(process.env.URL+'/blog')
  const data = await fetchedData.json();

  const paths = data.map((posts: any) => {
    return {
      params: {title: posts.fields.seoTitle.toLowerCase().split(' ').join('-')}
    }
  })

  return {
    paths, 
    fallback: false
  }
}

export default Post