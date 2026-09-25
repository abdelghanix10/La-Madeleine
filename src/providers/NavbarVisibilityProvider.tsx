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
  /** True when scrollY is at or near 0 — consumers must snap (no transition). */
  atTop: boolean;
  setAtTop: (atTop: boolean) => void;
  /** The measured pixel height of the main navbar header. */
  navHeight: number;
  setNavHeight: (h: number) => void;
}

const NavbarVisibilityContext =
  createContext<NavbarVisibilityContextType | null>(null);

export function NavbarVisibilityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [hidden, setHiddenState] = useState(false);
  const [atTop, setAtTopState] = useState(true);
  const [navHeight, setNavHeightState] = useState(0);
  const setHidden = useCallback((value: boolean) => {
    setHiddenState(value);
  }, []);
  const setAtTop = useCallback((value: boolean) => {
    setAtTopState(value);
  }, []);
  const setNavHeight = useCallback((value: number) => {
    setNavHeightState(value);
  }, []);
  const value = useMemo(
    () => ({ hidden, setHidden, atTop, setAtTop, navHeight, setNavHeight }),
    [hidden, setHidden, atTop, setAtTop, navHeight, setNavHeight],
  );
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

