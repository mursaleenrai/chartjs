import React from 'react'
import { Box } from '@mui/material'
import Appbar from '../../navbar/Appbar'
import Sidebar from '../../sidebar/Sidebar'


const PieCharts = () => {
    return (

        <div>
            <Appbar />
            <Box height={35} />
            <Box sx={{ minHeight: '100vh', marginLeft: '10rem', }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '8rem' }}>


                </Box>
            </Box>
        </div >

    )
}

export default PieCharts
