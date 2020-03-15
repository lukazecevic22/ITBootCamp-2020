import React from 'react';



class EmojiClass extends React.Component{
    render(){
        return( 
            <img src={this.props.url} style={{width:"100px"}, {height:"150px"}} />
        ) 
    }

}


export default EmojiClass