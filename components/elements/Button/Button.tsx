import { NextPage } from 'next';
import { InView } from 'react-intersection-observer';
import styles from '../Button/Button.module.scss';
import { useState } from 'react';
interface Props {
  type: string,
  url: string,
  text: string
}

const getButtonClass = (type : string) => {
  switch(type) {
    case "primary":
      return styles.cta_primary
    case "secondary":
      return styles.cta_secondary
    default:
      return styles.cta_primary
  }
}

export const Button: NextPage <Props> = ({ type, url, text }) => {
  const [ButtonInView, setButtonInView] = useState(false)

  const setClass = () => {
    if(ButtonInView) {
      return styles.ctaInView
    } else {
      return styles.ctaNotInView
    }
  }

  return (
    <>
      <InView
      threshold={0.9}
      onChange={(inView) => inView && setButtonInView(true)}
      className={setClass()}
      >
        <a href={url} className={getButtonClass(type)}>
          <span>{text}</span>
          {type === 'secondary' && (
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </span>
          )}
        </a>
      </InView>
    </>
  )
}