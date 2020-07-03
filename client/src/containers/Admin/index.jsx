import React, { useState, useEffect }  from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuItem, Select, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../actions/postAction';
import { getMainContent } from '../../actions/mainContentAction';
import MiniItem from '../../components/MiniItem';
import ItemEdit from '../../components/ItemEdit';

const Admin = ({isAdmin, posts, mainContent}) => {
  // if(isAdmin) {
    const dispatch = useDispatch();
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
    }, []);

    useEffect(() => {
      if (formData.collection) {
        setCurrentItems(posts[formData.collection]);
      }
      if(formData.content === 'mainContent') {
        setCurrentItems(mainContent);
      }
    }, [formData]);

    return(
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
          {createPost && <ItemEdit editPost={{}} isNew={true} clearEdit={clearEdit}/>}
        </article>
      </section>
    )
  // } 
  // return <p>Go out</p>
}

Admin.propTypes = {
  isAdmin: PropTypes.bool
};

const mapStateToProps = rootState => ({
  isAdmin: rootState.user.isAdmin,
  posts: rootState.posts,
  mainContent: rootState.mainContent.mainContent,
});

export default connect(mapStateToProps)(Admin);