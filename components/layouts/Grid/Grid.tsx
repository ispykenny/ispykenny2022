import { NextPage } from 'next';
import styles from './Grid.module.scss';

interface Props {
  narrow?: boolean,
  hasShimmy?: boolean
}

export const Container: NextPage <Props> = ({narrow, children, hasShimmy}) => {
  return (
    <div 
      className= {
        narrow ? styles.container__inner : styles.container
      }
    >
      {hasShimmy && (
        <div className={styles.shimmy}></div>
      )}
      {children}
    </div>
  )
}