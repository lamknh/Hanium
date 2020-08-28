import React from 'react';
import {Link} from 'react-router-dom';

function Section(){
    return(
        <ul>
            <li><Link to='/userLogin'>User</Link></li>
            <li><Link to='/ownerLogin'>Owner</Link></li>
            <li><Link to='/managerLogin'>Manager</Link></li>
        </ul>
    )   
}

export default Section;