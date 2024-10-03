import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import {
  // Home,
  // Listings,
  // Listing,
  // AddListing,
  // DeleteListing,
  // Dashboard,
  // Messages,
  // Contact,
  // ScreeningCriteria,
  // OurServices,
  // FAQ

  // Agents,
  // Password,
  // AddLisiting,
  // AdminListingList,
  // AdminAgentsList,
  // AgentListing,
  // UserProfile,
  // Login,
  // Signup,
  // Forgot,
  // Agentt,  
} from "./pages";
import { CallbackPage } from "./pages/callback-page";
import Loading from "./components/loading";
// import { Profile } from './components/profile';
import { useAuth0 } from "@auth0/auth0-react";


const Home = lazy(() => import("./pages/home"));
const Listings = lazy(() => import("./pages/listings"));
const Listing = lazy(() => import("./pages/property"));
const AddListing = lazy(() => import("./pages/add-listing"));
const DeleteListing = lazy(() => import("./pages/delete-listing"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Messages = lazy(() => import("./pages/messages"));
const Contact = lazy(() => import("./pages/contact"));
const ScreeningCriteria = lazy(() => import("./pages/screening-criteria"));
const OurServices = lazy(() => import("./pages/our-services"));
const FAQ = lazy(() => import("./pages/faq"));


const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/listings" element={<Listings />} />
        <Route exact path="/our-services" element={<OurServices />} />
        <Route exact path="/screening-criteria" element={<ScreeningCriteria />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route exact path="/listing" component={ isAuthenticated ? Listings : Home} />  */}
        <Route
          exact
          path="/addlisting"
          element={isAuthenticated ? <AddListing /> : <Home />}
        />
        <Route exact path="/rentals/:id" element={<Listing />} />
        <Route
          exact
          path="/rentals/delete/:id"
          element={isAuthenticated ? <DeleteListing /> : <Home />}
        />
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/signup" component={Signup} /> */}
        {/* <Route exact path="/forgot-password" component={Forgot} /> */}
        {/* <Route exact path="/profile" component={UserProfile} /> */}
        {/* <Route exact path="/change-password" component={Password} /> */}
        {/* <Route path="/add-listing/:id?" component={AddLisiting} /> */}
        {/* <Route exact path="/all-listing" component={AdminListingList} /> */}
        {/* <Route exact path="/all-agents" component={AdminAgentsList} /> */}
        {/* <Route exact path="/mylisting" component={AgentListing} /> */}
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
