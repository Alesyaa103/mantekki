import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../../components/Item';
import styles from './styles.module.scss';
import { getRecentPosts } from '../../actions/postAction';
import { getMainContent } from '../../actions/mainContentAction';
import Spinner from '../../components/Spinner';

const MainPage = () => {
  const dispatch = useDispatch();

  const {recent, mainContent, loading } = useSelector(state => ({
    recent: state.posts.recent,
    mainContent: state.mainContent.mainContent,
    loading: state.posts.loading || state.mainContent.loading
  }));

  const [main, setMain] = useState({
    left: '',
    right: ''
  })

  useEffect(()=>{
    (!recent || ( recent && !Boolean(recent.length))) && dispatch(getRecentPosts());
    !mainContent && dispatch(getMainContent());
    //eslint-disable-next-line
  }, [dispatch]);

  useEffect(()=>{
    const left = (mainContent ?? []).find(item => item.purpose === 'left');
    const right = (mainContent ?? []).find(item => item.purpose === 'right');
    setMain({left, right});
  }, [mainContent]);


  return (
    <>
    {loading ? <Spinner /> : (
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
            recent.map(item => <Item key={item._id} name={item.title} image={item.image} collect={item.collect}/>)
          }
        </div>
      </article>)
      }
    </section>)}
    </>
  )
}

export default MainPage;