import { useState } from 'react';
import styles from './Product.module.scss';
import { InView } from 'react-intersection-observer';
import { Button } from 'components/elements/Button/Button';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';

interface PROPS  {
  title: string,
  description: string,
  link: string
}

export const ProductCards = ({title, description, link} : PROPS) => {
  const [isInView, setIsInView ] = useState<boolean>(false);
  return (
    <>
      <InView
        as="div"
        threshold={0.9}
        className={
          isInView ? styles.isInView : styles.default
        }
        onChange={(inView) => inView?setIsInView(true):null}
      >
      <div className={styles.productCards}>
        <div>
          <p className={styles.productCards__title}>
            <Sleeve text={title}/>
          </p>
          <p className={styles.productCards__description}>
            <Sleeve 
              text={description}
              delay={6}
              />
          </p>
          <Button type='secondary' url={link} text="Visit Project"/>
        </div>
      </div>
      </InView>
    </>
  )
}