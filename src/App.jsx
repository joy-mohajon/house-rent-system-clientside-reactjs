import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddProperty from "./components/AddProperty/AddProperty/AddProperty";
import Profile from "./components/Profile/Profile/Profile";
import NavLayout from "./layouts/NavLayout";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import PropertyInfo from "./pages/PropertyInfo/PropertyInfo";
import SavedProperty from "./components/SavedProperty/SavedProperty";

// tanstack query added
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AuthProvider from "./pages/Auth/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/Auth/PrivateRoute/PrivateRoute";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AdminHome from "./pages/DashboardPage/Admin/AdminHome/AdminHome";
import LandlordHome from "./pages/DashboardPage/Landlord/LandlordHome/LandlordHome";
import TenantHome from "./pages/DashboardPage/Tenant/TenantHome/TenantHome";
import ManageUsers from "./pages/DashboardPage/Admin/ManageUsers/ManageUsers";
import ManageBooking from "./pages/DashboardPage/Tenant/ManageBooking/ManageBooking";
import ManageCart from "./pages/DashboardPage/Tenant/ManageCart/ManageCart";
import BookingPage from "./pages/BookingPage/BookingPage";
import ManageReview from "./pages/DashboardPage/Admin/ManageReview/ManageReview";
import AddReview from "./pages/DashboardPage/Tenant/AddReview/AddReview";
import Payment from "./pages/DashboardPage/Tenant/Payment/Payment";
import PaymentHistory from "./pages/DashboardPage/Tenant/PaymentHistory/PaymentHistory";
// import AddApartment from "./pages/DashboardPage/Landlord/AddApartment/AddApartment";
import ManageApartment from "./pages/DashboardPage/Landlord/ManageApartment/ManageApartment";
import AllApartment from "./pages/DashboardPage/Admin/AllApartment/AllApartment";
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
         <QueryClientProvider client={queryClient} >
            <Router>
              <Routes>
                  <Route path="/" element={<NavLayout />}>
                    <Route index exact element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    {/* <Route path="add-property" element={<AddProperty />} /> */}
                  </Route>
                  {/* apartments */}
                  <Route path="/apartments" element={<Dashboard />} />
                  {/* dynamic route */}
                  <Route path="apartmentsinfo/:id" element={<PropertyInfo />} />
                  
                  {/* booking page: private route */}
                  <Route path="booking/:id" element={ 
                    <PrivateRoute>
                      <BookingPage></BookingPage>
                    </PrivateRoute>
                  } ></Route>

                  {/* dashboard page , private route, nested route */}
                  <Route path='/dashboard' element={ 
                    <PrivateRoute>
                      <DashboardPage></DashboardPage>
                    </PrivateRoute>
                   } > 
                      {/* admin home */}
                      <Route path='adminhome' element={ <AdminHome></AdminHome> } > </Route>
                      {/* admin: manage users */}
                      <Route path='manageusers' element={ <ManageUsers></ManageUsers> } ></Route>
                      {/* manage review */}
                      <Route path='managereview' element={ <ManageReview></ManageReview> } ></Route>
                      {/* all apartment */}
                      <Route path='all' element={ <AllApartment></AllApartment> } ></Route>

                      {/* landlord home */}
                      <Route path='landlordhome' element={ <LandlordHome></LandlordHome> } > </Route>
                      {/* landlord: add apartment */}
                      <Route path='add' element={<AddProperty />} ></Route>
                      {/* landlord: manage apartment */}
                      <Route path='manage' element={ <ManageApartment></ManageApartment> } ></Route>

                      {/* tenant home */}
                      <Route path='tenanthome' element={ <TenantHome></TenantHome> } > </Route>
                      {/* tenant: managebooking */}
                      <Route path="managebooking" element={ <ManageBooking></ManageBooking> } ></Route>
                      {/* tenant: managecart */}
                      <Route path="managecart" element={ <ManageCart></ManageCart> } ></Route>
                      {/* tenant: addreview */}
                      <Route path="addreview" element={ <AddReview></AddReview> } ></Route>
                      {/* payment */}
                      <Route path='payment' element={ <Payment></Payment> } ></Route>
                      {/* payment history */}
                      <Route path='phistory' element={ <PaymentHistory></PaymentHistory> } ></Route>
                  </Route>

                  <Route path="/profile" element={<Profile />} />
                  <Route path="/saved-property" element={<SavedProperty />} />
              </Routes>
          </Router>
         </QueryClientProvider>
    </AuthProvider>

    
  );
}

export default App;
