import styles from './Maincontent.module.css'
import Sidebar from '../Sidebar'
import { combinedAnimals } from '../../Data/data'

const Maincontent = () => {
    return (
        <>
            <Sidebar animals={combinedAnimals}/>
            <div className={styles.mainContent}>
                <h3 className='h3'>Here is Maincontent</h3>
            </div>
        </>
        
    )
}

export default Maincontent