// DistrictList.js
import React from 'react';

const DistrictList = ({ districts }) => {
  return (
    <ul>
       {
      districts.map((district) => (
        <li key={district}>{district}</li>
      ))
    }
      
    </ul>
  );
};

export default DistrictList;
