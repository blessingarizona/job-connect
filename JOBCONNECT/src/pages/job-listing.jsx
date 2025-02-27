import { getJobs } from "@/api/apijobs"
import useFetch from "@/hooks/use-fetch"
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { useUser } from "@clerk/clerk-react"
import JobCard from "@/components/job-card";


const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [company_id, setCompany_id] = useState('');
  const { isLoaded } = useUser();


  const {
    fn: fnJobs,
    data: jobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded, location,
    company_id,
    searchQuery,]);

    if(!isLoaded){
      return <BarLoader className="mb-4" width={"100%"} color="#fff" />
     }

  return (
    <div>
    <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Jobs</h1>
    {/* add filters here */ }

    {loadingJobs && (
      <BarLoader className="mb-4" width={"100%"} color="#fff" />
    )}
    {loadingJobs ===false && (
      <div>
        {jobs?.length ? (
          jobs.map((job) => {
            return <JobCard key={job.id} job={job} />
          })
        ) : (
          <div>No Jobs Found</div>
        )}
        </div>
    )}
    </div>
  )
}

export default JobListing