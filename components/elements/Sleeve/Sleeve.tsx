import { NextPage } from 'next';
import styles from './Sleeve.module.scss';
import { InView } from 'react-intersection-observer';
import {useState} from 'react';
import { wrapText } from './helper';

export const Sleeve : NextPage  <{text: string, delay?: number}> = ({text, delay}) => {
  const [isInView, setIsInView] = useState<boolean>(false);

  return (
    <>
      <InView 
        as="span" 
        threshold={0.9}
        className={
          isInView ? styles.isInView : styles.default
        }
        onChange={(inView) => inView?setIsInView(true):null}
        dangerouslySetInnerHTML={wrapText(text, styles, delay)}>
      </InView>
    </>
  )
}