// ApexChart.js
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const DynamicApexChart = dynamic(() => import('./DynamicApexChart'), {
    ssr: false,
});

const ApexChart = () => {
    const [chartData, setChartData] = useState({
        series: [{
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 800]
        }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        options: {
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'Traffic Sources'
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{
            title: {
            text: 'Website Blog',
            },
        }, {
            opposite: true,
            title: {
            text: 'Social Media'
            }
        }]
        },
    });


    useEffect(() => {
        // 여기에 필요한 부수 효과 로직을 추가할 수 있습니다.
    }, []);

    return (
        <div>
        <DynamicApexChart />
        <div id="chart">
            <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
