import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {useBookSelector} from "../../../store";
const LoadButton = () => {
    const loading = useBookSelector(state => state.books.state.isLoading)
    return (
        <div>
            <LoadingButton loading={!loading} loadingIndicator="Loading…" variant="contained">
                Load more
            </LoadingButton>
        </div>

    );
};

export default LoadButton;