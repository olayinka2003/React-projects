import React from 'react'
import { Friend } from './Friend';

export const FriendList = ({friends, onSelect,selctedFriend}) => {

  return (
    <ul>{friends.map((f)=>(
     <Friend friend={f} key={f.id} onSelect={onSelect} selctedFriend={selctedFriend}/>
    ))}</ul>
  )
}
