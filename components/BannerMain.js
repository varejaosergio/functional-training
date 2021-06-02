import Image from 'next/image'
import bannerStyles from '../styles/BannerMain.module.css'


const BannerMain = () => {
    return (
        <>
        <div className={bannerStyles.banner}>
            <Image src="/curve2.jpg" layout="responsive" width={2464} height={1648}/>
            <h1 className={bannerStyles.text}><span>Functional</span> Training</h1>
            <p className={bannerStyles.description}>Build up your pace! <br/>Keep up to date with the latest Functional Training plans.</p>
            <a href='/signup' className={bannerStyles.buttonBanner} >Get Started</a>
        </div>
        </>
    )
}

export default BannerMain

