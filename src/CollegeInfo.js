// CollegeInfo.js
import React from 'react';

const CollegeInfo = ({ imageUrl, description }) => {
  return (
    <section>
      <img src={imageUrl} alt="College" />
      <p>{description}</p>
    </section>
  );
};

export default CollegeInfo;
