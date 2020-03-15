import React from 'react';


class Forma1 extends React.Component{
    render () {
        return(
            <>
            <input type="text" placeholder="Tekst1"></input>
            <button>{this.props.string}</button>
            </>
        )
    }
}

export default Forma1