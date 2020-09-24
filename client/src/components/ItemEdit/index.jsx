import React, { useState, useEffect } from 'react';
import { Button, TextField, MenuItem, Select} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import styles from './styles.module.scss';
import {updateMainContent} from '../../actions/mainContentAction';
import {updatePost, createPost, deletePost} from '../../actions/postAction';

const ItemEdit = ({editPost: item, clearEdit, isNew}) => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    collect: '',
    purpose: ''
  });
  const [uploadUrl, setUploadUrl] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setFormData({
      ...formData,
      ...item
    });
    setUploadUrl(null);
  },[item]);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };
  const uploadPhoto = async (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    })
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setUploadUrl(reader.result);
    }
  };
  const submitForm = (e) =>{
    e.preventDefault();
    isNew ? createItem() : updateItem();
  };
  const createItem = async () => {
    dispatch(createPost(formData));
  };
  const updateItem = () => {
    if (item.purpose) {
      dispatch(updateMainContent(formData));
    } else {
      dispatch(updatePost(formData, item.collect));
    }
  };
  const deleteItem = () => {
    clearEdit();
    dispatch(deletePost(formData));
  };

  return (
    <form className={styles.container} onSubmit={submitForm}>
      <div className={styles.container__block}>
        {uploadUrl ? (
          <img src={uploadUrl} className={styles.block__image} alt=""/>
          ) : (
            formData.image && <img src={`http://localhost:8080/image/${formData.image}`} className={styles.block__image} alt=""/>
          )
        }
        <Button variant="contained" color="primary" component="span" className={styles.block__button}>
          Upload
          <input accept="image/*" id="contained-button-file" multiple type="file" onChange={uploadPhoto} className={styles.hidden}/>
        </Button>
      </div>
      <div className={styles.container__block}>
        {item.purpose ? (
          <Select className={styles.block__item} id="purpose" required value={formData.purpose} name="purpose" onChange={changeHandler}>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
        ): (
          <Select className={styles.block__item} required id="collect" value={formData.collect} name="collect" onChange={changeHandler}>
          <MenuItem value="wallPainting">Wall painting</MenuItem>
            <MenuItem value="digitalArt">Digital Art</MenuItem>
            <MenuItem value="prints">Prints</MenuItem>
            <MenuItem value="canvasPainting">Canvas painting</MenuItem>
            <MenuItem value="watercolor">Watercolor</MenuItem>
          </Select>
        )}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          value={formData.title}
          onChange={changeHandler}
          autoFocus />
        <div className={styles.buttonWrapper}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <Button type="button" variant="contained" color="primary" onClick={clearEdit}>
            Cancel
          </Button>
          {item.collect && (
            <Button type="button" variant="contained" color="secondary" onClick={deleteItem}>
              Delete
            </Button>
          )}
        </div>
      </div>
    </form>
  )
}

export default ItemEdit;