import React from 'react'

export const TableData = ({children,...props}) => {
  return (
    <tr {...props}>
{children}
    </tr>
  )
}
