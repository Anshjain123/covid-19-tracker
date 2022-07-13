import React, { useEffect, useRef } from 'react'
import { Circle, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet'
import './Map.css'
import 'leaflet/dist/leaflet.css';
import numeral from 'numeral';



function ChangeMapView({ coords, zoom }) {
  const map = useMap();
  // console.log(map.getZoom());
  map.setView(coords, zoom);
  setInterval(function () {
    map.invalidateSize();
  }, 0);
  return null;
}

const Map = ({ countries, center, zoom, caseType = "recovered" }) => {


  const casestyles = {
    cases: {
      hex: "#CC1034",
      multiplier: 5800,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 5800,
    },
    deaths: {
      hex: "#fb4443",
      multiplier: 5000,
    }
  }
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
          color={casestyles[caseType].hex}
          fillColor={casestyles[caseType].hex}
          radius={
            Math.sqrt(country[caseType] * casestyles[caseType].multiplier)
          }
        >
          <Popup >
            <div style = {{height:'100%', width:'100%'}}>
              <div style={{ backgroundImage: `url(${country.countryInfo.flag})`, height: '100px', width: '107%', marginBottom: '5px', borderRadius: '10px', backgroundSize:'cover', objectFit:'contain', alignSelf:'center' }} />
              <div style={{ marginLeft:'2px', marginBottom:'5px', fontSize:"15px", fontWeight:'bolder' }}><strong>{country.country}</strong></div>
              <div>Cases: {numeral(country.cases).format('0,0')}</div>
              <div>Recovered: {numeral(country.recovered).format('0,0')}</div>
              <div>Deaths: {numeral(country.deaths).format('0,0')}</div>
            </div>
          </Popup>
        </Circle>
      ))}

    </MapContainer>

  )
}

export default Map