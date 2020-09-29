import React, { useState, useEffect }  from 'react';
import { Redirect } from "react-router-dom";
import styles from './styles.module.scss';
import { MenuItem, Select, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../actions/postAction';
import { getMainContent } from '../../actions/mainContentAction';
import MiniItem from '../MiniItem';
import ItemEdit from '../ItemEdit';

const Admin = () => {
  const dispatch = useDispatch();
  const {posts, mainContent, isAdmin } = useSelector(state => ({
      posts: state.posts,
      mainContent: state.mainContent.mainContent,
      isAdmin: state.user.isAdmin
    }));

  const [formData, setFormData] = useState({
    content: '',
    collection: ''
  });

  const [currentItems, setCurrentItems] = useState(null);
  const [editPost, setEditPost] = React.useState(null);
  const [createPost, setCreatePost] = React.useState(null);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const handleChangeEdit = (data) => {
    clearEdit();
    setEditPost(data);
  }
  const handleCreatePost = () => {
    clearEdit();
    setCreatePost(true);
  }
  const clearEdit = () => {
    setEditPost(null);
    setCreatePost(null);
  }
  useEffect(()=>{
    dispatch(getAllPosts());
    dispatch(getMainContent());
  }, [dispatch]);

  useEffect(() => {
    if (formData.collection) {
      setCurrentItems(posts[formData.collection]);
    }
    if(formData.content === 'mainContent') {
      setCurrentItems(mainContent);
    }
  }, [formData, posts, mainContent]);

  return(
    <>
    {isAdmin ? (
    <section className={styles.container}>
      <aside className={styles.aside}>
        <Select id="content" value={formData.content} name="content" onChange={changeHandler} className={styles.aside__item}>
          <MenuItem value="mainContent">Main content</MenuItem>
          <MenuItem value="collection">Collections</MenuItem>
        </Select>
        {(formData.content === 'collection') && (
          <Select id="collection" value={formData.collection} name="collection" onChange={changeHandler} className={styles.aside__item}>
            <MenuItem value="wallPainting">Wall painting</MenuItem>
            <MenuItem value="digitalArt">Digital Art</MenuItem>
            <MenuItem value="prints">Prints</MenuItem>
            <MenuItem value="canvasPainting">Canvas painting</MenuItem>
            <MenuItem value="watercolor">Watercolor</MenuItem>
          </Select>
        )}
        {currentItems && <MiniItem items={currentItems} handleChangeEdit={handleChangeEdit}/>}
      </aside>
      <article className={styles.editBlock}>
        {!editPost && !createPost && (<Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleCreatePost}
          className={styles.editBlock__addnewButton}
        >
          Add new item
        </Button>)}
        {editPost && <ItemEdit editPost={editPost} isNew={false} clearEdit={clearEdit}/>}
        {createPost && <ItemEdit editPost={{image: '', title: '', collect: ''}} isNew={true} clearEdit={clearEdit}/>}
      </article>
    </section>) : <Redirect to="/login" />}
    </>
  )

}

export default Admin;