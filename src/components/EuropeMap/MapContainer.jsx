import styles from './styles.module.css'
import MapChart from './MapChart';

const MapContainer = () => {
    return (
        <div className={styles.mapContainer}>
            <h1 class="main_heading">Q-net-Q</h1>
            <MapChart />
        </div>
    )
}

export default MapContainer;