import React from 'react';
import styles from './Home.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';

function Home() {
  
  const [query, setQuery] = useState('');
  const {documents: posts, loading} = useFetchDocuments('posts');


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
  }


  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)} />
        <button className='btn btn-dark' type="submit">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        
        {posts && posts.map((post) => (
          <h3>{posts.title}</h3>
        ))}

        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
