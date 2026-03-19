import { createContext, useContext, useState, type ReactNode } from "react";

const MobileMenuContext = createContext({ menuOpen: false, setMenuOpen: (_: boolean) => {} });

export const useMobileMenu = () => useContext(MobileMenuContext);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
