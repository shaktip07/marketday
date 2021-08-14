import { useEffect,useState } from 'react';
import Logo from './Logo';
// import { Link as RouterLink } from 'react-router-dom';
import jwt from './jwt.svg'
import myApi from '../../../axios'
import { useNavigate,Redirect,Link as RouterLink,Navigate} from 'react-router-dom';
// import { Alert, Box, Button, FormHelperText, TextField } from '@material-ui/core';
import { TextField,Box, Button, Alert,FormHelperText, Card, CardContent, Container, Divider, Link, Typography } from '@material-ui/core';

const Login_Box = (props) => {
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const [isError,setError] = useState(false)
  const navigate = useNavigate()
  
  const handleChange = (e)=>{
    e.target.name === "name"?setName(e.target.value):setPass(e.target.value);
    console.log(name,pass)
  }
  const handleClick = async()=>{
    try{
      const userData = {username:name,password:pass}
      // const dataObj = await axios.post('http://127.0.0.1:8000/api/auth/login/',{username:"sp@gmail.com",password:"Patel@_1234"},{'Content-Type':'application/json'})
      const dataObj = await myApi.post('api/auth/login/',userData)
      console.log(dataObj);
      setError(false)
      localStorage.setItem("user-Info",JSON.stringify(dataObj.data));
      // <Redirect to="http://localhost:3000/" />
      navigate("/")
    }catch(error){
      setError(true)
    }
  }
  
  return (
    <>
          <TextField
            autoFocus
            // error={Boolean(touched.email && errors.email)}
            fullWidth
            // helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="name"
            
            // onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            // value={values.email}
            variant="outlined"
            />
          <TextField
            // error={Boolean(touched.password && errors.password)}
            fullWidth
            // helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            // onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            // value={values.password}
            variant="outlined"
            />
          {/* {errors.submit && ( */}
            {/* <Box sx={{ mt: 3 }}> */}
              {/* <FormHelperText error> */}
                {/* {errors.submit} */}
              {/* </FormHelperText> */}
            {/* </Box> */}
          {/* )} */}
          <Box sx={{ mt: 2 }}>
            <Button
              color="primary"
              // disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={handleClick}
            >
              Log In
            </Button>
          </Box>
          {
            isError?
            <Box sx={{ mt: 3 }}>
            <Alert severity="error">
              <div>
                Your email
                {' '}
                or
                {' '}
                password
                {' '}
                <b>incorrect !</b>
              </div>
            </Alert>
          </Box>:""
          }
      </>
      )
    }
    
    // export default Login
    
    
    // import { Helmet } from 'react-helmet-async';
    // import AuthBanner from '../../components/authentication/AuthBanner';
    // import {
      //   LoginAmplify,
      //   LoginAuth0,
      //   LoginFirebase,
      //   LoginJWT
      // } from '../../components/authentication/login';
      // import useAuth from '../../hooks/useAuth';
      // import gtm from '../../lib/gtm';
      
      const platformIcons = {
        Amplify: '/static/icons/amplify.svg',
        Auth0: '/static/icons/auth0.svg',
        Firebase: '/static/icons/firebase.svg',
        JWT: '/static/icons/jwt.svg'
      };
      
      const Login = () => {
        // const { platform } = useAuth();
        // const history1 = useNavigate()
        const navigate = useNavigate()
        useEffect(() => {
          
          if(localStorage.getItem('user-Info')){
            navigate("/")
    }
  }, [])

  return (
    <>
      {/* <Helmet>
        <title>Login | Material Kit Pro</title>
      </Helmet> */}
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        {/* <AuthBanner /> */}
        <Container
          maxWidth="sm"
          sx={{ py: '80px' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 8
            }}
          >
            <RouterLink to="/">
              <Logo
                sx={{
                  height: 40,
                  width: 40
                }}
              />
            </RouterLink>
          </Box>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 4
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >
                <div>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                  >
                    Log in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Log in on the internal platform
                  </Typography>
                </div>
                <Box
                  sx={{
                    height: 32,
                    '& > img': {
                      maxHeight: '100%',
                      width: 'auto'
                    }
                  }}
                >
                  <img
                    alt="Auth platform"
                    src={jwt}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 3
                }}
              >
                {/* {platform === 'Amplify' && <LoginAmplify />} */}
                {/* {platform === 'Auth0' && <LoginAuth0 />} */}
                {/* {platform === 'Firebase' && <LoginFirebase />} */}
                {Login_Box()}
                {/* {platform === 'JWT' && <LoginJWT />} */}
              </Box>
              <Divider sx={{ my: 3 }} />
              <Link
                color="textSecondary"
                component={RouterLink}
                to="/authentication/register"
                variant="body2"
              >
                Create new account
              </Link>
              {/* {platform === 'Amplify' && (
                <Link
                  color="textSecondary"
                  component={RouterLink}
                  sx={{ mt: 1 }}
                  to="/authentication/password-recovery"
                  variant="body2"
                >
                  Forgot password
                </Link>
              )} */}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Login;
