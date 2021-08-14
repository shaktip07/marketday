// import { Link as RouterLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { AppBar, IconButton, Toolbar } from '@material-ui/core';
// import MenuIcon from '../icons/Menu';
// import Logo from '../Authentication/login/Logo';

// const DocsNavbar = ({ onSidebarMobileOpen }) => (
//   <AppBar
//     sx={{
//       backgroundColor: 'background.paper',
//       color: 'text.primary',
//       boxShadow: 'none',
//       borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
//       zIndex: (theme) => theme.zIndex.drawer + 100
//     }}
//   >
//     <Toolbar sx={{ height: 64 }}>
//       <IconButton
//         color="inherit"
//         onClick={onSidebarMobileOpen}
//         sx={{
//           display: {
//             lg: 'none'
//           }
//         }}
//       >
//         <MenuIcon fontSize="small" />
//       </IconButton>
//       <RouterLink to="/">
//         <Logo
//           sx={{
//             height: 40,
//             width: 40,
//             display: {
//               lg: 'inline',
//               xs: 'none'
//             }
//           }}
//         />
//       </RouterLink>
//     </Toolbar>
//   </AppBar>
// );

// DocsNavbar.propTypes = {
//   onSidebarMobileOpen: PropTypes.func
// };

// export default DocsNavbar;

// import PropTypes from 'prop-types';
// import { Link as RouterLink } from 'react-router-dom';
// import { AppBar, Box, Button, Chip, Divider, IconButton, Link, Toolbar } from '@material-ui/core';
// import MenuIcon from '../icons/Menu';
// // import Logo from '../Authentication/Logo';
// import Logo from '../Authentication/login/Logo';

// const MainNavbar = (props) => {
//   const { onSidebarMobileOpen } = props;

//   return (
//     <AppBar
//       elevation={0}
//       sx={{
//         backgroundColor: 'background.paper',
//         color: 'text.secondary'
//       }}
//     >
//       <Toolbar sx={{ minHeight: 64 }}>
//         <IconButton
//           color="inherit"
//           onClick={onSidebarMobileOpen}
//           sx={{
//             display: {
//               md: 'none'
//             }
//           }}
//         >
//           <MenuIcon fontSize="small" />
//         </IconButton>
//         <RouterLink to="/">
//           <Logo
//             sx={{
//               display: {
//                 md: 'inline',
//                 xs: 'none'
//               },
//               height: 40,
//               width: 40
//             }}
//           />
//         </RouterLink>
//         <Box sx={{ flexGrow: 1 }} />
//         <Box
//           sx={{
//             alignItems: 'center',
//             display: {
//               md: 'flex',
//               xs: 'none'
//             }
//           }}
//         >
//           <Link
//             color="textSecondary"
//             component={RouterLink}
//             to="/browse"
//             underline="none"
//             variant="body1"
//           >
//             Browse Components
//           </Link>
//           <Chip
//             color="primary"
//             label="NEW"
//             size="small"
//             sx={{
//               maxHeight: 20,
//               ml: 1,
//               mr: 2
//             }}
//           />
//           <Link
//             color="textSecondary"
//             component={RouterLink}
//             to="/docs"
//             underline="none"
//             variant="body1"
//           >
//             Documentation
//           </Link>
//           <Divider
//             orientation="vertical"
//             sx={{
//               height: 32,
//               mx: 2
//             }}
//           />
//           <Button
//             color="primary"
//             component="a"
//             href="https://material-ui.com/store/items/devias-kit-pro"
//             size="small"
//             target="_blank"
//             variant="contained"
//           >
//             Get the kit
//           </Button>
//         </Box>
//       </Toolbar>
//       <Divider />
//     </AppBar>
//   );
// };

// MainNavbar.propTypes = {
//   onSidebarMobileOpen: PropTypes.func
// };

// export default MainNavbar;

import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';

// import MenuIcon from '../../icons/Menu';
import MenuIcon from '../../icons/Menu';
import AccountPopover from './AccountPopover';
// import ContactsPopover from './ContactsPopover';
// import ContentSearch from './ContentSearch';
// import LanguagePopover from './LanguagePopover';
import Logo from '../Authentication/login/Logo';
// import NotificationsPopover from './NotificationsPopover';

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    color: theme.palette.primary.contrastText
  }),
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none'
  }),
  zIndex: theme.zIndex.drawer + 100
}));

const DashboardNavbar = (props) => {
  const { onSidebarMobileOpen, ...other } = props;

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              lg: 'none'
            }
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <RouterLink to="/">
          <Logo
            sx={{
              display: {
                lg: 'inline',
                xs: 'none'
              },
              height: 40,
              width: 40
            }}
          />
        </RouterLink>
        <Box
          sx={{
            flexGrow: 1,
            ml: 2
          }}
        />
        {/* <LanguagePopover /> */}
        <Box sx={{ ml: 1 }}>
          {/* <ContentSearch /> */}
        </Box>
        <Box sx={{ ml: 1 }}>
          {/* <ContactsPopover /> */}
        </Box>
        <Box sx={{ ml: 1 }}>
          {/* <NotificationsPopover /> */}
        </Box>
        <Box sx={{ ml: 2 }}>
          <AccountPopover />
        </Box>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
};

export default DashboardNavbar;
