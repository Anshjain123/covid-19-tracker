import React, { useEffect } from 'react'
import { Circle, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css';



function ChangeMapView({ coords, zoom }) {
  const map = useMap();
  // console.log(map.getZoom());
  map.setView(coords, zoom);
  setInterval(function () {
    map.invalidateSize();
  }, 0);
  return null;
}

const Map = ({ countries, center, zoom }) => {

  // const map = useMap();
  // useEffect(() => {
  //   
  // }, [])
  return (
    <MapContainer className='mapcontainer' center={center} zoom={zoom}   >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeMapView coords={center} zoom={zoom} />
      {countries.map((country) => (
        <Circle
          center={[country.countryInfo.lat, country.countryInfo.long]}
          fillOpacity={0.4}
          color="red"
          fillColor='rgba(204, 16, 52, 0.5)'
          radius={
            Math.sqrt(country.cases * 8000)
          }
        >
        </Circle>

      ))}
    </MapContainer>

  )
}

export default Map