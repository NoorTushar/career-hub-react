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

   const [dataLength, setDataLength] = useState(4);

   const handleShowAll = () => {
      setDataLength(jobs.length);
   };

   const jobContainer = jobs.slice(0, dataLength).map((eachJob) => {
      return <FeaturedJob featuredJob={eachJob} key={eachJob.id}></FeaturedJob>;
   });

   return (
      <>
         <CommonSectionHeading
            title={`Featured Jobs: ${jobs.length}`}
            description="Explore thousands of job opportunities with all the information you need. Its your future"
         ></CommonSectionHeading>

         <div className="grid md:grid-cols-2 gap-6">{jobContainer}</div>

         <div
            className={`text-center mt-8 ${
               dataLength === jobs.length && "hidden"
            }`}
         >
            <button
               onClick={handleShowAll}
               className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
            >
               See All Jobs
            </button>
         </div>
      </>
   );
};

export default FeaturedJobs;
