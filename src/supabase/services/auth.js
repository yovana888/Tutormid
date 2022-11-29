import {supabase} from '../client'


export const registerService = async (data) => {
   try {
    const response = await supabase.auth.signUp({
        email:data.email, 
        password:data.password,
        options: {
            data: {
              rol:data.rol
            }
        }
    });
    return response;
   } catch (error) {
    return error;
   }
}

export const registerGoogleService = async () => {
    try {
     const response = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
     return response;
    } catch (error) {
     return error;
    }
 }
 


export const login = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
        email, 
        password,
    });
    return response;
}