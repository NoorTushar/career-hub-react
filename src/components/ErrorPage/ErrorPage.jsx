import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div>
         <h3>Error Page Not Found</h3>
         <Link to={`/`}>
            <button className="btn btn-secondary">Home Page</button>
         </Link>
      </div>
   );
};

export default ErrorPage;
