import { Button } from 'components/elements/Button/Button';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { SEO } from 'components/Seo';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SmartContent } from '../SmartContent/SmartContent';
import styles from './BlogListings.module.scss';

const titleCleanUp = (string:string) => {
  return string.toLowerCase().split(' ').join('-')
}

export const BlogListings: NextPage <any> = ({content}) => {
  return (
    <div className={styles.blogList}>
      <SEO 
        title="- Blogs"
        description="Content by Kenny Krosky"
      />
      <Link href={`/blogs/${titleCleanUp(content.seoTitle)}`}>
        <a>
          <Image    
            src={`https://${content.featuredImage.fields.file.url}`}
            width="1000"
            height="340"
            alt=""
          />
        </a>
      </Link>
      <h2>
        {content.seoTitle}
      </h2>
      <SmartContent richText={content.excerpt}/>
      <Button 
        animate={false}
        sr={`Read more about ${content.seoTitle}`}
        type="secondary"
        text="Read More"
        url={`/blogs/${titleCleanUp(content.seoTitle)}`}
      />
    </div>
  )
}
