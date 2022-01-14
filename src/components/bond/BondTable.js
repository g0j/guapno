import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBonds,
  selectBondsLoadingResponseMessage,
  selectBondsLoadingStatus,
} from '../../store/bond/bondSelectors';
import classes from './BondTable.module.css';
import { Backdrop } from '@mui/material';
import { LOADING_STATUSES } from '../../store/bond/constants';
import BondActions from './BondActions';
import { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { setMessage } from '../../store/message/messageSlice';
import isEqual from 'lodash/isEqual';

const columns = [
  { field: 'figi', headerName: 'figi', minWidth: 90 },
  { field: 'ticker', headerName: 'ticker', minWidth: 90 },
  { field: 'isin', headerName: 'isin', minWidth: 90 },
  {
    field: 'minPriceIncrement',
    headerName: 'minPriceIncrement',
    type: 'number',
    minWidth: 70,
  },
  {
    field: 'faceValue',
    headerName: 'faceValue',
    type: 'number',
    minWidth: 70,
  },
  {
    field: 'lot',
    headerName: 'lot',
    type: 'number',
    minWidth: 70,
  },
  {
    field: 'currency',
    headerName: 'currency',
    minWidth: 70,
  },
  {
    field: 'name',
    headerName: 'name',
    minWidth: 350,
  },
];

const rowsPerPageOptions = [5]

function BondTable() {
  const dispatch = useDispatch();
  const bonds = useSelector(selectBonds, isEqual);
  const loadingStatus = useSelector(selectBondsLoadingStatus);
  const loadingResponseMessage = useSelector(selectBondsLoadingResponseMessage);

  useEffect(() => {
    if (!isEmpty(loadingResponseMessage)) {
      dispatch(setMessage(`Произошла ошибка: ${loadingResponseMessage}`));
    }
  }, [loadingResponseMessage]);

  return (
      <div className={classes.container}>
        <Backdrop open={loadingStatus === LOADING_STATUSES.loading} />
        <BondActions />
        <DataGrid
            rows={bonds}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={rowsPerPageOptions}
            checkboxSelection
        />
      </div>
  );
}

export default BondTable;
