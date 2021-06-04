import Head from 'next/head'
import Signup from '../components/Signup'
import Header from '../components/Header'
import Layout from '../components/Layout'


const signup = () => {
    return (
        <div>
            <Head>
                <title>Functional Training | Sign up</title>
                <meta name='keywords' 
                content='functional training program'/>
            </Head>
            <Layout>
                <Header/>
                <Signup/>
            </Layout>           

        </div>
    )
}

export default signup
