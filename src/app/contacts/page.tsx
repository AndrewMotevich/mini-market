import React from "react";

const ContactsPage = () => {
  return (
    <div className="contacts-container">
      <h2>Contacts:</h2>
      <hr />
      <div>
        <h3>Phone numbers:</h3>
        <ul>
          <li>+375 29 111-11-11</li>
          <li>+375 33 222-22-22</li>
          <li>+375 25 333-33-33</li>
        </ul>
      </div>
      <hr />
      <div>
        <h3>Addresses:</h3>
        <ul>
          <li>Jerry Seinfeld Apartment 5A 129 West 81st Street</li>
          <li>Jerry Seinfeld Apartment 5A 129 West 81st Street</li>
          <li>Jerry Seinfeld Apartment 5A 129 West 81st Street</li>
        </ul>
      </div>
      <div>
        <h3>Delivery:</h3>
        <ul>
          <li>Delivery is free for order more than 100$ and for my friends</li>
          <li>Delivery cost is 100$ for my enemies</li>
          <li>Delivery cost is 5$ for other</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
