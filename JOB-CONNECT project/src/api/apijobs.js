import supabaseClient from "@/utils/supabase";

export async function getJobs(token, {}) {
    const supabase = await supabaseClient(token);

    let query = supabase.from("job").select("*")

    const { data, error } = await query

    if (error) {
        console.error("Error fetching Jobs:", error);
        return null;
    }

    return data;
}