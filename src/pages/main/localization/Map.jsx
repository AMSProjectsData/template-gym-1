import React from 'react';
import "leaflet/dist/leaflet.css"

import style from './Localization.module.css'

import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import { Icon } from 'leaflet';

export function Map() {

    const customIcon = new Icon({
        iconSize: [30,38],
        iconUrl: require('../../../img/pins.png')
    })

  return (
    <MapContainer center={[-1.2962208,-47.8972139]} zoom={15} className={style.leaflet_container}>
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[-1.2993906222188722, -47.896889041251434]} icon={customIcon}>

      </Marker>
    </MapContainer>
  );
}