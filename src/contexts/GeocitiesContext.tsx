import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface GeocitiesContextType {
  geocitiesMode: boolean;
  toggleGeocities: () => void;
}

const GeocitiesContext = createContext<GeocitiesContextType>({
  geocitiesMode: false,
  toggleGeocities: () => {},
});

export const useGeocities = () => useContext(GeocitiesContext);

export const GeocitiesProvider = ({ children }: { children: ReactNode }) => {
  const [geocitiesMode, setGeocitiesMode] = useState(false);

  useEffect(() => {
    if (geocitiesMode) {
      document.documentElement.classList.add("geocities");
    } else {
      document.documentElement.classList.remove("geocities");
    }
  }, [geocitiesMode]);

  const toggleGeocities = () => setGeocitiesMode((prev) => !prev);

  return (
    <GeocitiesContext.Provider value={{ geocitiesMode, toggleGeocities }}>
      {children}
    </GeocitiesContext.Provider>
  );
};
