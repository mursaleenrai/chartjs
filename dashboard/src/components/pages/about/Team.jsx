import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import { Box } from '@mui/material'
import Appbar from '../../navbar/Appbar'
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
        field: 'position',
        headerName: 'Position',
        width: 160,

    },
    {
        field: 'experience',
        headerName: 'Experience',
        width: 160,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, position: 'React Developer', experience: '3 Years' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, position: 'Node Developer', experience: '5 Years' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, position: 'React Developer', experience: '3 Years' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, position: 'JS Developer', experience: '1 Years' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, position: 'React Developer', experience: '3 Years' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, position: 'React Developer', experience: '3 Years' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, position: 'React Developer', experience: '3 Years' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, position: 'Python Developer', experience: '3 Years' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, position: 'Angular Developer', experience: '3 Years' },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65, position: 'Angular Developer', experience: '3 Years' },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65, position: 'Angular Developer', experience: '3 Years' },
];

const Team = () => {
    return (
        <>
            <Appbar />
            <Box height={35} />
            <Box sx={{
                display: 'flex',

            }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                    <div style={{ height: 600, width: '100%', marginTop: '1rem' }} >
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 9 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection


                        />
                    </div>
                </Box>
            </Box>
        </>

    )
}

export default Team;
