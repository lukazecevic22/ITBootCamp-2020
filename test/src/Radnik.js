import React from 'react'

 const Radnik = ({worker}) => {

    return (
        <>
        <p>{worker.id}</p>
        <p>{worker.employee_name}</p>
        <p>{worker.employee_salary}</p>
        <p>{worker.employee_age}</p>
        <img src={worker.profile_image} alt="Bez slike"/>

        </>
    )
}

export default Radnik