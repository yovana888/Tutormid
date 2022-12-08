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

    return responseRegister.data;

  } catch (error) {
    return error;
  }
};

export const registerGoogleService = async () => {
  try {
    const response = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (response.error) throw response.error;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const login = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response;
};

export const prueba = async () => {
  const data = await supabase.from("course").select("*, course_category(name)");
  console.log(data.data, "cursos");
};
