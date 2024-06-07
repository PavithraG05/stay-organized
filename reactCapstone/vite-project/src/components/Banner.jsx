import styles from './banner.module.css'
const Banner = () => {
    return(
        <div className={`col-lg-12 ${styles.homeBlockquote}`}>
            <blockquote className="blockquote">
                <p className={styles.homeBlockquoteText}>Today's to-do's, Tomorrow's triumphs</p>   
                <a className={`btn ${styles.homeBtn}`} href="/register" type="button">Get Started&nbsp;<i className="bi bi-arrow-right-circle-fill"></i></a> 
            </blockquote>
        </div>
    )
}

export default Banner