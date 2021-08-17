import { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Breadcrumbs, Button, Container, Grid, Link, Typography } from '@material-ui/core';
// import { productApi } from '../../__fakeApi__/productApi';
// import { ProductListTable } from '.';
// import useMounted from '../../hooks/useMounted';
// import useSettings from '../../hooks/useSettings';
import ChevronRightIcon from '../../../icons/ChevronRight';
import DownloadIcon from '../../../icons/Download';
import UploadIcon from '../../../icons/Upload';
import PlusIcon from '../../../icons/Plus';
import gtm from '../../../lib/gtm';
import myApi from '../../../axios'
import EnhancedTable from './CustomerTable';
// import FlexLayoutGrid from './table2';

const CustomerList = () => {
  // const mounted = useMounted();
  // const { settings } = useSettings();
  // const [products, setProducts] = useState([]);
  
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  // const getProducts = useCallback(async () => {
  //   try {
  //     const product = await myApi.get('/api/store_detail/store_product/')
  //     setProducts(product)
  //     console.log(product,"product")
  //     // console.log(product)
  //     // console.log(products,"products")
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
      
  //     getProducts();
  //   }, );
  // }, []);

  return (
    <>
      {/* <Helmet>
        <title>Dashboard: Product List | Material Kit Pro</title>
      </Helmet> */}
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        {/* <Container maxWidth={settings.compact ? 'xl' : false}> */}
        <Container >
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Customer List
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Management
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Customers
                </Typography>
              </Breadcrumbs>
              <Box
                sx={{
                  mb: -1,
                  mx: -1,
                  mt: 1
                }}
              >
                <Button
                  color="primary"
                  startIcon={<UploadIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="text"
                >
                  Import
                </Button>
                <Button
                  color="primary"
                  startIcon={<DownloadIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="text"
                >
                  Export
                </Button>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  component={RouterLink}
                  startIcon={<PlusIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  to="/dashboard/products/new"
                  variant="contained"
                >
                  New Product
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            {console.log()}
            {/* <ProductListTable products={products} /> */}
            <EnhancedTable />
            {/* <FlexLayoutGrid/> */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
