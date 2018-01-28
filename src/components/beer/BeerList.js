import React,{PropTypes} from 'react';
import BeerListRow from './beerListRow';
const BeerList= ({beers}) => {
    return(
        <table className= "table">
        <thead>
        <tr>
            <th></th>
            <th>Title</th>
            <th>Cost</th>
            <th>Origin</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {beers.map(beer => 
            <BeerListRow key= {beer.id} beer={beer}/>
        )}
        </tbody>
        </table>
    );
};
BeerList.PropTypes = {
    beers: PropTypes.array.isRequired
}
export default BeerList;