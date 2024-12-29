import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './company.css'
import Department from '../departments/department'

const Company = (props) => {
  const {companyName="Unknown Company",details="Unknown Details",department,onCompanyselct} = props
  return (
    <div className='company'>
        <h4>Company Name:{companyName}</h4>
        <p>Details:{details}</p>
        <button className='btn btn-success' onClick={()=>{onCompanyselct(companyName)}}>Select {companyName}</button>
        <Department department={department}>
          <h5>Department</h5>
        </Department>
    </div>
  )
}


export default Company