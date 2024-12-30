import React,{useState} from 'react'
import './index.css'
import Company from './components/company/Company.jsx'
import { companies } from './dataset.js'
function App() {
  const [company, setCompany] = useState("")
  const handleCompanies = (selectedCompany)=>{
    setCompany(selectedCompany)
  }
  return (
    <div>
      <div className='app'>
        <h2>Selected Comapnies:{company?company:"Not Selected"}</h2>
        {companies.map((company) => {
          return (
            <Company key={company.id} companyName={company.companyName} details={company.details} department={company.department} onCompanyselct={handleCompanies}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
