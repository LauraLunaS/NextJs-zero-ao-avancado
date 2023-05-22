import Head from 'next/head'
import styles from '../../../tarefas/styles/Home.module.css'
import Image from "next/image"

import heroImg from "../../public/hero.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tarefas+ || Organize suas tarefas de forma fácil</title>
      </Head>
      
      <main className={styles.main}>
        <div>
          <Image 
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br></br> seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>
          <section className={styles.box}>
            <span>+90 comentários</span>
          </section>
        </div>
      </main>
      
    </div>
  )
}
