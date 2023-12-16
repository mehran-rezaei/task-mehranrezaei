import Head from 'next/head'
import HomeContainer from '../Components/Containers/Home'
export default function Home() {
  return (
      <main dir='rtl'>
        <Head>
        <title>task</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
          <HomeContainer />
      </main>
  )
}
