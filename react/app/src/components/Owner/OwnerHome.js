import React from 'react';

import Nav from './Nav';
import SalesPrice from './SalesPrice';
import SalesTop3 from './SalesTop3';
import RecentEvent from './RecentEvent';

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
        <div id="footer">
          <h1>MGJ</h1>
        </div>
      </div>
    )
}

export default OwnerHome;