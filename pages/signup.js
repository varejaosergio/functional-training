import Head from 'next/head'
import Form from '../components/Form'
import Header from '../components/Header'
import Layout from '../components/Layout'
import signupStyles from '../styles/Signup.module.css'

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
                <Form/>
            </Layout>           

        </div>
    )
}

export default signup
