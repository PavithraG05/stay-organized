import styles from './pagenotfound.module.css'

const PageNotFound = () => {
    return(
        <div className={styles.pageNotFoundContainer}>
            <h3 className="text-center">404: Page not found</h3>
            <h6 className="text-center">The page you are looking for doesn't exist or error occured.<br/>Go back to localhost:5173 to choose a new direction.</h6>
            <br/>
            <div className={styles.notFoundImage}>
                <img src='/404.png' />
            </div>
        </div>
    )
}

export default PageNotFound