import { createContext } from 'react';

export default function UserContext() {
  createContext({});
}

export const UserContext = createContext(null);
export const UserDispatchContext = createContext(null);
