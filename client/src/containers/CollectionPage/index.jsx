import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCollection } from '../../actions/postAction';
import CollectionItem from '../../components/CollectionItem';
import styles from './styles.module.scss';
import Spinner from '../../components/Spinner';

const CollectionPage = () => {
  const dispatch = useDispatch();
  const { collection } = useParams();
  const { loading } = useSelector(state => state.posts);
  const posts = useSelector(state => state.posts[collection]);

  useEffect(() => {
    !posts && dispatch(getCollection(collection));
    //eslint-disable-next-line
  }, [collection]);

  return (
    <>
    {loading ? <Spinner /> : (
    <section className={styles.wrapper}>
      <div className={styles.textBlock}>
        <p className={styles.text}>Here you will see the potfolios of our artists. The painting is nanified by brush material - tactile acrylic. We
          are ready to draw any image of your stylized image. Before applying the paining we provide customers with a sketch
          of finished work for the sedbelling of the size and place of applying the painting.</p>
      </div>
      <div className={styles.posts}>
        {posts && posts.map(item =>
        <CollectionItem image={item.image} title={item.title} key={item._id} />)}
      </div>
    </section>
    )}
    </>
  )
}

export default CollectionPage