import { supabase } from "../client";

export const getCourses = async () => {
    try {
        const { error, data } = await supabase.from("course").select("*, course_category(name)");
        if (error) throw error;
        const newData = data.map(item=>({value:item.id, label:item.name}))
        return newData;
    } catch (error) {
        return {
            status:500,
            message:error
        }
    }
};

export const getTypeStudents = async () => {
    try {
        const { error, data } = await supabase.from("type_study").select("*");
        if (error) throw error;
        const newData = data.map(item=>({value:item.id, label:item.name}))
        return newData;
    } catch (error) {
        return {
            status:500,
            message:error
        }
    }
};

export const getNiveles = async () => {
    try {
        const { error, data } = await supabase.from("nivel").select("*");
        console.log(data, 'niveles')
        if (error) throw error;
        const newData = data.map(item=>({value:item.id, label:item.name}))
        return newData;
    } catch (error) {
        return {
            status:500,
            message:error
        }
    }
};


export const getAds = async () => {
    try {
        const { error, data } = await supabase.from("ads").select("*");
        console.log(data, 'niveles')
        if (error) throw error;
        const newData = data.map(item=>({value:item.id, label:item.name}))
        return newData;
    } catch (error) {
        return {
            status:500,
            message:error
        }
    }
};


