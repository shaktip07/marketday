import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import LockIcon from '../../../icons/Lock';
import { useNavigate } from 'react-router-dom';

import UserIcon from '../../../icons/User';
import Label from '../Label';

const CustomerContactDetails = (props) => {
  const { name, email, mobile, username, isVerified } = props;
  const navigate = useNavigate();


  return (
    <Card>
      <CardHeader title="Contact Details" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {
                  email?email:<Label color='error'>No Email Found</Label>
                }
              </Typography>
              {/* <Label color={isVerified ? 'success' : 'error'}>
                {isVerified ? 'Email verified' : 'Email not verified'}
              </Label> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Phone
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                 {
                  mobile?mobile:<Label color='error'>No Phonenumber Found</Label>
                }
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Username
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {
                  username?username:<Label color='error'>No Username Found</Label>
                }
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                 {
                  name?name:<Label color='error'>No Name Found</Label>
                }
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
               Is Verified
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
              <Label color={isVerified ? 'success' : 'error'}>
                {isVerified ? 'True' : 'False'}
              </Label>
              </Typography>
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Address 2
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                
              </Typography>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          p: 1
        }}
      >
        {/* <Button
          color="inherit"
          startIcon={<LockIcon fontSize="small" />}
          variant="text"
        >
          Reset &amp; Send Password
        </Button>
        <Button
          color="inherit"
          startIcon={<UserIcon fontSize="small" />}
          sx={{ mt: 1 }}
          variant="text"
        >
          Login as Customer
        </Button> */}
        <Button
                color="warning"
                // disabled={isSubmitting}
                type="submit"
                variant="contained"
                onClick={()=>{navigate("/dashboard/customers/")}}
              >
                Go back
              </Button> 
      </Box>
    </Card>
  );
};

// CustomerContactDetails.propTypes = {
//   address1: PropTypes.string,
//   address2: PropTypes.string,
//   country: PropTypes.string,
//   email: PropTypes.string.isRequired,
//   isVerified: PropTypes.bool.isRequired,
//   phone: PropTypes.string,
//   state: PropTypes.string
// };

export default CustomerContactDetails;
