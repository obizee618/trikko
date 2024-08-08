import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
  const params = useParams()
  return (
    <div>{params.id}</div>
  )
}
