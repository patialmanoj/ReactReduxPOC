
// import React  from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// //import * as beerActions from '../../actions/beerActions'; 
// import { prototype } from 'stream';
// import {bindActionCreators} from 'redux';//save us from manually wrap our action creator in a dispatch call 
// import BeerList from './BeerList';



// class BeerPage extends React.Component{
//     constructor(props,context){
//         super(props,context);
      
//     }
 
//     render(){
//         const {beers} = this.props;
//         return(
//             <div>
//                 <h1>Beers</h1>
//                 <BeerList beers={beers} />
               
//             </div>
//         );
//     }
// }

// function mapStateToProps(state,ownprops){ // state is of redux store
//     return{
//          beers : state.beers 
//     };
// }
// function mapDispatchToProps(dispatch){ // what action will be availabe in the function
//     return {
//         actions: bindActionCreators(beerActions ,dispatch)
//     };

// }

// BeerPage.PropTypes ={
// beers:  PropTypes.object.isRequired
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BeerPage); // wraps courese page