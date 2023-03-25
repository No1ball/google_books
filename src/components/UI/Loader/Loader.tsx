import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    );
};

export default Loader;