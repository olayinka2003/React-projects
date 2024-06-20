import { useState } from "react";
import "./App.css";
import { Button } from "./compnent/Button";
import { FormAddFriend } from "./compnent/FormAddFriend";
import { FormSplitBill } from "./compnent/FormSplitBill";
import { FriendList } from "./compnent/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selctedFriend, setSelectedFriend] = useState(null);
  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  const handleSelection = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend(selected=> selected?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  };

  const handleSplitBill = (value)=>{
    console.log(value);
    setFriends(friends=>friends.map(friend=> friend.id=== selctedFriend.id? {...friend, balance:friend.balance + value}:friend));

    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelect={handleSelection}
          selctedFriend={selctedFriend}
        />
        {showAddFriend && <FormAddFriend onAddfriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add friend"}
        </Button>
      </div>
      {selctedFriend && <FormSplitBill selctedFriend={selctedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}

export default App;
