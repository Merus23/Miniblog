import React from 'react';
import styles from './CreatePost.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const {user} = useAuthValue();
  const [formError, setFormError] = useState('');
  
  const navigate = useNavigate();

  const {insertDocument, response} = useInsertDocument('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    //validate image URL
    try {
      new URL(image);      
    }catch(error){
      setFormError('A imagem precisa ser uma URL válida');
      return;
    }

    const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase());

    if(!title || !image || !body || !tags){
      setFormError('Preencha todos os campos');
      return;
    }

    if(formError) return;

    insertDocument({ title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    });
   
   
    navigate('/');
  }
  
  return (
    <div className={styles.create_post}>
      <h2>Create Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
      <form onSubmit={handleSubmit}>
        
        <label>
          <span>Título:</span>
          <input type='text' name='title' required placeholder='Pense em um bom título...' onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        
        <label>
          <span>URL da imagem:</span>
          <input type='text' name='image' required placeholder='Insira uma imagem que represente o seu post' onChange={(e) => setImage(e.target.value)} value={image}/>
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea name='body' required placeholder='Insera o conteúdo do post' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input type='text' name='tags' required placeholder='Insira as tags separadas por vírgulas' onChange={(e) => setTags(e.target.value)} value={tags}/>
        </label>

        <button className='btn'>Postar</button>
        {/* {response.loading && <button className='btn' disabled>Aguarde...</button>} */}
        {/* {!response.loading && <button className='btn'>Entrar</button>} */}
        {/* {response.error || formError &&  <p className='error'>{error || formError}</p>} */}

      </form>
    </div>
  )
}

export default CreatePost
