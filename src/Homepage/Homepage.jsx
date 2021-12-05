import Image from 'next/image'
import styles from 'static/css/Home.module.css'
import Button from "core/components/Button"

const Homepage = () => {
    return <div className={styles.container}>
        <main className={styles.main}>
            <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
            <Button onClick={()=>console.log("clicked")}>Hello World</Button>
        </main>

        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
    </div>
}

export default Homepage