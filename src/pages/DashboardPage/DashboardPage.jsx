import { useEffect, useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CottageIcon from "@mui/icons-material/Cottage";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Person3Icon from "@mui/icons-material/Person3";
import useAuth from "../Auth/useAuth/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import ArticleIcon from "@mui/icons-material/Article";
import PaymentIcon from "@mui/icons-material/Payment";
import AddHomeIcon from "@mui/icons-material/AddHome";
import SearchIcon from "@mui/icons-material/Search";
import useProfileInfo from "../../Hooks/useProfileInfo";
import "../../components/Sidebar/Sidebar.css";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

function DashboardPage(props) {
  const { userInfo } = useProfileInfo();
  const navigate = useNavigate();

  // const [isAdmin] = useAdmin();
  const { user, loading, logoutUser } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logoutHandler = () => {
    logoutUser();
    navigate("/");
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <h1 style={{ fontWeight: 700, fontSize: "25px" }}>
        <a href="/" className="logo">
          House Rent
        </a>
      </h1>
      <Divider />

      {/* 1st list admin */}
      {userInfo?.role === "admin" && (
        <>
          <List>
            {/* admin home */}
            <Link to="/dashboard/admin-profile">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CottageIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Admin Profile"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* manage users */}
            <Link to="/dashboard/manageusers">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Person3Icon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Manage Users"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* manage review */}
            <Link to="/dashboard/managereview">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Manage Review"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* all apartment */}
            <Link to="/dashboard/all">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="All Apartments"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}
      {/* 2nd list landlord */}
      {userInfo?.type === "Landlord" && (
        <>
          <List>
            {/*landlord home */}
            <Link to="/dashboard/landlord-profile">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CottageIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Landlord Profile"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* add apartment */}
            <Link to="/dashboard/add">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddHomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Add Apartment"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* manage apartment */}
            <Link to="/dashboard/manage">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Manage Apartment"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}

      {/* 3rd list tenant */}
      {userInfo?.type === "Tenant" && (
        <>
          <List>
            {/*tenant home */}
            <Link to="/dashboard/tenant-profile">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CottageIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Tenant Profile"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* manage booking */}
            <Link to="/dashboard/managebooking">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BeenhereIcon></BeenhereIcon>
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="My Booking"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* manage cart */}
            <Link to="/dashboard/managecart">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingCartIcon></ShoppingCartIcon>
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="My Cart"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* add review */}
            <Link to="/dashboard/addreview">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Add Review"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* payment */}
            <Link to="/dashboard/payment">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Payment"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* payment history */}
            <Link to="/dashboard/phistory">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: "#0e2e50" }}
                    primary="Payment History"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}

      {/* 4th list general category */}
      <List>
        {/* home */}
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CottageIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "#0e2e50" }} primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>

        {/* serach */}
        <Link to="/apartments">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "#0e2e50" }} primary="Search" />
            </ListItemButton>
          </ListItem>
        </Link>

        {/* logout */}
        <Link to="/" onClick={() => logoutHandler()}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "#0e2e50" }} primary="Logout" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ backgroundColor: "#effdf5", minHeight: "100vh" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          style={{
            backgroundColor: "white",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
            // borderBottom: "1px solid rgba(240, 240, 240, 1)",
          }}
        >
          <Toolbar style={{ minHeight: 55, justifyContent: "space-around" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"#0e2e50"}
              fontWeight={700}
              variant="h6"
              noWrap
              component="DIV"
            >
              DASHBOARD
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* page content */}
          <Outlet></Outlet>
          <Typography paragraph></Typography>
          <Typography paragraph></Typography>
        </Box>
      </Box>
    </div>
  );
}

DashboardPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardPage;
