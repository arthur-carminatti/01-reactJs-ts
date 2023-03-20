import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/arthur-carminatti.png',
      name: 'Arthur Carminatti',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋', },
      { type: 'paragraph', content: 'This is my first ReactJS project 🚀' },
      { type: 'link', content: 'https://github.com/arthur-carminatti' },
    ],
    publishedAt: new Date("2023-03-09 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋', },
      { type: 'paragraph', content: 'This is my first ReactJS project 🚀' },
      { type: 'link', content: 'https://github.com/arthur-carminatti' },
    ],
    publishedAt: new Date("2023-03-10 20:00:00"),
  }
]


export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
