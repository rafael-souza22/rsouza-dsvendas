import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/Sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string,
    data: number[]
}

type ChartData = {
    labels: {
        categories: string[]
    },
    series: SeriesData[]
}

export default function BarChart() {
    const [chartData, setChartData] =  useState<ChartData>({ labels: {categories: []}, series:  []});

    useEffect( () => {
        axios.get<SaleSuccess[]>(`${BASE_URL}/sales/success`)
            .then(response => {
                const categories = response.data.map(data => data.sellerName);
                const series = response.data.map(data => round( (100.0 * data.deals / data.visited), 1) );

                setChartData({
                    labels: {
                        categories: categories
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: series
                        }
                    ]
                });
            })
    },[])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <>
            <Chart 
                options={{...options, xaxis: chartData.labels,}}  
                series={chartData.series}      
                type="bar"
                height="240"        
            />
        </>
    )
}