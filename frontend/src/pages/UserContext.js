import React from 'react';

// set the defaults
const UserContext = React.createContext({
    currentPrice: 500,
    setCurrentPrice: () => {}
  });
  
export default UserContext;
