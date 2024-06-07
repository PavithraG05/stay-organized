import Banner from './Banner'
import Features from './Features'
import styles from './home.module.css'

const Home = () => {
    return(
        <div className={`row ${styles.homeBody}`}>
            <Banner/>
            <Features/>
        </div>
    )
}

export default Home