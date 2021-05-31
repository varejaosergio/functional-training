import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import BannerMain from './BannerMain'



const Layout = ({children}) => {
    return (
        <>
            <Nav/>
            <div className={styles.container}>
            <BannerMain/>
                <main className={styles.main}>                    
                <Header/>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout