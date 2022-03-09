import styles from './Socials.module.scss';
import { SocialsCards } from './SocialsCards';

export const Socials = () => {
  const links = [
    {
      url: 'https://twitter.com/ispykenny',
      text: 'Twitter'
    },
    {
      url: 'https://instagram.com/ispykenny',
      text: 'Instagram'
    },
    {
      url: 'https://github.com/ispykenny',
      text: 'Github'
    },
    {
      url: 'https://codepen.io/ispykenny',
      text: 'CodePen'
    },
    {
      url: 'https://www.linkedin.com/in/kennykrosky/',
      text: 'Linkedin'
    },
    {
      url: 'https://www.behance.net/kennykrosky',
      text: 'Behance'
    }
  ]

  return (
    <section>
      <ul className={styles.socials}>
        {links.map((link, index) => (
          <SocialsCards {...link} key={index}/>
        ))}
      </ul>
    </section>
  )
}