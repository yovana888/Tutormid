import React, { useState, useEffect } from "react";
import {
  getUserData,
  setProfileByGoogleService,
} from "../supabase/services/user";
import { toast } from "react-toastify";
import { supabase } from "../supabase/client";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const rolLocal = localStorage.getItem("googleRol");

  useEffect(() => {
    if (rolLocal) {
      registerProfileGoogle();
    } else {
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    try {
      const { error, data } = await supabase.auth.getSession();
      if (error) throw error;
      if (data.session) {
        const userProfile = await getUserData(data.session.user.id);
        if (userProfile.status === 500) throw userProfile.message;
        if (userProfile.length > 0) {
          setUser(userProfile[0]);
          setIsLogin(true);
        } else {
          await logout();
          throw "Usted no se encuentra registrado";
        }
      }
    } catch (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const registerProfileGoogle = async () => {
    const res = await setProfileByGoogleService(rolLocal);
    if (res) {
      localStorage.removeItem("googleRol");
      fetchUser();
    }
    if (res.status === 500) {
      toast.error(res.message.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const isLoginFunction = async () => {
    const { error, data } = await supabase.auth.getSession();
    return data ? true : false ;
  }

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setIsLogin(false);
    } catch (error) {
      toast.error(error.toString() || "Ocurrio un error al cerrar sesion", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  {
    /** isLogin, lo necesitameros para las rutas
       setIsLogin, es paar cuando el usuario se loguea si es exitoso, entoces cambiamos false por true
       user, es toda la data del usuario
       setUser, es por ejemplo cuando yo actualice mi profile tiene que cambiar esta variable para todos
       Logout es la funcion que me permite cerar sesion
    **/
  }

  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, user, setUser, logout, fetchUser, isLoginFunction }}
    >
      {children}
    </AuthContext.Provider>
  );
};
