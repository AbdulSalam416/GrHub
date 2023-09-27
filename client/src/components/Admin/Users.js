import React from "react";

import {formatDate } from '../../dateUtils'


const UserTable = ({ users }) => {
  return (
    <table className="user-profile-table">
      <thead>
        <tr>
          <th>Vault Number</th>
          <th>Username</th>
          <th>Full Name</th>
          <th>Date of Birth</th>
          <th>Nationality</th>
          <th>Country</th>
          <th>Sex</th>
          <th>Occupation</th>
          <th>Deposit Date</th>
          <th>Address</th>
          <th>Item Name</th>
          <th>Weight(kg)</th>
          <th>Purity(%)</th>
          <th>Carat</th>
          <th>Demurrage Charge($)</th>
          <th>Next of Kin</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.vaultNumber}</td>
            <td>{user.username}</td>
            <td>{user.fullName}</td>
            <td>{formatDate(user.dateOfBirth)}</td>
            <td>{user.nationality}</td>
            <td>{user.country}</td>
            <td>{user.sex}</td>
            <td>{user.occupation}</td>
            <td>{formatDate(user.depositDate)}</td>
            <td>{user.address}</td>
            <td>{user.itemName}</td>
            <td>{user.weight}</td>
            <td>{user.purity}</td>
            <td>{user.carat}</td>
            <td>{user.demurrageCharge}</td>
            <td>{user.nextOfKin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
