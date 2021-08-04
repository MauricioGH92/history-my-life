import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CV MauricioGH92</title>
        <meta name="description" content="History of my life in CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Here is My-CV
      </main>

      <footer className={styles.footer}>
        
          Powered by{' '}
          MauricioGH92
      </footer>
    </div>
  )
}
