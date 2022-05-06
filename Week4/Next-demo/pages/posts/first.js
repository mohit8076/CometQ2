import Link from "next/link";
import Head from "next/head";
import Container from "../../Components/container";

export default function firstPost() {
  return (
    <>
      <Container>
        <Head>
          <title>My First Post</title>
        </Head>
        <h1>My First Post</h1>
        <h2>
          <Link href="/">
            <a>Home</a>
          </Link>
        </h2>
      </Container>
    </>
  );
}
