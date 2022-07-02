import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/Sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

export default function DonutChart(){
    const [chartData, setChartData] =  useState<ChartData>({ labels: [], series: [] });

    useEffect( () => {
        axios.get<SaleSum[]>(`${BASE_URL}/sales/amount`)
            .then(response => {
                const labels = response.data.map(data => data.sellerName);
                const series = response.data.map(data => data.sum);

                setChartData({
                    labels,
                    series
                });
            })
    },[])
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <>
            <Chart 
                options={{...options, labels: chartData.labels,}}  
                series={chartData.series}      
                type="donut"
                height="240"        
            />
        </>
    )
}