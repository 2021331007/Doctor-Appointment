import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const value = {
    // তোমার context এর ডাটা ও ফাংশন এখানে রাখো
  };

  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
