import { InView } from 'react-intersection-observer';
import {useState} from 'react';
import styles from './Socials.module.scss';
import {NextPage} from 'next'

export const SocialsCards : NextPage <{url: string, text: string}> = ({url, text})  => {
  const [isInView, setIsInView] = useState<boolean>(false);
  return (
    <>
      <InView
        as="li"
        threshold={0.9}
        className={
          isInView ? styles.isInView : styles.default
        }
        onChange={(inView) => inView?setIsInView(true):null}
      >
        <a 
          href={url} 
          target="_blank"
          rel="noreferrer"
        >
          <span>{text}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </a>
      </InView>
    </>
  )
}