import Link from 'next/link';
import '../styles/Home.module.css';

function Home() {
  return (
    <ul className='style'>
      <li>
        <Link href="./render/csr" prefetch={false}>
          <a>CSR</a>
        </Link>
      </li>
      <li>
        <Link href="./render/ssr" prefetch={false}>
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="./render/ssg" prefetch={false}>
          <a>SSG</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home