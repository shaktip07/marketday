
// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { Link as RouterLink } from 'react-router-dom';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Box from '@material-ui/core/Box'
// import { Button } from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import EditIcon from '@material-ui/icons/Edit';
// import Alert from '@material-ui/lab/Alert';
// import myApi from '../../../axios'
// import './table.css'


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// // const rows = [
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Donut', 452, 25.0, 51, 4.9),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// //   createData('Honeycomb', 408, 3.2, 87, 6.5),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
// //   createData('KitKat', 518, 26.0, 65, 7.0),
// //   createData('Lollipop', 392, 0.2, 98, 0.0),
// //   createData('Marshmallow', 318, 0, 81, 2.0),
// //   createData('Nougat', 360, 19.0, 9, 37.0),
// //   createData('Oreo', 437, 18.0, 63, 4.0),
// // ];
// // const rows = [
// //     {name:"nike",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
// //     {name:"nike2",image:"nike.png",price:21.00,sale_price:22.00,stoke:null,product_type:null},
// //     {name:"nike3",image:"nike.png",price:20.00,sale_price:22.00,stoke:null,product_type:null},
// //     {name:"nike4",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
// //     {name:"nike5",image:"nike.png",price:23.00,sale_price:22.00,stoke:null,product_type:null},
// //     {name:"nike6",image:"nike.png",price:24.00,sale_price:22.00,stoke:null,product_type:null},
// //     {name:"nike7",image:"nike.png",price:25.00,sale_price:22.00,stoke:null,product_type:null},
// //     {name:"nike8",image:"nike.png",price:26.00,sale_price:22.00,stoke:null,product_type:null},

// //   ]

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
//   { id: 'product_image', numeric: false, disablePadding: false, label: 'Image' },
//   { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
//   { id: 'sale_price', numeric: true, disablePadding: false, label: 'Sale Price' },
//   { id: 'stoke', numeric: true, disablePadding: false, label: 'Stoke' },
//   { id: 'product_type', numeric: false, disablePadding: false, label: 'ProductType' },
//   { id: 'action', numeric: false, disablePadding: false, label: 'Actions',Selection:false },
// ];

// function EnhancedTableHead(props) {
//   const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'select all desserts' }}
            
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// // EnhancedTableHead.propTypes = {
// //   classes: PropTypes.object.isRequired,
// //   numSelected: PropTypes.number.isRequired,
// //   onRequestSort: PropTypes.func.isRequired,
// //   onSelectAllClick: PropTypes.func.isRequired,
// //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// //   orderBy: PropTypes.string.isRequired,
// //   rowCount: PropTypes.number.isRequired,
// // };


// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: '1 1 100%',
//   },
// }));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//           MarketDay
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton aria-label="delete">
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton aria-label="filter list">
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: 'rect(0 0 0 0)',
//     height: 1,
//     margin: -1,
//     overflow: 'hidden',
//     padding: 0,
//     position: 'absolute',
//     top: 20,
//     width: 1,
//   },
// }));

// export default function EnhancedTable(props) {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [msgText,setMsgText] = React.useState("")
//   const [msg,setMsg] = React.useState(false)
//   const [msgType,setMsgType]= React.useState("")
//   const [rows, setProducts] = React.useState([])

//   // const { customers, ...other } = props;
//   // const [currentTab, setCurrentTab] = useState('all');
//   const [selectedCustomers, setSelectedCustomers] = React.useState([]);
//   // const [page, setPage] = useState(0);
//   // const [limit, setLimit] = useState(5);
//   // const [query, setQuery] = useState('');
//   // const [sort, setSort] = useState(sortOptions[0].value);
//   // const [filters, setFilters] = React.useState({
//   //   hasAcceptedMarketing: null,
//   //   isProspect: null,
//   //   isReturning: null
//   // });

//   // const handleTabsChange = (event, value) => {
//   //   const updatedFilters = {
//   //     ...filters,
//   //     hasAcceptedMarketing: null,
//   //     isProspect: null,
//   //     isReturning: null
//   //   };

//   //   if (value !== 'all') {
//   //     updatedFilters[value] = true;
//   //   }

//   //   setFilters(updatedFilters);
//   //   setSelectedCustomers([]);
//   //   setCurrentTab(value);
//   // };

//   // const handleQueryChange = (event) => {
//   //   setQuery(event.target.value);
//   // };

//   // const handleSortChange = (event) => {
//   //   setSort(event.target.value);
//   // };

//   const handleSelectAllCustomers = (event) => {
//     setSelectedCustomers(event.target.checked
//       ? rows.map((customer) => customer.id)
//       : []);
//   };

//   const handleSelectOneCustomer = (event, customerId) => {
//     if (!selectedCustomers.includes(customerId)) {
//       setSelectedCustomers((prevSelected) => [...prevSelected, customerId]);
//     } else {
//       setSelectedCustomers((prevSelected) => prevSelected.filter((id) => id !== customerId));
//     }
//   };

//   // const handlePageChange = (event, newPage) => {
//   //   setPage(newPage);
//   // };

//   // const handleLimitChange = (event) => {
//   //   setLimit(parseInt(event.target.value, 10));
//   // };

//   // const filteredCustomers = applyFilters(customers, query, filters);
//   // const sortedCustomers = applySort(filteredCustomers, sort);
//   // const paginatedCustomers = applyPagination(sortedCustomers, page, limit);
//   const enableBulkActions = selectedCustomers.length > 0;
//   const selectedSomeCustomers = selectedCustomers.length > 0
//     && selectedCustomers.length < rows.length;
//   const selectedAllCustomers = selectedCustomers.length === rows.length;














//   React.useEffect(() => {
//     async function products(){
//       try{
//         const prds = await myApi.get('/api/store_detail/store_product/')
//         setProducts(prds.data)
//         console.log(rows)
//       }catch(err){
//         alert(err)
//       }
//     }
//     products()
//   }, []);


//   const deleteProduct = (id) =>{
//     const data = myApi.delete("/api/store_detail/store_product/",{data:{product_id:id}})
//     setProducts((item)=>{
//       return item.filter((curItem)=>{
//         return curItem.id !== id
//       })
//     })
//     console.log(data,id)
//     setMsgText("Product Deleted Successfully")
//     setMsg(true)
//     setMsgType("success")
//     setTimeout(() => {
//       setMsg(false)
//       setMsgText("")
//       setMsgType("")
//     }, 2000);
//   }

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };
//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;
//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


  
//   return (
//     <>
//     {msg?<Alert severity={msgType}>{msgText}</Alert>:""}
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         {/* <EnhancedTableToolbar   numSelected={selected.length} /> */}
//         <TableContainer>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//             aria-label="enhanced table"
//           >
//             {/* <Tabs
//               indicatorColor="primary"
//               onChange={handleTabsChange}
//               scrollButtons="auto"
//               textColor="primary"
//               value={currentTab}
//               variant="scrollable"
//             ></Tabs> */}
//             <EnhancedTableHead style={{backgroundColor:'#3f51b5'}}
//               classes={classes}
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//              {enableBulkActions && (
//         <Box sx={{ position: 'relative' }}>
//           <Box
//             sx={{
//               backgroundColor: 'background.paper',
//               mt: '6px',
//               position: 'absolute',
//               px: '4px',
//               width: '100%',
//               zIndex: 2
//             }}
//           >
//             <Checkbox
//               checked={selectedAllCustomers}
//               color="primary"
//               indeterminate={selectedSomeCustomers}
//               onChange={handleSelectAllCustomers}
//             />
//             <Button
//               color="primary"
//               sx={{ ml: 2 }}
//               variant="outlined"
//             >
//               Delete
//             </Button>
//             <Button
//               color="primary"
//               sx={{ ml: 2 }}
//               variant="outlined"
//             >
//               Edit
//             </Button>
//           </Box>
//         </Box>
//       )}
//             <TableBody>
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.id);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClickx={(event) => handleClick(event, row.id)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.id}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isItemSelected}
//                           inputProps={{ 'aria-labelledby': labelId }}
//                         />
//                       </TableCell>
//                       <TableCell component="th" id={labelId} scope="row" padding="none">
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right"><img src={"http://127.0.0.1:4000"+row.image} width='100px' /></TableCell>
//                       <TableCell align="right">{row.price}</TableCell>
//                       <TableCell align="right">{row.sale_price}</TableCell>
//                       <TableCell align="right">{row.stock == null?'null':row.stock}</TableCell>
//                       <TableCell align="right">{row.product_type == null?"null":row.product_type}</TableCell>
//                       <TableCell align="right"><IconButton onClick={()=>{ deleteProduct(row.id) }} aria-label="delete">
//         <DeleteIcon />
        
//       </IconButton>
//       <RouterLink to={`/dashboard/products/update/${row.id}`}>

//       <IconButton aria-label="delete">
//         <EditIcon />
//       </IconButton>
//       </RouterLink>
//       </TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </div>
//     </>
//   );
// }
