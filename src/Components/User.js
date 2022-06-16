import React from "react";

const User = ({ userName }) => {
  return (
    <div>
      User - Component
      <p>User name is : {userName.name}</p>
      <p>User age is : {userName.age}</p>
    </div>
  );
};

export default User;
