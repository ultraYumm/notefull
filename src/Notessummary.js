import React from 'react';
import './App.css';
import RemoveNote from './RemoveNote';
import Moment from 'react-moment';



class Notessummary extends React.Component {
  

render() {
  
         return (

         
        <div className= "noteSummaryBox">
        <ul>            
           <li className= "noteName">{this.props.name}<span className= "remove"><RemoveNote/></span></li>
           <li className= "noteLi">Modified <Moment format="D MMM YYYY" withTitle>
             {this.props.modified}</Moment></li>     
        </ul>
        
           
       </div>

        );
      }

    }

    
  

    export default Notessummary;