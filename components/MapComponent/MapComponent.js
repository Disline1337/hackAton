import React from 'react';
import style from './MapComponent.module.css'; // Optional: for custom styles

const MapComponent = () => {
    return (
        <div className={style.mapContainer}>
            <iframe
                src="https://geois2.orb.ru/resource/8895/display/tiny?base=basemap_0&lon=56.0525&lat=52.3898&angle=0&zoom=9&styles=8793%2C7986%2C7975%2C2092&linkMainMap=true&events=false&panel=none&controls=&panels="
                height="600"
                width="800"
                title="Map"
                style={{ border: 'none' }} // Optional: remove default border
            ></iframe>
        </div>
    );
};

export default MapComponent;