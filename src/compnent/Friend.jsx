import React from "react";
import { Button } from "./Button";

export const Friend = ({ friend, onSelect, selctedFriend }) => {
  const isSelected = selctedFriend?.id === friend.id
  return (
    <li className={isSelected? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3> {friend.name}</h3>

      {friend.balance < 0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)} </p>}
      {friend.balance > 0 && <p className="green"> {friend.name} owes you ${Math.abs(friend.balance)} </p>}
      {friend.balance === 0 && <p>You and {friend.name} are even </p>}
     <Button onClick={()=>onSelect(friend)}>{isSelected? "close": "select"}</Button>
    </li>
  );
};
