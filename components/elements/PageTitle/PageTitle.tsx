import { NextPage } from 'next';
import styles from './PageTitle.module.scss'
export const PageTitle : NextPage = ({children}) => {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  )
}