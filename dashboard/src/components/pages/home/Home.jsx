import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Appbar from '../../navbar/Appbar'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Home = () => {
    return (
        <>
            <div className='bgbd'>
                <Appbar />
                <Box height={70} />
                <Box sx={{
                    display: 'flex'
                }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack direction={'row'} spacing={2}>
                                    <Card sx={{ minWidth: 49 + '%', height: 150, background: '#374151', color: '#fff' }}>
                                        <CardContent>
                                            <div>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div">
                                                $667.98
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{
                                                color: '#ccd1d1'
                                            }}>
                                                Total Earnings
                                            </Typography>

                                        </CardContent>

                                    </Card>
                                    <Card sx={{ minWidth: 49 + '%', height: 150, background: '#23272F', color: '#fff' }}>
                                        <CardContent>
                                            <div>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div">
                                                $955.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{
                                                color: '#ccd1d1'
                                            }}>
                                                Total Orders
                                            </Typography>

                                        </CardContent>

                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ maxWidth: 452, background: '#23272F', color: '#fff' }} >
                                        <Stack spacing={2} direction={'row'}>
                                            <div className='iconss'>
                                                <StoreIcon />
                                            </div>
                                            <div className='spans' >
                                                <span className='price'>$450K</span>
                                                <br />
                                                <span className='income'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ maxWidth: 452, background: '#374151', color: '#fff' }}>
                                        <Stack spacing={2} direction={'row'}>
                                            <div className='iconss'>
                                                <StoreIcon />
                                            </div>
                                            <div className='spans'>
                                                <span className='price'>$450K</span>
                                                <br />
                                                <span className='income'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + 'vh' }}>
                                    <CardContent>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + 'vh' }}>
                                    <CardContent>

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
            </div>
        </>
    )
}

export default Home