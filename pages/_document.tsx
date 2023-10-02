import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Marco Da Re Website',
    author: 'Marco Da Re',
    theme_color: '#e1f0fb',
    description: 'Discover Marco Da Re\'s personal website, a hub of news and informative content. Stay informed and engaged with a wealth of diverse topics, insights, and updates curated by Marco Da Re.',
    canonicalURL: 'https://mrcdare.dev',
    image: '/apple-touch-icon.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href={meta.canonicalURL} />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2199ea" />
        <meta name="msapplication-TileColor" content={meta.theme_color} />
        <meta name="theme-color" content={meta.theme_color}></meta>
        <meta name="robots" content="follow, index" />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Muli:wght@300;700&display=swap" rel="stylesheet" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"/>  */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
