import Header from "../components/Header"
import Layout from "../components/Layout"
import Head from 'next/head'

const about = () => {
    return (
        <>
            <Head>
                <title>Functional Training | About</title>
                <meta name='keywords' 
                content='functional training program'/>
            </Head>
            <Layout>
                <Header/>
            </Layout>
        </>
    )
}

export default about
