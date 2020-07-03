import React from 'react';
import Item from '../../components/Item';
import items from '../../data';
import styles from './styles.module.scss';

const MainPage = () => {
  const elements = []
  for (let i=0; i<6;i++){
    const {id, ...itemProps} = items[i];
    elements.push(<Item {...itemProps}  key={id} />);
  }
  return (
    <section className={styles.section}>
      <article className={styles.wraper}>
        <div className={styles.mainContent}>
          <img src="https://media.vogue.co.uk/photos/5ee395abe400ca1697b1781f/2:3/w_1920%2cc_limit/Skincare%20Layering%20Colier%20Schorr.jpg" alt="Main" className={styles.mainContent__image}/>
        </div>
        <div className={styles.addContent}>
          {/* <h3 className={styles.addContent__text}>Delivery terms depend on recipient's destination (country).</h3>
          <h3 className={styles.addContent__text}>If you have any questions, please contact us: info@exaple.com</h3> */}
          <ul className={[styles.addContent__text, styles.delivery].join(' ')}>
            <li><span className={styles.delivery__text}>Order</span></li>
            <li className={styles.delivery__text__middle}><span>Packing</span><span> 1-14 days</span></li>
            <li><span className={styles.delivery__text}>delivery</span></li>
          </ul>
        </div>
        <div className={styles.mainContent}>
          <img src="https://media.vogue.co.uk/photos/5ee395abe400ca1697b1781f/2:3/w_1920%2cc_limit/Skincare%20Layering%20Colier%20Schorr.jpg" alt="Main" className={styles.mainContent__image}/>
        </div>
      </article>
      <article>
        <h2 className={styles.title}>Special offers</h2>
        <div className={styles.itemContent}>{elements}</div>
      </article>
    </section>
  )
}

export default MainPage;