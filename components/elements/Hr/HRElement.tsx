import styles from './HRElement.module.scss'
import { InView } from 'react-intersection-observer';
import {useState} from 'react';


export const HRElement = () => {
  const [isInView, setInView] = useState<boolean>(false)

  return (
    <>
    <InView
      as="div"
      threshold={1}
      className={
        isInView ? styles.isInView : styles.default
      }
      onChange={(inView) => inView?setInView(true):null}
    >
      <div className={styles.hr}></div>
    </InView>
    </>
  )
}