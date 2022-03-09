import {NextPage} from 'next';
import { Container } from 'components/layouts/Grid/Grid';
import styles from 'components/sections/Hero/Hero.module.scss';
import { Button } from 'components/elements/Button/Button';
import { Sleeve } from 'components/elements/Sleeve/Sleeve';
import { PageTitle } from 'components/elements/PageTitle/PageTitle';

interface Props {
  pageTitle: string,
  pageTitleContent: string
}


export const Hero : NextPage <Props> = ({pageTitle, pageTitleContent}) => {

  const lazyStyles = {
    marginTop: `2em`
  }
  
  return (
    <section>
      <Container hasShimmy={true} narrow={true}>
        <div className={styles.hero}>
          <PageTitle>
            <Sleeve 
              text={pageTitle}
              delay={32}
            />
          </PageTitle>
          <p className={styles.text}>
            <Sleeve 
              text={pageTitleContent} 
              delay={10}/>
          </p>
          <div style={lazyStyles}>
            <Button 
              type="primary"
              url="https://github.com/ispykenny"
              text="Let's Connect"  
            />
          </div>
        </div>
      </Container>
    </section>
  )
}