// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function ProductListTable(props) {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Image</TableCell>
//             <TableCell align="right">Price</TableCell>
//             <TableCell align="right">Sale Price</TableCell>
//             <TableCell align="right">Stoke</TableCell>
//             <TableCell align="right">Product Type</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {console.log(props)}
//           {props.products.data.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right"><img src={row.image} /></TableCell>
//               <TableCell align="right">{row.price}</TableCell>
//               <TableCell align="right">{row.sale_price}</TableCell>
//               <TableCell align="right">{row.stoke == null?"null":row.stoke}</TableCell>
//               <TableCell align="right">{row.product_type == null?"null":row.product_type}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TablePagination} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const dt = [
  {name:"nike",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
  {name:"nike2",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
  {name:"nike3",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
  {name:"nike4",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
  {name:"nike5",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
  {name:"nike6",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
  {name:"nike7",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
  {name:"nike8",image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
]
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductListTable(props) {
  const classes = useStyles();
  const [page,setPage] = useState(0);
  const [rowsPerPage,setRowsPerPage] = useState(5)

  const onChangePage = (event,nextPage) => {
    console.log(nextPage)
    setPage(nextPage)
  }

  const onChangeRowsPerPage = (event) => {
      setRowsPerPage(event.target.value);
  }



  const deleteProduct = (id) =>{
    // call api to delete item
    console.log(id)
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sale Price</TableCell>
            <TableCell align="right">Stoke</TableCell>
            <TableCell align="right">Product Type</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(props)}
          {dt
          .slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {console.log(row.image),"image_url"}
              <TableCell align="right"><img src={row.image} /></TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.sale_price}</TableCell>
              <TableCell align="right">{row.stoke == null?"null":row.stoke}</TableCell>
              <TableCell align="right">{row.product_type == null?"null":row.product_type}</TableCell>
              <TableCell align="right"><IconButton onClick={()=>{ deleteProduct(row.name) }} aria-label="delete">
        <DeleteIcon />
      </IconButton><IconButton aria-label="delete">
        <EditIcon />
      </IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination 
        rowsPerPageOptions={[5,10,15,25,50]}
        count = {dt.length}
        rowsPerPage= {rowsPerPage}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </TableContainer>
  );
}