import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Login from '../components/Login'
import loginStyles from '../styles/Login.module.css'

const login = () => {
    return (
        <>
            <Head>
                <title>Functional Training | Login</title>
                <meta name='keywords' 
                content='functional training program'/>
            </Head>
            <Layout>
                <Header/>
                <Login/>
            </Layout>

        </>
    )
}

export default login