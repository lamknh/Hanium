import React from 'react';

import Nav from './Nav';
import SalesPrice from './SalesPrice';
import SalesTop3 from './SalesTop3';
import RecentEvent from './RecentEvent';
import Footer from '../Footer';

function OwnerHome(){
    return(
      <div className="ownerHome">
        <div id="header">
          <Nav />
        </div>
        <div id="content">
          <SalesPrice />
          <SalesTop3 />
          <RecentEvent />
        </div>
        <Footer />
      </div>
    )
}

export default OwnerHome;