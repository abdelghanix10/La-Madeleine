"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface NavbarVisibilityContextType {
  /** True while the navbar is slid out of view (scrolling down). */
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
}

const NavbarVisibilityContext =
  createContext<NavbarVisibilityContextType | null>(null);

export function NavbarVisibilityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [hidden, setHiddenState] = useState(false);
  const setHidden = useCallback((value: boolean) => {
    setHiddenState(value);
  }, []);
  const value = useMemo(() => ({ hidden, setHidden }), [hidden, setHidden]);
  return (
    <NavbarVisibilityContext.Provider value={value}>
      {children}
    </NavbarVisibilityContext.Provider>
  );
}

export function useNavbarVisibility() {
  const context = useContext(NavbarVisibilityContext);
  if (!context) {
    throw new Error(
      "useNavbarVisibility must be used within a NavbarVisibilityProvider",
    );
  }
  return context;
}
