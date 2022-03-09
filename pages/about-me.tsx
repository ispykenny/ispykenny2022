import { PageTitle } from 'components/elements/PageTitle/PageTitle';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { Container } from 'components/layouts/Grid/Grid';
import { SEO } from 'components/Seo';
import { NextPage } from 'next';
import Image from 'next/image';
import family from '../public/images/family.jpg'
import styles from 'styles/pages/AboutMe.module.scss'
import { Socials } from 'components/sections/Socials/Socials';
export const AboutMe: NextPage = () => {
  return (
    <>
      <SEO 
        title="About Me"
        description="This page is the home page of ispykenny"
      />
      <section style={{marginBottom: '2em'}}>
        <Container narrow={true} hasShimmy={true}>
          <PageTitle>
            <Sleeve text={"About Me Page"} delay={90}/>
          </PageTitle>
          <p>
          <Sleeve 
            text={"I'm a father of 3 👧🏻👧🏻👦🏻 and married to my best friend, Ramey. Our family currently lives in Temecula California where we spend most of our time with family. I'm a first generation born on my mothers' side 🇲🇽 and spent most of my childhood in Mexico. I'm a type 1 diabetic since Novemeber 14th 2007 and currently use multi-day injections with a Dexcom to manage my glucose."}
            delay={0}
            />
          </p>
          <Socials/>
          <h2><Sleeve 
            text={"Things I'm lovin:"}/></h2>
          <ul className={styles.list}>
            <li><Sleeve text={'🎶 Vinyl Records.(currently spinning: Nell Young, Bob Dylan)'}/></li>
            <li><Sleeve text={'👨🏻‍💻 Nerding out over Jamstack frameworks.'}/></li>
            <li><Sleeve text={'☕️ Coldbrew Coffees.'}/></li>
            <li><Sleeve text={'👟 Vans Shoes.'}/></li>
          </ul>
          <Image 
            src={family}
            placeholder="blur"
            height="1080"
            width="1440"
            alt="Me and my family hanging out at an alpaca farm"
          />
        </Container>
      </section>
    </>
  )
}

export default AboutMe;