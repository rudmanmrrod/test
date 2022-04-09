import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';

// Mui
import { Grid } from "@mui/material";

// Components
import Search from '../components/Search';
import RepositoriesTable from '../components/Tables/RepositoriesTable';

// Services
import { getRepositories } from '../services/repositories';

// Redux
import { addRepositories, clearRepositories } from '../store/repositories';

const Repositories = () => {
  // const
  const rowsPerPage = 10;
  // States
  const [searchItem, setSearchItem] = useState('');
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  // Redux
  const dispatch = useDispatch()
  const repositories = useSelector((state) => state.repositories.repositories)

  const onSearch = (value) => {
    try {
      if (value) {
        setLoading(true);
        setSearchItem(value);
        getRepositories({q: value, page: 1, per_page: rowsPerPage}).then((response) => {
          setTotal(response.data.total_count);
          dispatch(addRepositories(response.data.items));
          setLoading(false);
        });
      } else {
        setTotal(0);
        dispatch(clearRepositories());
      }
    } catch (error) {
      setTotal(0);
      dispatch(clearRepositories());
      setLoading(false);
    }
    
  };

  const onPageChange = (event, page) => {
    setPage(page);
    getRepositories({q: searchItem, page: page + 1, per_page: rowsPerPage}).then((response) => {
      setTotal(response.data.total_count);
      dispatch(addRepositories(response.data.items));
    });
  };

  return (
    <>
    <Head>
      <title>Repositories</title>
    </Head>
    <Grid container sx={{paddingTop: '20px'}}>
      <Grid item sm={12} sx={{display: 'flex', justifyContent: 'center'}}>
        <Search title={"Repositories"} onSearch={onSearch}  />
      </Grid>
      <Grid item sm={12}>
        <RepositoriesTable
          data={repositories}
          page={page}
          total={total}
          rowsPerPage={rowsPerPage}
          onPageChange={onPageChange}
          loading={loading}
        />
      </Grid>
    </Grid>
    </>
  );
};

export default Repositories;