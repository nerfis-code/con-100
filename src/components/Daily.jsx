import './Daily.css'
import { createContext, useContext, useState } from 'react'
import { accountsName, auxiliarByControl, controlAccounts, getAllControlNames } from '../data/data'
import { useDailyStore } from '../store/useDailyStore'

export default function Daily() {
  return (
    <Record />
  )
}

function Record(){
  return (
    <form action="">
      <input type="date" name="" id="" required/>
      <Movement/>
    </form>
  )
}

function Movement(){

  return (
    <div className='con-account '>
      <input type="text" name="" id="" required/>
      <input type="number" name="" id="" />
      <label htmlFor="">D</label>
    </div>
  )
}

