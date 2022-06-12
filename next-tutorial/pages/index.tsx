import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>Home</div>
      <Link href={"/about"}>
        <a>About</a>
      </Link>
    </div>
  )
}

export default Home
