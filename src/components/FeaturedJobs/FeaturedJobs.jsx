import { useEffect, useState } from "react";
import CommonSectionHeading from "../CommonSectionHeading/CommonSectionHeading";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      fetch("jobs.json")
         .then((res) => res.json())
         .then((data) => setJobs(data));
   }, []);

   const jobContainer = jobs.map((eachJob) => {
      return <FeaturedJob featuredJob={eachJob} key={eachJob.id}></FeaturedJob>;
   });

   return (
      <>
         <CommonSectionHeading
            title={`Featured Jobs: ${jobs.length}`}
            description="Explore thousands of job opportunities with all the information you need. Its your future"
         ></CommonSectionHeading>

         <div className="grid md:grid-cols-2 gap-6">{jobContainer}</div>
      </>
   );
};

export default FeaturedJobs;
