import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import './addProduct.css'
import myApi from '../../../axios'
import { Formik } from 'formik';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
  TextareaAutosize,
  Typography
} from '@material-ui/core';
import FileDropzone from '../FileDropzone';
import QuillEditor from '../QuillEditor';
import { Category, MergeTypeSharp } from '@material-ui/icons';

const categoryOptions = [
  {
    value: 'shirts',
    label: 'Shirts'
  },
  {
    label: 'Phones',
    value: 'phones'
  },
  {
    label: 'Cars',
    value: 'cars'
  }
];

const ProductUpdateForm = (props) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [categoryList,setCategoryList] = useState([])
  const [productTypeList,setProductTypeList] = useState([])
  
  const [prName,setPrName] = useState("")
  const [description,setDescription] = useState("")
  const [unit,setUnit] = useState("")
  const [image,setImage] = useState(null)
  const [price,setPrice] = useState(0)
  const [sale_price,setSale_price] = useState(0)
  const [discountInPercentage,setDiscountInPercentage] = useState(0)
  const [category,setCategory] = useState("")
  const [stock,setStock] = useState(0)
  const [imgUrl,setImgUrl] = useState(null)
  const [productTypeId,setProductTypeId] = useState(null)

  const prm = useParams()
  console.log(prm.id,"id")

  const setImageUrlFromInput = (e)=>{
    // var file = e.target.files[0]
    // var reader = new FileReader();
    // var url = reader.readAsDataURL(file);
    // setImgUrl(url)
  }

  async function get_current_data(){
    try{
      const data = await myApi.get(`/api/store_detail/get_edit_product/${prm.id}/`)
      console.log(data)
      setPrName(data.data.name)
      setDescription(data.data.description)
      setUnit(data.data.unit)
      setPrice(data.data.price)
      setSale_price(data.data.sale_price)
      setDiscountInPercentage(data.data.discount_in_percentage)
      setCategory(data.data.category)
      setStock(data.data.stock)
      console.log(data.data.image,"imagepath")
      setImgUrl(data.data.image,"imgurl")
      console.log(imgUrl)
      setProductTypeId(Number(data.data.product_type))
      
      
    }catch(err){
      alert(err)
    }
  }
  
  async function cate_list(){
    try{
      const cates = await myApi.get('/api/store_detail/categorys_list/')
      // setCategory(cates.data[0])
      setCategoryList(cates.data)
    }catch(err){
      alert(err)
    }
  }
  async function product_type_list(){
    try{
      const types = await myApi.get('/api/store_detail/product_type_list/')
      setProductTypeList(types.data)
    }catch(err){
      alert(err)
    }
  }
  async function updateProductApi(){
    try{
      let formFieldData = new FormData()
      formFieldData.append('name',prName)
      formFieldData.append('description',description)
      formFieldData.append('unit',unit)
      // if(image == null){
        // formFieldData.append("image",imgUrl)
      // }else{
      formFieldData.append('image',image)
      // }

      formFieldData.append('price',price)
      formFieldData.append('sale_price',sale_price)
      formFieldData.append('discountInPercentage',discountInPercentage)
      formFieldData.append('productTypeId',productTypeId)
      formFieldData.append('category',category)
      formFieldData.append('stock',stock)
      // const data = {prName,description,unit,price,sale_price,discountInPercentage,category,stoke,image}
      const pr = await myApi.put(`/api/store_detail/get_edit_product/${prm.id}/`,formFieldData)
      // console.log(pr)
      navigate("/dashboard/products/")  
      // setCategoryList(pt.data)
    }catch(err){
      alert(err)
    }
  }
  useEffect(()=>{
    product_type_list()
    get_current_data()
    cate_list()
  },[])
  
  const handleClick = (e)=>{
    e.preventDefault()
    updateProductApi()
  }

  const handleDrop = (newFiles) => {

    setFiles((prevFiles) => [...newFiles]);
    // console.log(image.path,"path")
  };

  const handleRemove = (file) => {
    setFiles((prevFiles) => prevFiles.filter((_file) => _file.path
      !== file.path));
    setImage(null)
  };

  const handleRemoveAll = () => {
    setFiles([]);
    setImage(null)
  };



  return (
    <Formik
      initialValues={{
        category: '',
        description: '',
        images: [],
        includesTaxes: false,
        isTaxable: false,
        name: '',
        price: '',
        productCode: '',
        productSku: '',
        salePrice: '',
        submit: null
      }}
      validationSchema={Yup
        .object()
        .shape({
          category: Yup.string().max(255),
          description: Yup.string().max(5000),
          images: Yup.array(),
          includesTaxes: Yup.bool().required(),
          isTaxable: Yup.bool().required(),
          name: Yup.string().max(255).required(),
          price: Yup.number().min(0).required(),
          productCode: Yup.string().max(255),
          productSku: Yup.string().max(255),
          salePrice: Yup.number().min(0)
        })}
      // onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
      //   try {
      //     // NOTE: Make API request
      //     setStatus({ success: true });
      //     setSubmitting(false);
      //     toast.success('Product created!');
      //     navigate('/dashboard/products');
      //   } catch (err) {
      //     console.error(err);
      //     toast.error('Something went wrong!');
      //     setStatus({ success: false });
      //     setErrors({ submit: err.message });
      //     setSubmitting(false);
      //   }
      // }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values
      }) => (
        <form
          onSubmit={handleClick}
          // {...props}
        >
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <TextField
                    // error={Boolean(touched.name && errors.name)}
                    fullWidth
                    // helperText={touched.name && errors.name}
                    label="Product Name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={(e)=>{ setPrName(e.target.value) }}
                    value={prName}
                    variant="outlined"
                  />
                  <Typography
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      mt: 3
                    }}
                    variant="subtitle2"
                  >
                   
                  </Typography>
                  <TextField  
                    error={Boolean(touched.description && errors.description)}
                    fullWidth
                    // helperText={touched.name && errors.name}
                    label="Description"
                    name="description"
                    onBlur={handleBlur}
                    onChange={(e)=>{ setDescription(e.target.value) }}
                    value={description}
                    variant="outlined"
                  />
                  {/* <QuillEditor
                    onChange={(value) => setFieldValue('description', value)}
                    placeholder="Write something"
                    sx={{ height: 400 }}
                    value={values.description}
                  /> */}
                  {(touched.description && errors.description) && (
                    <Box sx={{ mt: 2 }}>
                      <FormHelperText error>
                        {errors.description}
                      </FormHelperText>
                    </Box>
                  )}
                   <Grid
                        item
                        md={12}
                        xs={12}
                        sx={{
                          mb: 2,
                          mt: 3
                        }}
                      >
                        <TextField
                          // error={Boolean(touched.salePrice && errors.salePrice)}
                          fullWidth
                          // helperText={touched.salePrice && errors.salePrice}
                          label="Unit"
                          name="unit"
                          onBlur={handleBlur}
                          onChange={(e)=>{setUnit(e.target.value)}}
                          type="text"
                          value={unit}
                          variant="outlined"
                        />
                      </Grid>
                </CardContent>
              </Card>
              <Box sx={{ mt: 3 }}>
                <Card>
                  <CardHeader title="Upload Images" />
                  <CardContent>
                    <FileDropzone
                      accept="image/*"
                      files={files}
                      onDrop={handleDrop}
                      onRemove={handleRemove}
                      onRemoveAll={handleRemoveAll}
                      onChange={(e)=>{
                        setImage(e.target.files[0])
                      }}
                     
                      
                    />
                    {/* <img src={"http://127.0.0.1:4000"+imgUrl} style={{width:'200px'}} /> */}
                    {console.log(image,"image")}
                    {
                      

                      // imgUrl==null?<img src={URL.createObjectURL(image)} style={{width:'200px'}} />
                      // :<img src={"http://127.0.0.1:4000"+imgUrl} style={{width:'200px'}} />
                      image == null ?<img src={"http://127.0.0.1:4000"+imgUrl} style={{width:'200px'}} />:<img src={URL.createObjectURL(image)} style={{width:'200px'}} />
                    }
                    
                    
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Card>
                  <CardHeader title="Prices" />
                  <CardContent>
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
                          // error={Boolean(touched.price && errors.price)}
                          fullWidth
                          // helperText={touched.price && errors.price
                            // ? errors.price
                            // : 'If you have a sale price this will be shown as old price'}
                          label="Price"
                          name="price"
                          onBlur={handleBlur}
                          onChange={(e)=>{setPrice(e.target.value)}}
                          type="number"
                          value={price}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          error={Boolean(touched.salePrice && errors.salePrice)}
                          fullWidth
                          helperText={touched.salePrice && errors.salePrice}
                          label="Sale price"
                          name="salePrice"
                          onBlur={handleBlur}
                          onChange={(e)=>{setSale_price(e.target.value)}}
                          type="number"
                          value={sale_price}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        xs={12}
                      >
                        <TextField
                          // error={Boolean(touched.salePrice && errors.salePrice)}
                          fullWidth
                          // helperText={touched.salePrice && errors.salePrice}
                          label="Discount In Percentage"
                          name="discount_in_percentage"
                          onBlur={handleBlur}
                          onChange={(e)=>{setDiscountInPercentage(e.target.value)}}
                          type="number"
                          value={discountInPercentage}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    {/* <Box sx={{ mt: 2 }}>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={values.isTaxable}
                            color="primary"
                            name="isTaxable"
                            onChange={handleChange}
                            value={values.isTaxable}
                          />
                        )}
                        label="Product is taxable"
                      />
                    </Box> */}
                    {/* <Box sx={{ mt: 2 }}>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={values.includesTaxes}
                            color="primary"
                            name="includesTaxes"
                            onChange={handleChange}
                            value={values.includesTaxes}
                          />
                        )}
                        label="Price includes taxes"
                      />
                    </Box> */}
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <Card>
                <CardHeader title="Organize" />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Category"
                    name="category"
                    select
                    SelectProps={{ native: true }}
                    value={category}
                    variant="outlined"
                    onChange={(e)=>{setCategory(e.target.value)}}
                    
                    >
                      {
                      console.log(category,"category"),
                      console.log(categoryList,"categorylist")
                      }
                    {/* {console.log(category),"cate"} */}
                    {categoryList.map((cate,index) => (
            
                      <option
                        key={cate[0]}
                        value={cate[0]}
                        // selected
                      >
                        {cate[1]}
                      </option>
                    ))}
                  </TextField>
                  <Box sx={{ mt: 2 }}>
                    <TextField
                      // error={Boolean(touched.productCode && errors.productCode)}
                      fullWidth
                      // helperText={touched.productCode && errors.productCode}
                      label="Stock"
                      name="stock"
                      type="number"
                      onBlur={handleBlur}
                      onChange={(e)=>{setStock(e.target.value)}}
                      value={stock}
                      variant="outlined"
                    />
                  </Box>
                  {/* <Box sx={{ mt: 2 }}>
                    <TextField
                      error={Boolean(touched.productSku && errors.productSku)}
                      fullWidth
                      helperText={touched.productSku && errors.productSku}
                      label="Product Type"
                      name="product_type"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.productSku}
                      variant="outlined"
                    />
                  </Box> */}
                  <Box  sx={{ mt: 2 }}>
                    
                    <TextField
                      fullWidth
                      label="Product Type"
                      name="product_type"
                      select
                      SelectProps={{ native: true }}
                      value={productTypeId}
                      variant="outlined"
                      onChange={(e)=>{
                        setProductTypeId([e.target.value])
                        console.log(e.target.value,"target")}}
                        
                        >
                      {console.log(typeof(Number(productTypeId)),"product")}
                      {productTypeList.map((type,index) => (
                        
                        
                        <option key={type[0]} value={type[0]} >{type[1]} </option>
                        
                        ))}
                    </TextField>
                      </Box>
                </CardContent>
              </Card>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              )}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: 3
                }}
              >
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  // onClick={handleClick}
                  // onSubmit={handleClick}
                >
                  Update Product
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default ProductUpdateForm;
