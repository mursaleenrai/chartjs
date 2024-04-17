import React from 'react'
import { Box } from '@mui/material'
import Appbar from '../../navbar/Appbar'
import Sidebar from '../../sidebar/Sidebar'
import { LineChart } from '@mui/x-charts/LineChart';
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const LineCharts = () => {
    return (
        <div>
            <Appbar />
            <Box height={35} />
            <Box sx={{ minHeight: '100vh', marginLeft: '10rem', }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '4rem', marginLeft: '7rem' }}>

                    <LineChart
                        width={1200}
                        height={500}
                        series={[
                            { data: pData, label: 'pv', color: '#23272f' },
                            { data: uData, label: 'uv', color: '#485364' },
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </Box>
            </Box>
        </div >
    )
}

export default LineCharts
