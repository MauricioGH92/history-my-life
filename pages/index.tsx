import Head from 'next/head'
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
      <div className="About">
        <div className="card">
          <div className="card_details">
            <div className="card_photo center circle">
              <img src="IMG_20210828_094149_2.jpg" alt="Michael Merchan"/>
              {/* <svg viewBox="0 0 100 100"  style="enable-background:new -580 439 577.9 194;"
                xml:space="preserve">
                <circle cx="50" cy="50" r="50" />
              </svg> */}
            </div>
            <p className="card_title">Hi, My name is</p>
            <p className="card_value">Michael Merchan</p>
          </div>
          <div className="card_userdata">
            <ul>
              <li>merchan.ber.mau@gmail.com</li>
              <li>Ecuador</li>
            </ul>
          </div>
          <div className="card_social">
            <a href="https://twitter.com/gndx">
              <img src="${twitter}" />
            </a>
            <a href="https://github.com/gndx">
              <img src="${github}" />
            </a>
            <a href="https://instagram.com/gndx">
              <img src="${instagram}" />
            </a>
          </div>
        </div>
      </div>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          MauricioGH92
      </footer>
    </div>
  )
}
