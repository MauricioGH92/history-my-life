import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePhoto from '../public/IMG_20210828_094149_2.jpg'
import instagram from '../public/instagram.png'
import linkedin from '../public/LinkedIn.png'
import github from '../public/github.webp'
import flagEcuador from '../public/flag-ecuador.png'



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
              <Image src={profilePhoto} alt="Michael Merchan" />
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
              <li><a href="mailto:merchan.ber.mau@gmail.com">merchan.ber.mau@gmail.com</a></li>
              <li><Image src={flagEcuador} alt ="flag Ecuador" height={20}  width={20} /> Ecuador </li>
            </ul>
          </div>
          <div className="card_social">
            <a href="https://www.linkedin.com/in/mauricio-merchan-100866155/" target="_blank">
              <Image src= {linkedin} alt="profile Linkedin" />
            </a>
            <a href="https://github.com/MAURI-PROGRAM"  target="_blank">
              <Image src= {github} alt="profile Linkedin" />
            </a>
            <a href="https://www.instagram.com/"  target="_blank">
              <Image src= {instagram} alt="profile Instagram" />
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
