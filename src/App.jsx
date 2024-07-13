import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserDashboard from './components/User/UserDashboard.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Map from './components/User/Map.jsx';
import Posts from './components/User/Posts.jsx';
import VerifyPost from './components/Ranger/VerifyPost.jsx';
import AddLocation from './components/Ranger/AddLocation.jsx';
import Login from './components/Login.jsx';
import Payment from './components/Payment.jsx';

import UserLists from './SuperAdmin/UserLists.jsx';
import SuperAdminDashboard from './SuperAdmin/SuperAdminDashboard.jsx';
import RangerList from './SuperAdmin/RangerList.jsx';
import TigerDetections from './SuperAdmin/TigerDetections.jsx';
import RangerDashboard from './components/Ranger/RangerDashboard.jsx';
import VictimsList from './SuperAdmin/VictimsList.jsx';
import SucessPage from './components/SucessPage.jsx';
import ThankYou from './ThankYou.jsx';
import LiveFeedOne from './SuperAdmin/LiveFeedOne.jsx';
import LiveFeedTwo from './SuperAdmin/LiveFeedTwo.jsx';



function App() {
  
  return (
    <>
    
    <Router>
      <Routes>
      <Route exact path="*" element={<PageNotFound/>}/>
      <Route exact path="/" element={<UserDashboard/>}/>
      <Route exact path="/map" element={<Map/>}/>
      <Route exact path="/posts" element={<Posts/>}/>
      <Route exact path="/login" element={<Login/>}/>


      <Route exact path="/rangerdashboard" element={<RangerDashboard/>}/>
      <Route exact path="/verifypost" element={<VerifyPost/>}/>
      <Route exact path="/addlocation" element={<AddLocation/>}/>


     
      <Route exact path="/admindashboard" element={<SuperAdminDashboard/>}/>
      <Route exact path="/detections" element={<TigerDetections/>}/>
      <Route exact path="/users" element={<UserLists/>}/>
      <Route exact path="/rangers" element={<RangerList/>}/>
      <Route exact path="/victims" element={<VictimsList/>}/>
      <Route exact path="/payment" element={<Payment/>}/>
      <Route exact path="/livefeed1" element={<LiveFeedOne/>}/>
      <Route exact path="/livefeed2" element={<LiveFeedTwo/>}/>
      <Route exact path="/success" element={<SucessPage/>}/>
      <Route exact path="/thankyou" element={<ThankYou/>}/>
 


      </Routes>
    </Router>
    
   
  

   </>
  );
};

export default App;
