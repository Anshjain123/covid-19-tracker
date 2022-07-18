import React, { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SortData from '../utils';


const SelectCountry = ({ setmapCountries, setzoom, setmapcenter, country, countries, setcountry, setcountries, countryinfo, setcountryinfo, Tabledata, setTabledata }) => {


    useEffect(() => {
        const getCountries = async () => {
            const res = await fetch("https://disease.sh/v3/covid-19/countries");
            const data = await res.json();
            const countries = [];
            data.map((cnt) => {
                countries.push({
                    name: cnt.country,
                    value: cnt.countryInfo.iso2,
                })
            })
            const SortedData = SortData(data);
            setmapCountries(data); 
            setTabledata(SortedData);
            setcountries(countries);
        }
        getCountries();
    }, [setcountries])

    useEffect(() => {
        const url = (country === "Worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${country}`)

        const getCountryInfo = async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data); 
            if (data.countryInfo) {
                const center = [data.countryInfo.lat, data.countryInfo.long];
                // setzoom(3);
                setmapcenter(center)
            }
            setcountryinfo(data);
        }
        getCountryInfo();

    }, [country])

    return (

        <FormControl variant="standard" sx={{ m: 1, minWidth: 150, width: 'auto' }}>
            <InputLabel id="demo-simple-select-standard-label">Select Country</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Select Country"
                value={country}
                onChange={(e) => setcountry(e.target.value)}
            >
                <MenuItem value="Worldwide">Worldwide</MenuItem>
                {
                    countries.map((country) => (
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>


    )
}


export default SelectCountry