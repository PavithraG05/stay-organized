import styles from './todocard.module.css'

export default function getCompletedClass(status){

    let completed_strike='';
    let status_icon_styles = '';

    if(status === 'Completed'){
        // status_icon="bi-check-circle-fill";
        completed_strike = styles.strike;
        status_icon_styles = styles.biCheckCircleFill;
    }
    else{
        // status_icon="bi-check-circle";
        status_icon_styles = styles.biCheckCircle;
    }

    return {completed_strike, status_icon_styles};
}