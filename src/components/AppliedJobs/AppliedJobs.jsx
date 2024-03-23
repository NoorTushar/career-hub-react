import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import { useState } from "react";

const AppliedJobs = () => {
   const jobs = useLoaderData();
   const jobsFromStorage = JSON.parse(localStorage.getItem("jobs"));

   const appliedJobs = jobs.filter((eachJob) => {
      return jobsFromStorage.includes(eachJob.id);
   });
   // job.remote_or_onsite
   const [filteredJobs, SetFilteredJobs] = useState(appliedJobs);
   const [filterText, setFilterText] = useState("All");

   const handleFilter = (filterText) => {
      console.log(filterText);
      if (filterText === "all") {
         SetFilteredJobs(appliedJobs);
         setFilterText("All");
      } else if (filterText === "Onsite") {
         const result = appliedJobs.filter((eachJob) => {
            return eachJob.remote_or_onsite === "Onsite";
         });
         SetFilteredJobs(result);
         setFilterText("Onsite");
      } else if (filterText === "Remote") {
         const result = appliedJobs.filter((eachJob) => {
            return eachJob.remote_or_onsite === "Remote";
         });
         SetFilteredJobs(result);
         setFilterText("Remote");
      }
   };
   console.log(filteredJobs);
   return (
      <div>
         <h2 className="mt-[60px] font-bold text-center text-4xl">
            Jobs Applied {appliedJobs.length}
         </h2>
         <div>
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn m-1">
                  Filter: {filterText}
               </div>
               <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 *:cursor-pointer *:p-2"
               >
                  <li
                     onClick={() => {
                        handleFilter(`all`);
                     }}
                  >
                     All
                  </li>
                  <li
                     onClick={() => {
                        handleFilter(`Onsite`);
                     }}
                  >
                     Onsite
                  </li>
                  <li
                     onClick={() => {
                        handleFilter(`Remote`);
                     }}
                  >
                     Remote
                  </li>
               </ul>
            </div>
         </div>
         <div className="space-y-6 my-[60px]">
            {filteredJobs.map((eachJob) => {
               return (
                  <AppliedJob eachJob={eachJob} key={eachJob.id}></AppliedJob>
               );
            })}
         </div>
      </div>
   );
};

export default AppliedJobs;
