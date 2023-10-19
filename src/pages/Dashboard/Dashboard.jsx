import React from 'react'
import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'


const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid
  
  const {documents: posts, loading} = useFetchDocuments('posts', null,uid)

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className='btn'>Criar seu primeiro posts</Link>
        </div>
      ) : (
        <div>
          Tem post!
        </div>
      )}

      {posts && posts.map((post) => <h3 key={post.id}>{post.title}</h3>)}
    </div>
  )
}

export default Dashboard
