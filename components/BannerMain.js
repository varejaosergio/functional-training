import Image from 'next/image'
import styles from '../styles/BannerMain.module.css'


const BannerMain = () => {
    return (
        <>
        <div className={styles.banner}>
            <Image src="/curve2.jpg" layout="responsive" width={2464} height={1648}/>
            <h1 className={styles.text}><span>Functional</span> Training</h1>
            <p className={styles.description}>Build up your pace! <br/>Keep up to date with the latest Functional Training plans.</p>
            <button className={styles.button} type="submit">Get Started</button>
        </div>
        </>
    )
}

export default BannerMain

