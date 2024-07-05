import React, { useState } from 'react'
import { Button } from './Button'

export const FormSplitBill = ({selctedFriend, onSplitBill}) => {
  const[bill, setBill]= useState("")
  const[expense, setExpense]= useState("")
  const paidByFriend = bill? bill - expense: "" 
  const[payer, setPayer]= useState("user")
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!bill || !expense) return;
    onSplitBill(payer=== "user" ? paidByFriend : -expense)

  }
  return (
<form className='form-split-bill' onSubmit={handleSubmit}>
    <h2>Split a bill with {selctedFriend.name} </h2>
    <label>Bill Value </label>
        <input type="text"  value={bill} onChange={(e)=>setBill(Number(e.target.value))}/>    
        <label>Your expense</label>
        <input type="text" value={expense} onChange={(e)=>setExpense(Number(e.target.value)> bill ? expense : Number(e.target.value) )} />       
        <label>{selctedFriend.name}  expense</label>
        <input type="text" value={paidByFriend} disabled/> 
        <label>Who is paying the bill?</label>
        <select value={payer} onChange={(e)=>setPayer(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selctedFriend.name} </option>
        </select>
        <Button>Split bill</Button>
</form>
  )
}
