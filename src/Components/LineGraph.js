import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import numeral from "numeral";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    scales,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    scales
);


const LineGraph = ({ caseType }) => {
    const options = {
        plugins: {
            legend: {
                display: false,
            }
        }
        ,
        elements: {
            point: {
                backgroundColor: 'red',
                radius: 2,
            },
        },
        maintainAspectRatio: false,


    };
    const [data, setdata] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120");
            const response = await res.json();
            const ChartData = [];
            // console.log(response);
            let lastpoint;
            for (var i in response[caseType]) {
                if (lastpoint) {
                    ChartData.push({
                        x: i,
                        y: response[caseType][i] - lastpoint
                    })
                }
                lastpoint = response[caseType][i]
            }
            setdata(ChartData);
        }
        getData();
    }, [caseType])
    const Data = {

        datasets: [{
            data: data,
            backgroundColor: "rgba(204, 16, 52, 0.5)",
            borderColor: "#CC1034",
            fill: true
        }]
    }
    return (
        <div className="linegraph">

            {data?.length > 0 && <Line data={Data}
                options={options}

            />}
        </div>
    )
}

export default LineGraph