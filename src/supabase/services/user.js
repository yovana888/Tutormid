import { supabase } from "../client";
const url_photo_default =
  "https://eheiqcszbiikeipnnzhf.supabase.co/storage/v1/object/sign/storage/photo_default.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9yYWdlL3Bob3RvX2RlZmF1bHQucG5nIiwiaWF0IjoxNjcwMDg3MzY1LCJleHAiOjE5ODU0NDczNjV9.1BtaoUSDVNz_XMAC_UdwD8D3PkiVkPJ3iJJfzbevt8w";

//Linea 9: verificamos que no este registrado en la tabla de usuarios_rol
export const setProfileByEmailService = async (data, rol, fullname) => {
  try {
    console.log(data, 'veamos')
    const existUser = await getUserData(data.id);
    if (existUser.length > 0) {
      return true;
    } else {
      return await supabase.from("users_rol").insert({
        uid_auth: data.id,
        rol: rol,
        full_name: fullname,
        photo_url: url_photo_default,
        phone: "",
        email: data.email,
        about_me: "",
        studies: [],
        comments:0,
        score: 0
      });
    }
  } catch (error) {
    console.log(error)
    return error;
  }
};

export const setProfileByGoogleService = async (rol) => {
  try {
    const { error, data } = await supabase.auth.getSession();
    if (error) throw error;

    if (data.session) {
      const metadata = data.session.user.user_metadata;
      const existUser = await getUserData(data.session.user.id);
      if (existUser.length > 0) {
        return true;
      } else {
        const response = await supabase.from("users_rol").insert({
          uid_auth: data.session.user.id,
          rol: rol,
          full_name: metadata.full_name,
          photo_url: metadata.picture,
          phone: "",
          email: metadata.email,
          about_me: "",
          studies: [],
          comments:0,
          score: 0
        });
        console.log(response.error)
        if (response.error) throw response.error;
        return true;
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
};

export const getUserData = async (idUser) => {
  try {
    const { data, error } = await supabase
      .from("users_rol")
      .select()
      .eq("uid_auth", idUser);
    if (error) throw error;

    return data;
  } catch (error) {
    return error;
  }
};

//a menos que haga ese update :'v hfffjfjfjfjj