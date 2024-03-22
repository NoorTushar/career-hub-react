import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { FaDollarSign } from "react-icons/fa";

const FeaturedJob = ({ featuredJob }) => {
   console.log(featuredJob);
   const {
      company_name,
      logo,
      job_title,
      remote_or_onsite,
      location,
      job_type,
      salary,
      job_description,
      job_responsibility,
      educational_requirements,
      experiences,
      contact_information,
   } = featuredJob;

   const { phone, email, address } = contact_information;

   return (
      <div className="card bg-base-100 shadow-xl border">
         <figure className="mt-8">
            <img src={logo} alt />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p className="mt-2">{company_name}</p>
            <div className="flex gap-4 text-primary mt-4">
               <button className="border border-primary px-5 py-2 font-bold rounded-lg">
                  {remote_or_onsite}
               </button>
               <button className="border border-primary px-5 py-2 font-bold rounded-lg">
                  {job_type}
               </button>
            </div>

            <div className="flex items-center gap-2 flex-wrap mt-4">
               <div className="flex gap-1 items-center">
                  <SlLocationPin className="text-primary text-xl font-semibold" />
                  <p>{location}</p>
               </div>
               <div className="flex gap-1 items-center">
                  <FaDollarSign className="text-primary text-xl font-semibold" />
                  <p>Salary: {salary}</p>
               </div>
            </div>

            <div className="card-actions mt-4">
               <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                  View Details
               </button>
            </div>
         </div>
      </div>
   );
};

FeaturedJob.propTypes = {
   featuredJob: PropTypes.object.isRequired,
};

export default FeaturedJob;
