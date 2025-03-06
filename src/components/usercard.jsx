import React from "react";

const UserCard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150"; // Dummy image
  const name = "John Doe";
  const email = "joe kelaster";
  const phone = "+91 000000000";
  const address = "123, ABC Street, Chennai, India";

  return (
    <div>
      <img src={profilePhoto} alt="Profile" />
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default UserCard;
