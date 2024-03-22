import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign, FaSuitcase, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const JobDetails = () => {
   // getting data from fetching in loader
   const jobs = useLoaderData();
   const { id } = useParams();

   const job = jobs.find((job) => job.id === Number(id));
   console.log(job);

   const {
      job_description,
      job_responsibility,
      educational_requirements,
      experiences,
      salary,
      job_title,
      contact_information,
   } = job;

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
                           <FaDollarSign className="flex-shrink-0"></FaDollarSign>
                           <p>Salary: {salary} (Per Month)</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <FaSuitcase className="flex-shrink-0"></FaSuitcase>
                           <p>Job Title: {job_title}</p>
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
                           <FaPhoneAlt className="flex-shrink-0"></FaPhoneAlt>
                           <p>Phone: {phone}</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <MdEmail className="flex-shrink-0"></MdEmail>
                           <p>Email: {email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <FaLocationDot className="flex-shrink-0"></FaLocationDot>
                           <p>Address: {address}</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-6">
                  <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full">
                     View Details
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobDetails;