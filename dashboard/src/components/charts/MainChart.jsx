import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2'

const MainChart = ({ chartData }) => {
    return (
        <div>
            <Line data={chartData} />

        </div>
    )
}

export default MainChart;
