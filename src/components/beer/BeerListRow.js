import React,{PropTypes} from 'react';
import {Link} from 'react-router';
const BeerListRow = ({beer}) => {
    return(
      <tr>
          <td><a href= {beer.watchHref} target="_blank">Watch</a> </td>
          <td><Link to={'/beer/'+ beer.id}>{beer.title}</Link> </td>
          <td>{beer.cost}</td>
          <td>{beer.origin}</td>
          <td>{beer.description}</td>
      </tr>  
    );
};

BeerListRow.propTypes = { 
  //  course: PropTypes.Object.isRequired
};
export default BeerListRow;