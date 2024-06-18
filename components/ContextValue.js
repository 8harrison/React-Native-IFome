import { createContext, useState } from 'react';

export const ValueContext = createContext();

export default function ValueProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ValueContext.Provider value={{ cart, setCart }}>
      {children}
    </ValueContext.Provider>
  );
}
