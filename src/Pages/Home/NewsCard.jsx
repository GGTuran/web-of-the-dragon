/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const { title ,thumbnail_url, details, _id  } = news;
    return (
        <div className="card mb-16 bg-base-100 shadow-xl">
        <figure><img src={thumbnail_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {
            details.length > 150 
            ? <p>{details.slice(0,150)} <Link to={`/news/${_id}`} className="font-bold text-blue-600">Read more....</Link>     </p>
            : <p>{details}</p>
          }
          
        </div>
      </div>
    );
};

export default NewsCard;