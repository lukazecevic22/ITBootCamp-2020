import React from 'react';
import Kontakt from './Kontakt';


const KontaktList = (props) => {
    let { kontakti } = props
    return (
        <>
           {kontakti.map(kontakt=> <Kontakt kontakt={kontakt}/>)}
        </>
    )
}

export default KontaktList
