import Head from 'next/head'
import Image from 'next/image'

export default function AboutMePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>Marco Da Re - About me</title>
      </Head>
      <div className="card">
        <div className="header">
          <div className="logo">
            <Image
              src="/svg/logo_nobg.svg"
              width={500}
              height={300}
              alt="mrc.dare logo"
            />
          </div>
          <div className="social">
            
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Stay Tuned</h1>
            <p>My Awesome Online Playground Coming Soon! </p><p>Shoot me an email if you&apos;re curious.</p>
          </div>
          <a href="mailto:marco@mrcdare.dev">
            <div className="cta">Contact me</div>
          </a>
        </div>
        <div className="footer">
        </div>
      </div>
    </>
  )
}
