import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { getUser, signIn as sendSignInRequest } from '../api/auth';

import * as Realm from "realm-web";

const app = new Realm.App({ id: "animationstudioapp-hxbnj" });

function AuthProvider(props) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const result = await getUser();
      if (result.isOk) {
        setUser(result.data);
      }

      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(async (email, password) => {
    const result = await sendSignInRequest(email, password);
    if (result.isOk) {
      setUser(result.data);
    }

    return result;
  }, []);

  const signOut = useCallback(async () => {
    await app.currentUser.logOut()
    setUser()
    
  }, []);


  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }} {...props} />
  );
}

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }
