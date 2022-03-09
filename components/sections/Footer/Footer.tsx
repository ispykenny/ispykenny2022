import { Container } from 'components/layouts/Grid/Grid';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container narrow={true}>
        <p>Made with ❤️ from Temecula, California 🌴</p>
      </Container>
    </footer>
  )
}