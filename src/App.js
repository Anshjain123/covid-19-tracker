import './App.css';
import React, { useState } from 'react'
import SelectCountry from './Components/SelectCountry';
import Card from '@mui/material/Card';
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
                <InfoBox active = {caseType === "cases"} onClick={(e)=>setCasesType('cases')} title="Covid Cases" cases={countryinfo.todayCases} total={countryinfo.cases} />
              </div>
              <div className="box-2">
                <InfoBox active = {caseType === "recovered"} onClick={(e)=>setCasesType('recovered')} title="Recovered" cases={countryinfo.todayRecovered} total={countryinfo.recovered} />
              </div>
              <div className="box-3">
                <InfoBox active = {caseType === "deaths"} onClick={(e)=>setCasesType('deaths')} title="Deaths" total={countryinfo.deaths} cases={countryinfo.todayDeaths} />
              </div>
            </div>
            <Card className="Map">
              <Map countries={mapCountries} center={mapcenter} zoom={zoom} caseType={caseType} />
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
              Worldwide new {caseType}
            </h2>
            <LineGraph caseType={caseType} />
          </div>
        </Card>

      </div>
    </div>
  );
}

export default App;
