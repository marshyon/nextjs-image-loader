import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DogImage from './DogImage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>hello   there</p> 
        <DogImage imgSrc="/dog1.jpg"/>
        <DogImage imgSrc="/dog2.jpg"/>
        <DogImage imgSrc="/dog3.jpg"/>

      </main>


    </div>
  )
}
