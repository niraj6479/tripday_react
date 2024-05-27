import React from 'react'
import CabService from './CabService'
import OneAppDriver from './OneAppDriver'
import CabManagementSystem from './CabManagementSystem'

export default function WebBody() {
  return (
    <div>
        <CabService />
        <OneAppDriver />
        <CabManagementSystem />
      {/* <h1>Web Body</h1> */}
    </div>
  )
}
