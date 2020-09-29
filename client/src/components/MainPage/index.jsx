import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../Item';
import styles from './styles.module.scss';
import { getRecentPosts } from '../../actions/postAction';
import { getMainContent } from '../../actions/mainContentAction';

const MainPage = () => {
  const dispatch = useDispatch();

  const {recent, mainContent } = useSelector(state => ({
    recent: state.posts.recent,
    mainContent: state.mainContent.mainContent,
  }));

  const [main, setMain] = useState({
    left: '',
    right: ''
  })

  useEffect(()=>{
    dispatch(getRecentPosts());
    dispatch(getMainContent());
  }, [dispatch]);

  useEffect(()=>{
    console.log(mainContent)
    const left = (mainContent ?? []).find(item => item.purpose === 'left');
    const right = (mainContent ?? []).find(item => item.purpose === 'right');
    setMain({left, right});
  }, [mainContent]);


  return (
    <section className={styles.section}>
      {mainContent && (
      <article className={styles.wraper}>
        {main.left && (
        <div className={styles.mainContent}>
          <img src={main.left.image} alt="Main" className={styles.mainContent__image}/>
        </div>)
        }
        <div className={styles.addContent}>
          <ul className={[styles.addContent__text, styles.delivery].join(' ')}>
            <li className={styles.delivery__text}><span>Order</span></li>
            <li className={styles.delivery__text__middle}><span>Packing</span><span> 1-14 days</span></li>
            <li className={styles.delivery__text}><span>delivery</span></li>
          </ul>
        </div>
        {main.right && (
        <div className={styles.mainContent}>
          <img src={main.right.image} alt="Main" className={styles.mainContent__image}/>
        </div>)
        }
      </article>)
      }
      { recent && (
      <article>
        <h2 className={styles.title}>Special offers</h2>
        <div className={styles.itemContent}>
          {
            recent.map(item => <Item key={item._id} name={item.title} image={item.image}/>)
          }
        </div>
      </article>)
      }
    </section>
  )
}

export default MainPage;