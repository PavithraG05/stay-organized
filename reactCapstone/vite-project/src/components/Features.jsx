import styles from './features.module.css'

const Features = () => {
    return(
        <div className="col-lg-12">
            <div>
                <h5 className={`${styles.homeFeaturesTitle} text-center`}>Explore all features "Dolister" has to offer</h5>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-3">
                <div className="col px-5 py-2">
                    <div className="card rounded-0">
                        <img src="/home-feature-1.webp" className={`${styles.homeCardImgTop}`} alt="..."/>
                        <div className="card-body text-center">
                            <h5 className="card-title">Categorize Tasks Effectively</h5>
                            <p>Create new tasks. <span className="text-primary">Categorize</span>, sort and filter the tasks based on their nature, making it easier to focus and manage your time efficiently.</p>
                        </div>
                    </div>
                </div>

                <div className="col px-5 py-2">
                    <div className="card rounded-0">
                        <img src="/home-feature-2.webp" className={`${styles.homeCardImgTop}`} alt="..."/>
                        <div className="card-body text-center">
                            <h5 className="card-title">Prioritize your tasks</h5>
                            <p>Set Priorities and deadline to understand the urgency of the tasks and sort them based on the<span className="text-primary"> priority</span>  to determine which tasks should be tackled first.</p>
                        </div>
                    </div>
                </div>

                <div className="col px-5 py-2">
                    <div className="card rounded-0">
                        <img src="/home-feature-3.png" className={`${styles.homeCardImgTop}`} alt="..."/>
                        <div className="card-body text-center">
                            <h5 className="card-title">Mark Task as Completed</h5>
                            <p>Stay focused and committed to making progress each day. Filter the tasks based on their pending status to stay focused. when done, <span className="text-primary">mark the task as completed.  </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features