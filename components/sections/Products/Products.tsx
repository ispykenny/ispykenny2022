import { Sleeve } from "components/elements/Sleeve/Sleeve";
import { HRElement } from "components/elements/Hr/HRElement";
import { Container } from "components/layouts/Grid/Grid";
import { ProductCards } from "./ProductCards";
import styles from './Product.module.scss';

const data = require('./products.json');
export const Products = () => {
  return (
    <section className={styles.productCardsParent}>
      <Container hasShimmy={true} narrow={true}>
        <h2><Sleeve text="My Projects"/></h2>
        <HRElement/>    
          {data.map((product : any, index : number) =>  (
              <ProductCards key={index} {...product}/>
            )
          )}
      </Container>
    </section>
  )
}