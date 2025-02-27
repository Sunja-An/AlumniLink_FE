"use client";

import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
  type ReactNode,
} from "react";

type TokenProviderType = {
  children: ReactNode;
};

type TokenContextType = {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
};

const initialState: TokenContextType = {
  token: null,
  setToken: () => null,
};

const tokenContext = createContext<TokenContextType>(initialState);

function TokenProvider({ children }: TokenProviderType) {
  const [token, setToken] = useState<string | null>(null);

  return (
    <tokenContext.Provider value={{ token, setToken }}>
      {children}
    </tokenContext.Provider>
  );
}

export { tokenContext, TokenProvider };
