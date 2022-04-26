import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from '../Constants/routes.js';
import LandingPage from './LandingPage';
import CarouselPage from './CarouselPage';
import MovieInfoPage from './MovieInfoPage';
import SearchBar from './searchBar';
import CitySearchPage from './CitySearchPage';
import UserDashboard from './UserDashboard';
import MgmtDashboard from './MgmtDashboard';
import UserPreference from './UserDashboard/userPreference';
import ViewStatusPoints from './UserDashboard/viewstatuspoints';
import AccountSettings from './UserDashboard/accountSettings';
import NavBar from './navbar';
import EditShowtime from './MgmtDashboard/editShowtime.js';
import EditCinema from './MgmtDashboard/editCinema.js';
import EditPoints from './MgmtDashboard/editPoints.js';
import VisualizeData from './MgmtDashboard/visualizeData.js';
import TheatrePage from './TheatrePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgetPasswordPage from './ForgetPasswordPage';
import PaymentPage from './PaymentPage';
import SeatBooking from './seat-booking/seatbooking.js';
import AllReservation from './AllReservationPage/index.js';
import MyReservation from './MyReservationPage/index.js';
import Rating from './RatingPage/index.js';
import Feedback from './FeedbackPage/index.js';
import Chat from './ChatPage';

const App = () => (
  <Router>
    <NavBar/>
    <Routes>
    <Route exact path={ROUTES.SEARCH} element={<SearchBar />}/>
    <Route exact path={ROUTES.LANDING} element={<LandingPage />}/>
    <Route exact path={ROUTES.CAROUSEL} element={<CarouselPage />}/>
    <Route exact path={ROUTES.MOVIEINFO} element={<MovieInfoPage />}/>
    <Route exact path={ROUTES.CITYSEARCH} element={<CitySearchPage />}/>
    <Route exact path={ROUTES.USERDASHBOARD} element={<UserDashboard />}/>
    <Route exact path={ROUTES.VIEWSTATUSPOINTS} element={<ViewStatusPoints />}/>
    <Route exact path={ROUTES.MGMTDASHBOARD} element={<MgmtDashboard />}/>
    <Route exact path={ROUTES.USERPREFERENCE} element={<UserPreference/>}/>
    <Route exact path={ROUTES.ACCOUNTSETTINGS} element = {<AccountSettings/>}/>
    <Route exact path={ROUTES.EDITSHOWTIME} element = {<EditShowtime/>}/>
    <Route exact path={ROUTES.EDITCINEMA} element = {<EditCinema/>}/>
    <Route exact path={ROUTES.EDITPOINTS} element = {<EditPoints/>}/>
    <Route exact path={ROUTES.VISUALIZEDATA} element = {<VisualizeData/>}/>
    <Route exact path={ROUTES.THEATRES} element={<TheatrePage />}/>
    <Route exact path={ROUTES.LOGIN} element={<LoginPage />} />
    <Route exact path={ROUTES.REGISTER} element={<RegisterPage />} />
    <Route exact path={ROUTES.FORGETPASSWORD} element={<ForgetPasswordPage/>} />
    <Route exact path={ROUTES.PAYMENT} element={<PaymentPage/>} />
    <Route exact path={ROUTES.SEATBOOKING} element={<SeatBooking/>} />
    <Route exact path={ROUTES.RESERVATIONS} element={<AllReservation/>} />
    <Route exact path={ROUTES.MYRESERVATIONS} element={<MyReservation/>} />
    <Route exact path={ROUTES.RATING} element={<Rating/>} />
    <Route exact path={ROUTES.FEEDBACK} element={<Feedback/>} />
    <Route exact path={ROUTES.CHAT} element={<Chat/>} />
    </Routes>
  </Router>
);


export default App;
