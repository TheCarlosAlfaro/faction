import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Faction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Faction</h1>
      </main>

      <footer></footer>
    </div>
  );
}
