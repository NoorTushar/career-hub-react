import PropTypes from "prop-types";

const CommonSectionHeading = ({ title, description }) => {
   return (
      <div className="my-20">
         <h2 className="text-4xl font-semibold text-center mb-4">{title}</h2>
         <p className="text-center">{description}</p>
      </div>
   );
};
CommonSectionHeading.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
};

export default CommonSectionHeading;
