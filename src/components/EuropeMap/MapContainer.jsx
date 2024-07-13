import styles from './styles.module.css'
import MapChart from './MapChart';

const MapContainer = () => {
    return (
        <div className={styles.mapContainer}>
            <div className='hero_cont'>
                <h1 className="main_heading">Q-net-Q</h1>
                <span className='copy_text'>EuroQCI research testbeds for<br />Quantum Key Distribution<br />in Germany</span>
            </div>
            <MapChart />
        </div>
    )
}

export default MapContainer;