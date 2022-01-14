import { Snackbar, SnackbarContent, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessageContent, selectMessageState } from '../../../store/message/messageSelectors';
import { useCallback } from 'react';
import { hideMessage } from '../../../store/message/messageSlice';

function Message() {
  const dispatch = useDispatch();
  const state = useSelector(selectMessageState);
  const message = useSelector(selectMessageContent);
  const messageEl = (
      <Typography>{message}</Typography>
  );
  const onClose = useCallback(() => {
    dispatch(hideMessage());
  }, [dispatch]);
  return (
      <Snackbar
          open={state}
          onClose={onClose}
          autoHideDuration={3000}
      >
        <SnackbarContent
            message={messageEl}
        />
      </Snackbar>
  );
}

export default Message;
