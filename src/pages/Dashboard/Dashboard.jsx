import React from 'react'
import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import {useFetchDocuments} from '../../hooks/useFetchDocuments'


const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid
  
  const post = []

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {post && post.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className='btn'>Criar seu primeiro posts</Link>
        </div>
      ) : (
        <div>
          Tem post!
        </div>
      )}
    </div>
  )
}

export default Dashboard
