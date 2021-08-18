import React,{useState,useEffect} from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import myApi from '../../../axios'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Card, Grid, Switch, TextField, Typography } from '@material-ui/core';
import wait from '../../../utils/wait';


import Notification from '../../../utils/Notification';
import ConfirmDialogBox from '../../../utils/ConfirmDialogBox';

const OrderViewForm = (props) => {
  const { customer, ...other } = props;
  const [address,setAddress] = useState({country:'',city:"",state:"",address:"",address2:"",mobile:"",name:"",pin_code:""})
  const [deliveryStatus,setDeliveryStatus] = useState("")
  const [orderDate,setOrderDate] = useState()
  const [paymentStatus,setPaymentStatus] = useState("")
  const [paymentType,setPaymentType] = useState("")
  const [totalAmount,setTotalAmount] = useState("")
  const [addressId,setAddressId] = useState()
  // const [user,setUser] = useState()
  const [confirmDialog, setConfirmDialog] = React.useState({ isOpen: false, title: '', subTitle: '' })
  const [notify,setNotify] = React.useState({isOpen:false,message:'',type:''})
  const navigate = useNavigate();

  const handleUpdateSubmit = (e) =>{
    e.preventDefault();
    updateOrderApi()
  }


  const prm = useParams()
  console.log(prm.id,"prm")
  async function get_current_data(){
    try{
      const data = await myApi.get('/api/store_detail/order/',{params:{id:prm.id}})
      console.log(data)
      setAddress(data.data.address)
      setDeliveryStatus(data.data.delivery_status)
      setOrderDate(data.data.order_date)
      setPaymentStatus(data.data.payment_status)
      setPaymentType(data.data.payment_type)
      setTotalAmount(data.data.total_amount)
      // setAddressId(data.data.address.id)
      // setOrderDate(data.data.order_date)
      // setDiscountInPercentage(data.data.discount_in_percentage)
      // setCategory(data.data.category)
      // setStock(data.data.stock)
      // console.log(data.data.image,"imagepath")
      // setImgUrl(data.data.image,"imgurl")
      // console.log(imgUrl)
      // setProductTypeId(Number(data.data.product_type))
    }catch(err){
      alert(err)
    }
  }
  async function updateOrderApi(){
    // try{
    //   let formFieldData = new FormData()
    //   // formFieldData.append('product_name',productName)
    //   const ad = JSON.stringify(address)
    //   formFieldData.append('address',ad)
    //   formFieldData.append('delivery_status',deliveryStatus)
    //   formFieldData.append('payment_status',paymentStatus)
    //   formFieldData.append('payment_type',paymentType)
    //   formFieldData.append('total_amount',totalAmount)
    //   formFieldData.append("address_id",addressId)
    //   // formFieldData.append('user',user)
    //   // formFieldData.append('id',prm.id)
    //   const order = await myApi.put(`/api/store_detail/order_update/${prm.id}/`,formFieldData)
    //   // console.log(pr)
    //   setNotify({
    //     isOpen:true,
    //     message:'Order Updated successfully Go back',
    //     type:'success'
    //   })
    //   // navigate("/dashboard/orders/")  
    //   // setCategoryList(pt.data)
    // }catch(err){
    //   alert(err)
    // }
  }
  useEffect(()=>{
    get_current_data()
  },[])
  return (
    <Formik
      // initialValues={{
      //   address1: customer.address1 || '',
      //   address2: customer.address2 || '',
      //   country: customer.country || '',
      //   email: customer.email || '',
      //   hasDiscountedPrices: customer.hasDiscountedPrices || false,
      //   isVerified: customer.isVerified || false,
      //   name: customer.name || '',
      //   phone: customer.phone || '',
      //   state: customer.state || '',
      //   submit: null
      // }}
      // validationSchema={Yup
      //   .object()
      //   .shape({
      //     address1: Yup.string().max(255),
      //     address2: Yup.string().max(255),
      //     country: Yup.string().max(255),
      //     email: Yup
      //       .string()
      //       .email('Must be a valid email')
      //       .max(255)
      //       .required('Email is required'),
      //     hasDiscountedPrices: Yup.bool(),
      //     isVerified: Yup.bool(),
      //     name: Yup
      //       .string()
      //       .max(255)
      //       .required('Name is required'),
      //     phone: Yup.string().max(15),
      //     state: Yup.string().max(255)
      //   })}
      
      // onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
      //   try {
      //     // NOTE: Make API request
      //     await wait(500);
      //     resetForm();
      //     setStatus({ success: true });
      //     setSubmitting(false);
      //     toast.success('Customer updated!');
      //   } catch (err) {
      //     console.error(err);
      //     toast.error('Something went wrong!');
      //     setStatus({ success: false });
      //     setErrors({ submit: err.message });
      //     setSubmitting(false);
      //   }
      // }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form
          onSubmit={handleUpdateSubmit}
          // {...other}
        >
          <Card>
            

            <Box sx={{ p: 3 }}>
            <Grid
                    item
                    md={12}
                    xs={12}
                    
                    >
                    
            <Typography
                color="textPrimary"
                
                // style={{borderBottom:"2px solid #9fa0a1",display:"inline"}}
                variant="h5"
                >
                Order View :
              </Typography>
            </Grid>

              <Grid
                container
                spacing={3}
              >
                  
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.name && errors.name)}
                    fullWidth
                    // helperText={touched.name && errors.name}
                    label="Total Amount"
                    name="total_amount"
                    // onBlur={handleBlur}
                    type="number"
                    readOnly
                    // onChange={(e)=>{setTotalAmount(e.target.value)}}
                    required
                    value={totalAmount}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="Payment Type"
                    name="payment_type"
                    onBlur={handleBlur}
                    readOnly
                    // onChange={(e)=>{setPaymentType(e.target.value)}}
                    // required
                    value={paymentType}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.country && errors.country)}
                    fullWidth
                    // helperText={touched.country && errors.country}
                    label="Payment Status"
                    name="payment_status"
                    select
                    SelectProps={{ native: true }}
                    // onBlur={handleBlur}
                    // required
                    readOnly
                    // onChange={(e)=>{setPaymentStatus(e.target.value)}}
                    
                    value={paymentStatus}
                    variant="outlined"
                    
                  >
                    <option  value="P" >PAID </option>
                    <option  value="N" >UNPAID </option>
                  </TextField>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  {/* <TextField
                    // error={Boolean(touched.state && errors.state)}
                    fullWidth
                    // helperText={touched.state && errors.state}
                    label="Status"
                    name="status  "
                    required
                    // onBlur={handleBlur}
                    onChange={(e)=>{setStatus(e.target.value)}}
                    value={status}
                    variant="outlined"
                  /> */}
                  <TextField
                      fullWidth
                      label="Delivery Status"
                      name="delivery_status"
                      select
                      SelectProps={{ native: true }}
                      value={deliveryStatus}
                      variant="outlined"
                      readOnly
                    //   onChange={(e)=>{
                    //     setDeliveryStatus(e.target.value)
                    //     console.log(e.target.value,"target")}}
                        
                        >      
                        <option  value="P" >PENDING </option>
                        <option  value="D" >DELIVERED </option>
                    </TextField>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.address1 && errors.address1)}
                    fullWidth
                    // helperText={touched.address1 && errors.address1}
                    label="Order Date"
                    name="order_date"
                    required
                    // onBlur={handleBlur}
                    value={orderDate}
                    variant="outlined"
                    readOnly
                  />
                </Grid>
                {/* <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.address2 && errors.address2)}
                    fullWidth
                    // helperText={touched.address2 && errors.address2}
                    label="User Name"
                    name="user"
                    required
                    // onBlur={handleBlur}
                    onChange={(e)=>{setUser(e.target.value)}}
                    value={user}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.phone && errors.phone)}
                    fullWidth
                    // helperText={touched.phone && errors.phone}
                    label="Order Date"
                    name="order_date"
                    // onBlur={handleBlur}
                    // onChange={setOrderDate}
                    value={orderDate}
                    variant="outlined"
                    readOnly
                  />
                </Grid> */}
                <Grid item />

                
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  {/* <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Email Verified
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Disabling this will automatically send the user
                    a verification email
                  </Typography> */}
                  {/* <Switch
                    // checked={values.isVerified}
                    color="primary"
                    edge="start"
                    name="isVerified"
                    onChange={handleChange}
                    // value={values.isVerified}
                  /> */}
                </Grid>
                {/* <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="subtitle2"
                  >
                    Discounted Prices
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    This will give the user discounted prices for
                    all products
                  </Typography>
                  <Switch
                    // checked={values.hasDiscountedPrices}
                    color="primary"
                    edge="start"
                    name="hasDiscountedPrices"
                    onChange={handleChange}
                    // value={values.hasDiscountedPrices}
                  />
                </Grid> */}

                
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  
              <Typography
                color="textPrimary"
                
                // style={{borderBottom:"2px solid #9fa0a1",display:"inline"}}
                variant="h5"
                >
                Address Details :
              </Typography>
                </Grid>
              

                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="Country"
                    name="country"
                    onBlur={handleBlur}
                    // onChange={(e)=>{setAddress({...address,country:e.target.value})}}
                    // required
                    readOnly
                    value={address.country}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="State"
                    name="state"
                    onBlur={handleBlur}
                    // onChange={(e)=>{setAddress({...address,state:e.target.value})}}
                    // required
                    readOnly
                    value={address.state}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="City"
                    name="city"
                    readOnly
                    onBlur={handleBlur}
                    // onChange={(e)=>{setAddress({...address,city:e.target.value})}}
                    // required
                    value={address.city}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="Address"
                    name="address"
                    onBlur={handleBlur}
                    readOnly
                    
                    // onChange={(e)=>{setAddress({...address,address:e.target.value})}}
                    // required
                    value={address.address}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="Address2"
                    name="address2"
                    onBlur={handleBlur}
                    readOnly
                    // onChange={(e)=>{setAddress({...address,address2:e.target.value})}}
                    // required
                    value={address.address2}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="Mobile"
                    name="mobile"
                    onBlur={handleBlur}
                    readOnly
                    // onChange={(e)=>{setAddress({...address,mobile:e.target.value})}}
                    // required
                    value={address.mobile}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="Name"
                    name="name"
                    onBlur={handleBlur}
                    // onChange={(e)=>{setAddress({...address,name:e.target.value})}}
                    // required
                    value={address.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    // error={Boolean(touched.email && errors.email)}
                    fullWidth
                    // helperText={touched.email && errors.email}
                    label="Pin Code"
                    name="pincode"
                    onBlur={handleBlur}
                    // onChange={(e)=>{setAddress({...address,pin_code:e.target.value})}}
                    

                    // required
                    value={address.pin_code}
                    variant="outlined"
                  />
                </Grid>

              </Grid>



              <Box sx={{ mt: 2 }}>
              <Button
                color="warning"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                onClick={()=>{navigate("/dashboard/orders/")}}
              >
                Go back
              </Button> 
{/* 
                <Button
                  style={{marginLeft:"5px"}}
                  color="success"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Update Order
                </Button> */}
              </Box>
            </Box>
          </Card>
          <ConfirmDialogBox
                      confirmDialog={confirmDialog}
                      setConfirmDialog={setConfirmDialog}
      />
      <Notification 
        notify={notify}
        setNotify={setNotify}
      />
        </form>
      )}
    </Formik> 
  );
};

// CustomerEditForm.propTypes = {
//   customer: PropTypes.object.isRequired
// };

export default OrderViewForm;