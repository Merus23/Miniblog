import React from 'react'
import style from './About.module.css'

import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className={style.about}>
      <h2>Sobre o mini <span>Blog</span> </h2>
      <p>Este projeto consiste em um blog feito com React no front-end e Firebase no back-end</p>
      <Link className='btn' to="/posts/create">Criar post</Link>
    </div>
  )
}
