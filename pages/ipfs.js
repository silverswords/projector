import React from 'react'
import Head from 'next/head'
import useIpfsFactory from '../components/ipfs/use-ipfs-factory'
import useIpfs from '../components/ipfs/use-ipfs'

const IPFSUI = () => {
  const { ipfs, ipfsInitError } = useIpfsFactory({ commands: ['id'] })
  const id = useIpfs(ipfs, 'id')

    return (
    <div>
      <Head>

    <meta name="theme-color" content="#000000" />
  
    <title>IPFS</title>
      </Head>
      <div className='hero'>
      <noscript>You need to enable JavaScript to run this app.</noscript>

      <header >
        <h1 className='title'>IPFS</h1>
        <p className='description'>
        To get started.
      </p>
      </header>

      <div className='row'>
      <main>
        {ipfsInitError && (
          <div >
            Error: {ipfsInitError.message || ipfsInitError}
          </div>
        )}
        {id && <IpfsId {...id} />}
      </main>
      </div>
      
      </div>

      <style jsx>{`
       .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
     </div>
    )
}

const IpfsId = (props) => {
  if (!props) return null
  return (
    <div>
      <div className='card'>
        {['id', 'agentVersion'].map((key) => (
          <div key={key}>
            <h3>{key}</h3>
            <p>{props[key]}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card {
          padding: 20px 20px 24px;
          width: 350px;
          text-align: left;
          text-decoration: none;
          color: #43FFFF;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        `}</style>
    </div>
  )
}

export default IPFSUI
