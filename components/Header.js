import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Functional</span> Training
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest Training.
                 Build up your pace!</p>           
        </div>
    )
}

export default Header