import './App.css';
import React, { useReducer, useState } from 'react'
import SelectCountry from './Components/SelectCountry';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoBox from './Components/InfoBox';
import Map from './Components/Map';
import Table from './Components/Table';
import LineGraph from './Components/LineGraph';



function App() {

  const [countries, setcountries] = useState([]);
  const [country, setcountry] = useState("Worldwide")
  const [countryinfo, setcountryinfo] = useState({})
  const [Tabledata, setTabledata] = useState([])
  const [caseType, setCasesType] = useState("cases");
  const [mapcenter, setmapcenter] = useState([51.505, -0.09]);
  const [zoom, setzoom] = useState(3);
  const [mapCountries, setmapCountries] = useState([])
  // console.log(mapcenter)
  console.log(zoom);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__left">
          <div className="app__header">
            <div className="title">
              <h1 style={{ color: 'red' }}>COVID-19 Tracker</h1>
            </div>
            <div className="app__dropdown">
              <SelectCountry setmapCountries={setmapCountries} setzoom={setzoom} setmapcenter={setmapcenter} Tabledata={Tabledata} setTabledata={setTabledata} countryinfo={countryinfo} setcountryinfo={setcountryinfo} countries={countries} setcountries={setcountries} country={country} setcountry={setcountry} />
            </div>
          </div>
          <div className="body">
            <div className="info__boxes">
              <div className="box-1">
                <InfoBox title="Covid Cases" cases={countryinfo.todayCases} total={countryinfo.cases} />
              </div>
              <div className="box-2">
                <InfoBox title="Recovered" cases={countryinfo.todayRecovered} total={countryinfo.recovered} />
              </div>
              <div className="box-3">
                <InfoBox title="Deaths" total={countryinfo.deaths} cases={countryinfo.todayDeaths} />
              </div>
            </div>
            <Card className="Map">
              <Map countries={mapCountries} center={mapcenter} zoom={zoom} />
            </Card>
          </div>
        </div>

        <Card className="app__right" >
          <div className="top">
            <h2 style={{ marginBottom: '10px' }}>Total Cases by Country</h2>
            <Table countries={Tabledata} />
          </div>
          <div className="bottom">
            <h2 style={{ marginBottom: '10px' }}>
              Worldwide new cases
            </h2>
            <LineGraph caseType={caseType} />
          </div>
        </Card>

      </div>
    </div>
  );
}

export default App;
