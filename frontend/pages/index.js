import { useState } from 'react';
import Head from 'next/head';

// Mui
import { Grid } from "@mui/material";

// Components
import Search from '../components/Search';
import UserTable from '../components/Tables/UserTable';

// Services
import { getUser } from '../services/users'

const Home = () => {
  // const
  const rowsPerPage = 10;
  // States
  const [searchItem, setSearchItem] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const onSearch = (value) => {
    try {
      if (value) {
        setSearchItem(value);
        getUser({q: value, page: 1, per_page: rowsPerPage}).then((response) => {
          setTotal(response.data.total_count);
          setUsers(response.data.items);
        });
      } else {
        setTotal(0);
        setUsers([]);
      }
    } catch (error) {
      setTotal(0);
      setUsers([]);
    }
    
  };

  const onPageChange = (event, page) => {
    setPage(page);
    getUser({q: searchItem, page: page + 1, per_page: rowsPerPage}).then((response) => {
      setTotal(response.data.total_count);
      setUsers(response.data.items);
    });
  };

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Grid container sx={{paddingTop: '20px'}}>
        <Grid item sm={12} sx={{display: 'flex', justifyContent: 'center'}}>
          <Search title={"User"} onSearch={onSearch}  />
        </Grid>
        <Grid item sm={12}>
          <UserTable 
            data={users}
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

export default Home;