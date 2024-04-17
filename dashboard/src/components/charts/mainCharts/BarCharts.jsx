import React from 'react'
import { Box } from '@mui/material'
import Appbar from '../../navbar/Appbar'
import Sidebar from '../../sidebar/Sidebar'

import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const BarCharts = () => {
    return (
        <div>
            <Appbar />
            <Box height={35} />
            <Box sx={{ minHeight: '100vh', marginLeft: '10rem', }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '5rem', marginLeft: '5rem' }}>
                    <BarChart


                        width={1200}
                        height={500}
                        series={[
                            { data: pData, label: 'pv', stack: 'stack1', color: '#23272f' },
                            { data: amtData, label: 'amt', color: '#485364' },
                            { data: uData, label: 'uv', stack: 'stack1', color: '#23272f' },
                        ]}
                        xAxis={[{ data: xLabels, scaleType: 'band' }]}
                    />

                </Box>
            </Box>
        </div >
    )
}

export default BarCharts;
