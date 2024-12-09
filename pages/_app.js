import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sorenborn</title>
        <meta name="description" content="Strategic Communications for Industry-Defining Companies" />
        <meta property="og:title" content="Sorenborn" />
        <meta property="og:description" content="Strategic Communications for Industry-Defining Companies" />
        <meta property="og:url" content="https://sorenborn.com" />
        <meta property="og:site_name" content="Sorenborn" />
        <meta property="og:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SORENBORN%20Open%20Graph%20Image-SE6Hse8LWRsaxmPEnEI9yLxzamGPdv.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
