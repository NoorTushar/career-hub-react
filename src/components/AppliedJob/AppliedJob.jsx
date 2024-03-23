import { SlLocationPin } from "react-icons/sl";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppliedJob = ({ eachJob }) => {
   const {
      id,
      logo,
      job_title,
      company_name,
      remote_or_onsite,
      job_type,
      salary,
      location,
   } = eachJob;
   return (
      <div className="flex flex-col md:flex-row border p-6 rounded-lg gap-6 ">
         <div
            className="bg-[#F4F4F4] flex items-center justify-center  rounded-lg flex-shrink-0 px-6 py-14
         "
         >
            <img src={logo} alt="" />
         </div>
         <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div>
               {/* title and company name */}
               <div className="space-y-2">
                  <h3 className="text-xl font-bold">{job_title}</h3>
                  <h4 className="text-lg">{company_name}</h4>
               </div>
               {/* remote or onsite */}
               <div className="flex gap-4 text-primary mt-4">
                  <button className="border border-primary px-5 py-2 font-bold rounded-lg">
                     {remote_or_onsite}
                  </button>
                  <button className="border border-primary px-5 py-2 font-bold rounded-lg">
                     {job_type}
                  </button>
               </div>

               {/* location salary */}
               <div className="flex items-center gap-3 flex-wrap mt-4">
                  <div className="flex gap-1 items-center">
                     <SlLocationPin className="text-primary text-xl font-semibold" />
                     <p>{location}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                     <FaDollarSign className="text-primary text-xl font-semibold" />
                     <p>Salary: {salary}</p>
                  </div>
               </div>
            </div>
            {/* button */}
            <div className="mt-6">
               <Link to={`/job/${id}`}>
                  <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                     View Details
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default AppliedJob;
