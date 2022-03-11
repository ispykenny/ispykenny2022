import { NextPage } from 'next'
import styles from './ScreenReader.module.scss'
export const ScreenReader: NextPage <{label?: string}> = ({label}) => {
  return (
    <>
      <span className={styles.srOnly}>{label}</span>
    </>
  )
}