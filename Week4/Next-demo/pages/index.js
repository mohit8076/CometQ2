import Link from "next/link";
import Head from 'next/head';

export default function HomePage() {
  return(
  <>
  <Head>
      <title>Welcome to Next.js!</title>
  </Head>
    <div>Welcome to Next.js!</div>
    <Link href='/posts/first'>
        <a>First Posts</a>
    </Link>
    <br />
      <img src="/logo.png" alt="Baloon" />
  </>
  )
}
