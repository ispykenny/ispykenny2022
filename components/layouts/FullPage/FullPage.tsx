import {NextPage} from 'next';
import styles from './FullPage.module.scss';

export const FullPage: NextPage = ({children}) => {
  return (
    <div className={styles.fullPage}>
      {children}
    </div>
  )
}