import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


const landing = () => {

  window.location.href = [ROUTES.CAROUSEL]

  return (  
    <div style={{textAlign: 'center', backgroundColor: 'aliceblue', height: '100vh'}}>
    <div style={{ color: '#1d211f' }} >
    <br></br>

    

    
    </div>
    </div>
    );
  }

  export default landing;