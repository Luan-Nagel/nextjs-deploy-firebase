import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

export default function Home( props ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <>
          {props.ssrWorking ? (
            <div>
              <img src="/assets/sulca-fone.png" height="100" />
              <h2>Deployment Successful of Next JS Application with SSR on Firebase.</h2>
            </div>
          ) : (
            <h2>SSR not working</h2>
          )}
        </>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  return { props: { ssrWorking: true } }
}