import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
    const [currentValue, setValue] = useState(0);
    const ADD = () => setValue(currentValue + 1);
    const SUBTRACT = () => setValue(currentValue - 1);
    return (
        <div className={styles.container}>
            <Head>
                <title> Create Next App </title>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
            <h1 className={styles.title}>
        Removing Welcome to Next.js
       
</h1>
                <h1 className={styles.title}>Welcome to Next.js.</h1>

                <p className={styles.description}>
                    see how fast reloading works <code className={styles.code}> With this example. </code>
                </p>

                <p> Click the two buttons to add or subtract from the current value </p>

                <div className={styles.grid}>
                    <h2 className={styles.card} onClick={ADD}>
                        {" "}
                        ADD{" "}
                    </h2>

                    <h2 className={styles.card}> {currentValue} </h2>

                    <h2 className={styles.card} onClick={SUBTRACT}>
                        {" "}
                        SUBTRACT{" "}
                    </h2>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>{" "}
                </a>
            </footer>
        </div>
    );
}
 