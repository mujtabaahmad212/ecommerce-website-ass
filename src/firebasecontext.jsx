import React, { createContext, useContext, useState } from 'react';

const FirebaseContext = createContext(null);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const [firebase, setFirebase] = useState(null);

  return (
    <FirebaseContext.Provider value={{ firebase, setFirebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};
