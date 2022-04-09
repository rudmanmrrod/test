import { useState } from 'react';
import Head from 'next/head'

// Mui
import { Grid } from "@mui/material";

// Components
import Search from '../components/Search';
import RepositoriesTable from '../components/Tables/RepositoriesTable';

// Services
import { getRepositories } from '../services/repositories'

const Repositories = () => {
  // const
  const rowsPerPage = 10;
  // States
  const [searchItem, setSearchItem] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const onSearch = (value) => {
    try {
      if (value) {
        setSearchItem(value);
        getRepositories({q: value, page: 1, per_page: rowsPerPage}).then((response) => {
          setTotal(response.data.total_count);
          setRepositories(response.data.items);
        });
      } else {
        setTotal(0);
        setRepositories([]);
      }
    } catch (error) {
      setTotal(0);
      setRepositories([]);
    }
    
  };

  const onPageChange = (event, page) => {
    setPage(page);
    getRepositories({q: searchItem, page: page + 1, per_page: rowsPerPage}).then((response) => {
      setTotal(response.data.total_count);
      setRepositories(response.data.items);
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
          loading={true}
        />
      </Grid>
    </Grid>
    </>
  );
};

export default Repositories;