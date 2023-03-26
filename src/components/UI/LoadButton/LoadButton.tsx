import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {useBookSelector} from "../../../store";
interface Props{
    func: (event: React.MouseEvent) => void
}
const LoadButton = (props: Props) => {
    const loading = useBookSelector(state => state.books.state.buttonLoad)

    return (
        <div>
            <LoadingButton loading={loading} loadingIndicator="Loading…" variant="contained" onClick={props.func}>
                Load more
            </LoadingButton>
        </div>

    );
};

export default LoadButton;