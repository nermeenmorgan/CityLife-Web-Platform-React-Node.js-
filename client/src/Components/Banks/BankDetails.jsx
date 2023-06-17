import React from 'react'
import { useParams } from 'react-router-dom'

export default function BankDetails() {
   const {cat,id} = useParams()
  return (
    <div>{cat}{id}</div>
  )
}
