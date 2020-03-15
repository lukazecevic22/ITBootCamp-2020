import React from 'react';
import Descp from './descp';
import Smile from './emoji';




const DescEm = (props) =>{
    return (
            <>
                <Descp description={props.description}></Descp>
                <Smile url={props.url}></Smile>
            </>
    )
}


export default DescEm
