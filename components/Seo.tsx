import type { NextPage } from 'next';
import Head from 'next/head';


interface SeoProps {
  title: string;
  description: string;
}


export const SEO: NextPage <SeoProps> = ({title, description}) => {
  return (
    <Head>
      <title>{`Kenny Krosky ${title}`}</title>
      <meta name="description" content={description} />
    </Head>
  )
}