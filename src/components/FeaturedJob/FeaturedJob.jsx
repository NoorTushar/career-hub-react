import PropTypes from "prop-types";

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
            <p>{company_name}</p>
            <div className="flex gap-4 text-primary">
               <button className="border border-primary px-5 py-2 font-bold rounded-lg">
                  {remote_or_onsite}
               </button>
               <button className="border border-primary px-5 py-2 font-bold rounded-lg">
                  {job_type}
               </button>
            </div>
            <div className="card-actions">
               <button className="btn btn-primary">View Details</button>
            </div>
         </div>
      </div>
   );
};

FeaturedJob.propTypes = {
   featuredJob: PropTypes.object.isRequired,
};

export default FeaturedJob;
