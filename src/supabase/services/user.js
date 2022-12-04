import {supabase} from '../client';
const url_photo_default = "https://eheiqcszbiikeipnnzhf.supabase.co/storage/v1/object/sign/storage/photo_default.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9yYWdlL3Bob3RvX2RlZmF1bHQucG5nIiwiaWF0IjoxNjcwMDg3MzY1LCJleHAiOjE5ODU0NDczNjV9.1BtaoUSDVNz_XMAC_UdwD8D3PkiVkPJ3iJJfzbevt8w";

export const setProfileByEmailService = async (data, rol, fullname) => {
    console.log(data,'inutil')
    try {
     const response = await supabase.from('users_rol')
     .insert({
        uid_auth:data.id,
        rol:rol,
        full_name:fullname,
        photo_url:url_photo_default,
        phone:"",
        email:data.email,
        about_me:"",
        studies:[],
        likes:[]
    })
     return response;
    } catch (error) {
     return error;
    }
 }

 export const setProfileByGoogleService = async (id, rol) => {
    try {
     const response = await supabase.from(rol)
     .insert({})
     return response;
    } catch (error) {
     return error;
    }
 }