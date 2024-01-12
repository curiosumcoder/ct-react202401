import Image from 'next/image'
import styles from './page.module.css'
import Counter from './Counter'

// React Server Components

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Demo 8</h1>
        <Counter/>

        {[1,2,3,4,5].map(n => <><p>{n}</p></>)}

    </main>
  )
}
