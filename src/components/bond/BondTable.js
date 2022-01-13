import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { selectBondsLoadingStatus } from '../../store/bond/bondSelectors';
import classes from './BondTable.module.css';
import { useEffect } from 'react';
import { getBonds } from '../../store/bond/bondSlice';
import { Backdrop } from '@mui/material';
import { LOADING_STATUSES } from '../../store/bond/constants';
import { selectToken } from '../../store/auth/authSelectors';

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 70 },
  { field: 'firstName', headerName: 'First name', minWidth: 330 },
  { field: 'lastName', headerName: 'Last name', minWidth: 330 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    minWidth: 120,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 260,
    valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
            params.getValue(params.id, 'lastName') || ''
        }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function BondTable() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loadingStatus = useSelector(selectBondsLoadingStatus);

  useEffect(() => {
    if (token) {
      dispatch(getBonds(token));
    }
  }, [token]);

  return (
      <div className={classes.container}>
        <Backdrop open={loadingStatus === LOADING_STATUSES.loading} />
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
      </div>
  );
}

export default BondTable;
