import React from 'react';

const Kontakt = (props) =>{
    let{kontakt}=props
    return(
        <>
        <p>{`${kontakt.ime}`} {`${kontakt.broj}`}</p>
        </>
    )
}

export default Kontakt