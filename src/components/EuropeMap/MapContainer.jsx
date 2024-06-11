import styles from './styles.module.css'
import MapChart from './MapChart';

const MapContainer = () => {
    return (
        <div className={styles.mapContainer}>
            <MapChart />
        </div>
    )
}

export default MapContainer;