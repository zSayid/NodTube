import React, { createContext, useContext, useState } from "react";

const CacheContext = createContext();

export const CacheProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const getCache = (key) => cache[key];

  const setCacheValue = (key, value) => {
    setCache((prev) => ({
      ...prev,
      [key]: {
        value,
        timestamp: Date.now()
      }
    }));
  };

  const clearCache = () => setCache({});

  return (
    <CacheContext.Provider value={{ getCache, setCacheValue, clearCache }}>
      {children}
    </CacheContext.Provider>
  );
};

export const useCache = () => useContext(CacheContext);
