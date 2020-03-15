import React from 'react'


const Forma = (props) => {
    return (
        <>
        <input type="Tekst" placeholder="Tekst" ></input>
        <button>{props.string}</button>
        </>
    )
}

export default Forma