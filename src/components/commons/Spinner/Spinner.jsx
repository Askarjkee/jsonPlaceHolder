import loadingSvg from '../../../assets/oval.svg';
import styles from './spinner.module.css';

export const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <img src={loadingSvg} alt="loading"/>
        </div>
    )
}