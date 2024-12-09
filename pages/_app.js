import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home - Sorenborn</title>
        <meta name="description" content="Strategic Communications for Industry-Defining Companies" />
        <meta property="og:title" content="Sorenborn.com" />
        <meta property="og:description" content="Strategic Communications for Industry-Defining Companies" />
        <meta property="og:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SORENBORN-Logo%20-%20Large%20(1)-XE9rhs74QUH3JGrJHSVDlcrbHlZ3Fa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
