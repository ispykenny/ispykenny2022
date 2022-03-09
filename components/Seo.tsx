import type {NextPage} from 'next';
import Head from 'next/head';


interface SeoProps {
  title: string;
  description: string;
}


export const SEO: NextPage<SeoProps> = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}