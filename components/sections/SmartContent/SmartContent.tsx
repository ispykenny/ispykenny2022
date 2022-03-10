import { NextPage } from 'next';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import Image from 'next/image';
import styles from './SmartContext.module.scss';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node : any) => {
      return <p><Sleeve text={node.content[0].value} delay={4}/></p>
    },
    [BLOCKS.HEADING_2]: (node : any) => {
      return <h2><Sleeve text={node.content[0].value} delay={4}/></h2>
    },
    [BLOCKS.LIST_ITEM]: (node : any) => {
      return <li><Sleeve text={node.content[0].content[0].value}/></li>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node : any) => {

      return (
        <Image 
          src={`https:${node.data.target.fields.file.url}`}
          height="1080"
          width="1440"
          alt={node.data.target.fields.title}/>
      )
    }
  }
};

export const SmartContent: NextPage <any> = ({richText}) => {
  return (
    <section className={styles.smartContext}>
      {documentToReactComponents(richText, options)}
    </section>
  )
}