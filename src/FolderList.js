import React from "react";
import "./App.css";




class FolderList extends React.Component {

    
  render() {


        return (
        <ul>            
              
        <li className= "folderLi"><button className = "folderButton" >{this.props.name}<span className = "number">{this.props.length}</span></button></li>
        
        
       </ul>

        );
      }

    }

    


export default FolderList;


/*<ul className="bookSummary">            
        <li className="title">
        
        {item.volumeInfo.title && (<li>{this.props.item.volumeInfo.title}</li>)}
        
        {item.volumeInfo.authors && (<li>{item.volumeInfo.authors[0]}</li>)}
        
        {item.saleInfo.retailPrice && (<li>{USCurrencyFormat.format(item.saleInfo.retailPrice.amount.toString())}</li>)}
        
         {item.volumeInfo.imageLinks && item.volumeInfo.previewLink && item.volumeInfo.description &&(<li><img src={this.props.item.volumeInfo.imageLinks.thumbnail} alt="Cover" /><a href={this.props.item.volumeInfo.previewLink} title="Click for further details">{this.props.item.volumeInfo.description}</a></li>)}
         
        </li>
 </ul>*/
