import { supabase } from "../client";
import { setProfileByEmailService } from "./user";

export const registerService = async (data) => {
  try {
    const responseAuth = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (responseAuth.error) throw responseAuth.error;

    const responseRegister = await setProfileByEmailService(
      responseAuth.data.user,
      data.rol,
      data.fullname
    );

    if (responseRegister.error) throw responseRegister.error;

    return true;

  } catch (error) {
    return {
      status:500,
      message:error
    };
  }
};

export const sesionGoogleService = async () => {
  try {
    const response = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (response.error) throw response.error;
    return response;
  } catch (error) {
    return error;
  }
};

export const login = async (data) => {
  try {
    const response = await supabase.auth.signInWithPassword({
      email:data.email,
      password:data.password,
    });
    if (response.error) throw response.error;
    return response;
  } catch (error) {
    return {
       status:500,
       message:error
    };
  }
};

export const prueba = async () => {
  const data = await supabase.from("course").select("*, course_category(name)");
  console.log(data.data, "cursos");
};
