import { forwardRef } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Notification = ({ text = 'test', severity = 'success', open, close }) => {
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={close}>
                <Alert onClose={close} severity={severity} sx={{ width: '100%' }}>
                    {text}
                </Alert>
            </Snackbar>
        </>
    );
}