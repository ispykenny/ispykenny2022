import { NextPage } from 'next';
import { BLOCKS , MARKS} from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import Image from 'next/image';
import styles from './SmartContext.module.scss';

const options:any = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node : any) => {
      return <p><Sleeve text={node.content[0].value} delay={4}/></p>
    },
    [BLOCKS.HEADING_2]: (node : any) => {
      return <h2><Sleeve text={node.content[0].value} delay={4}/></h2>
    },
    [BLOCKS.HEADING_3]: (node : any) => {
      return <h3><Sleeve text={node.content[0].value} delay={4}/></h3>
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
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text:string) => {
      return <b key={text}>hello world</b> ;
    }
  }
};

const optionsForNoSleeve:any = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node : any) => {
      console.log(node)
      const root = node.data.target.fields.file.details.image
      const {height, width} = root;
      return (
        <div 
          className={styles.image}
          style={{paddingBottom: (height / width) * 100+'%'}}
          >
          <Image 
          src={`https:${node.data.target.fields.file.url}`}
          layout="fill"
          alt={node.data.target.fields.title}/>
        </div>
      )
    },
  }
}

interface props {
  richText: any,
  hasSleeved?: boolean
}

export const SmartContent: NextPage <props> = ({richText, hasSleeved}) => {
  return (
    <section className={styles.smartContext}>
      { hasSleeved ?  (
          <div>
            { documentToReactComponents(richText, options)}
          </div>
        ) : (
          <div>
          {documentToReactComponents(richText, optionsForNoSleeve)}
          </div>
        )
      }
    </section>
  )
}