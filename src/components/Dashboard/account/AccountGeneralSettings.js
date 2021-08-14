import { Link as RouterLink } from 'react-router-dom';
import React,{useEffect,useState} from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik } from 'formik';
import myApi from '../../../axios'

import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  Link,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';
import wait from '../../../utils/wait';
import countries from './countries';



const AccountGeneralSettings = (props) => {
  // const { user } = useAuth();
  const [businessName,setBusinessName] = useState("")
  const [businessPan,setBusinessPan] = useState("")
  const [gstIn,setGstIn] = useState("")
  const [businessType,setBusinessType] = useState("")
  const [gstState,setGstState] = useState("")
  const [userDetails,setUserDetails] = useState({business_name:"",business_pan:"",gst_in:"",id_proof:"",add_proof:"",business_type:"",gst_state:""})
  async function updateSettingData(){
  try{
    let formFieldData = new FormData()
    formFieldData.append('business_name',businessName)
    formFieldData.append('business_pan',businessPan)
    formFieldData.append('gst_in',gstIn)
    formFieldData.append('business_type',businessType)
    formFieldData.append('gst_state',gstState)
    // formFieldData.append('user_details',userDetails)
    // const data = {prName,description,unit,price,sale_price,discountInPercentage,category,stoke,image}
    const pr = await myApi.post('/api/store_detail/store_setting/',formFieldData)
    console.log(pr)
    // navigate("/dashboard/products/")
    // setCategoryList(pt.data)
  }catch(err){
    alert(err)
  }
}
  const handleSubmitForm = (e) =>{
    e.preventDefault();
    updateSettingData()
  }
  async function usrDetails(){
    try{
          var dataObj = await myApi.get('api/store_detail/store_setting/')
          setBusinessName(dataObj.data.business_name)
          setBusinessPan(dataObj.data.business_pan)
          setGstIn(dataObj.data.gst_in)
          setBusinessType(dataObj.data.business_type)
          setGstState(dataObj.data.gst_state)
          // setUserDetails({business_name:dataObj.data.business_name,business_pan:dataObj.data.business_pan,gst_in:dataObj.data.gst_in,id_proof:dataObj.data.id_proof,add_proof:dataObj.data.add_proof,business_type:dataObj.data.business_type,gst_state:dataObj.data.gst_state})
    }catch(error){
          console.log(error)
          alert("something")
    }
  }
  // useEffect( async()=>{
  //   try{
  //     var dataObj = await myApi.get('api/store_detail/store_setting/')
  //     setUserDetails({business_name:dataObj.data.business_name,business_pan:dataObj.data.business_pan,gst_in:dataObj.data.gst_in,id_proof:dataObj.data.id_proof,add_proof:dataObj.data.add_proof,business_type:dataObj.data.business_type,gst_state:dataObj.data.gst_state})
      
  //   }catch(error){
  //     console.log(error)
  //   }
  // },[])
  useEffect(()=>{
    // setTimeout(() => {
    //   usrDetails()
    // }, 1000);
    usrDetails()
  },[])
  
  return (
    
    <Grid
      container
      spacing={3}
      {...props}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Card>
          <CardContent>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
              <Box
                sx={{
                  p: 1,
                  border: (theme) => `1px dashed ${theme.palette.divider}`,
                  borderRadius: '50%'
                }}
              >
                <Avatar
                  // src={user.avatar}
                  sx={{
                    height: 100,
                    width: 100
                  }}
                />
              </Box>
              <Typography
                color="textPrimary"
                sx={{ mt: 1 }}
                variant="subtitle2"
              >
                {/* {user.name} */}
                shakti
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Your plan:
                {' '}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/dashboard/account"
                >
                  {/* {user.plan} */}
                </Link>
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              fullWidth
              variant="text"
            >
              Remove Picture
              {console.log(userDetails)}
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        xl={9}
        xs={12}
      >
        <Formik
          enableReinitialize
          // initialValues={{
          //   canHire: user.canHire || false,
          //   city: user.city || '',
          //   country: user.country || '',
          //   email: user.email || '',
          //   isPublic: user.isPublic || false,
          //   name: user.name || '',
          //   phone: user.phone || '',
          //   state: user.state || '',
          //   submit: null
          // }}
          validationSchema={Yup
            .object()
            .shape({
              canHire: Yup.bool(),
              city: Yup.string().max(255),
              country: Yup.string().max(255),
              email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              isPublic: Yup.bool(),
              name: Yup
                .string()
                .max(255)
                .required('Name is required'),
              phone: Yup.string(),
              state: Yup.string()
            })}
          onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting }) => {
            try {
              // NOTE: Make API request
              await wait(200);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              toast.success('Profile updated!');
            } catch (err) {
              console.error(err);
              toast.error('Something went wrong!');
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form onSubmit={handleSubmitForm}>
              <Card>
                <CardHeader title="Store Setting" />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    spacing={4}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        error={Boolean(touched.name && errors.name)}
                        fullWidth
                        helperText={touched.name && errors.name}
                        label="Business Name"
                        name="business_name"
                        onBlur={handleBlur}
                        onChange={(e)=>{setBusinessName(e.target.value)}}
                        value={businessName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="business_pan"
                        name="Business Pan"
                        onBlur={handleBlur}
                        onChange={(e)=>{setBusinessPan(e.target.value)}}
                        required
                        type="number"
                        value={businessPan}
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
                        // helperText={touched.number && errors.phone}
                        label="GstIn" 
                        name="gst_in"
                        onBlur={handleBlur}
                        onChange={(e)=>{setGstIn(e.target.value)}}
                        value={gstIn}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      {/* <Autocomplete
                        // getOptionLabel={(option) => option.text}
                        // options={countries}
                        renderInput={(params) => (
                          )}
                      /> */}
                        <TextField
                          fullWidth
                          label="business_type"
                          name="BusinessType"
                          onChange={(e)=>{setBusinessType(e.target.value)}}
                          variant="outlined"
                          value={businessType}
                        />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        error={Boolean(touched.state && errors.state)}
                        fullWidth
                        helperText={touched.state && errors.state}
                        label="gst_state"
                        name="Gst-State"
                        onBlur={handleBlur}
                        onChange={(e)=>{setGstState(e.target.value)}}
                        value={gstState}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        error={Boolean(touched.city && errors.city)}
                        fullWidth
                        helperText={touched.city && errors.city}
                        label="City"
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // value={values.city}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="subtitle2"
                      >
                        Public Profile
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        Means that anyone viewing your profile will
                        be able to see your contacts details
                      </Typography>
                      <Switch
                        // checked={values.isPublic}
                        color="primary"
                        edge="start"
                        name="isPublic"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="subtitle2"
                      >
                        Available to hire
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        Toggling this will let your teammates know
                        that you are available for acquiring new
                        projects
                      </Typography>
                      <Switch
                        // checked={values.canHire}
                        color="primary"
                        edge="start"
                        name="canHire"
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  {errors.submit && (
                    <Box sx={{ mt: 3 }}>
                      <FormHelperText error>
                        {errors.submit}
                      </FormHelperText>
                    </Box>
                  )}
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                  }}
                >
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                  >
                    Save Changes
                  </Button>
                </Box>
              </Card>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default AccountGeneralSettings;
