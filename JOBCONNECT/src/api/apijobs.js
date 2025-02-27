import supabaseClient from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery }) {
    const supabase = await supabaseClient(token);

    let query = supabase.from("job").select("*, company:companies(name,logo_url),saved: saved_jobs(id)");

    if (location) {
        query = query.eq("location", location);
    }

    if (company_id) {
        query = query.eq("company_id", company_id);
    }

    if (searchQuery) {
        query = query.ilike("title", '%${searchQuery}%');
    }

    const { data, error } = await query

    if (error) {
        console.error("Error fetching Jobs:", error);
        return null;
    }

    return data;
}

export async function getSingleJob(token,{ job_id }) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase.from("jobs").select("*, company:companies(name,logo_url), applications: applications(*)")
    .eq("id", job_id);

    if (error) {
        console.error("Error fetching Company", error);
        return null;
    }

    return data;
}