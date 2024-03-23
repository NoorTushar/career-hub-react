import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign, FaSuitcase, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const JobDetails = () => {
   // getting data from fetching in loader
   const jobs = useLoaderData();
   const { id } = useParams();

   const job = jobs.find((job) => job.id === Number(id));
   //    console.log(job);

   const {
      job_description,
      job_responsibility,
      educational_requirements,
      experiences,
      salary,
      job_title,
      contact_information,
   } = job;
   const [savedJobs, setSavedJobs] = useState([]);

   const getItemFromStorage = (name) => {
      const itemFromLocalStorage = JSON.parse(localStorage.getItem(name));
      return itemFromLocalStorage;
   };

   const setItemToStorage = (name, value) => {
      const setToLocalStorage = localStorage.setItem(
         name,
         JSON.stringify(value)
      );

      return setToLocalStorage;
   };

   const saveToStorage = (jobId) => {
      const storedJobs = getItemFromStorage("jobs");

      if (storedJobs) {
         const isPresent = storedJobs.find((eachJob) => eachJob === jobId);
         if (isPresent) {
            alert("Item Already Added");
         } else {
            storedJobs.push(jobId);
            setSavedJobs(storedJobs);
            setItemToStorage("jobs", storedJobs);
         }
      } else {
         localStorage.setItem("jobs", JSON.stringify([jobId]));
      }
   };

   const { address, email, phone } = contact_information;
   return (
      <div>
         <h2 className="text-3xl text-center mb-6">Job Details for Id: {id}</h2>

         <div className="py-[120px] lg:flex lg:gap-8 space-y-8 lg:space-y-0">
            <div className="space-y-6 lg:w-4/5">
               <p>
                  <span className="font-bold">Job Description: </span>
                  {job_description}
               </p>
               <p>
                  <span className="font-bold">Job Responsibility: </span>
                  {job_responsibility}
               </p>
               <p>
                  <span className="font-bold">Job Responsibility: </span> <br />
                  {educational_requirements}
               </p>
               <p>
                  <span className="font-bold">Experiences: </span> <br />
                  {experiences}
               </p>
            </div>

            <div>
               <div className="bg-[#F4F2FF] p-7 rounded-lg">
                  <div>
                     <h4 className="text-lg font-bold">Job Details</h4>
                     <div className="divider"></div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-2">
                           <FaDollarSign className="flex-shrink-0 text-primary"></FaDollarSign>
                           <p>
                              <span className="font-bold">Salary:</span>{" "}
                              {salary} (Per Month)
                           </p>
                        </div>
                        <div className="flex items-center gap-2">
                           <FaSuitcase className="flex-shrink-0 text-primary"></FaSuitcase>
                           <p>
                              <span className="font-bold">Job Title: </span>
                              {job_title}
                           </p>
                        </div>
                     </div>
                  </div>

                  <div>
                     <h4 className="text-lg font-bold mt-8">
                        Contact Information
                     </h4>
                     <div className="divider"></div>
                     <div className=" space-y-4">
                        <div className="flex items-center gap-2">
                           <FaPhoneAlt className="flex-shrink-0 text-primary"></FaPhoneAlt>
                           <p>
                              <span className="font-bold">Phone:</span> {phone}
                           </p>
                        </div>
                        <div className="flex items-center gap-2">
                           <MdEmail className="flex-shrink-0 text-primary"></MdEmail>
                           <p>
                              <span className="font-bold">Email:</span> {email}
                           </p>
                        </div>
                        <div className="flex items-center gap-2">
                           <FaLocationDot className="flex-shrink-0 text-primary"></FaLocationDot>
                           <p>
                              <span className="font-bold">Address:</span>{" "}
                              {address}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-6">
                  <button
                     onClick={() => {
                        saveToStorage(job.id);
                     }}
                     className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full"
                  >
                     Apply Now
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobDetails;
