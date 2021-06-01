import Head from 'next/head'
import BannerMain from '../components/BannerMain'
import Nav from '../components/Nav'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Functional Training</title>
        <meta name='keywords' 
        content='functional training, exercise programs, begining to athlete'/>
      </Head>
      <Nav/>
      <BannerMain/>
      
     
    </div>
  )
}
