import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Functional</span> Training
            </h1>
            <p className={headerStyles.description}>Build up your pace! Keep up to date with the latest Functional Training plans.</p>           
        </div>
    )
}

export default Header