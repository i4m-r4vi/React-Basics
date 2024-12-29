import React from 'react'

const Department = (props) => {
  const { department, children } = props

  return (
    <div>
      {children}
      <ol className='orderedList'>
        {department.map((dep, index) => {
          return (
            <button key={index} className='or-btn'>
              <li>{dep}</li>
            </button>
          )
        })}
      </ol>
    </div>
  )
}

export default Department