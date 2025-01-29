/* eslint-disable react/prop-types */
import { useUser } from "@clerk/clerk-react"
import { Card, CardHeader, CardTitle } from "./ui/card"

const JobCard = ({
    job,
    isMyJob = false,
    savedInit = false,
    onJobSaved = () => {},
}) => {
    const {user} =useUser()

  return <Card>
    <CardHeader>
        
        <CardTitle>{job.title}</CardTitle>
    </CardHeader>

    </Card>
  
}

export default JobCard