import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div>
      <button className="btn btn-ghost">Breaking News</button>
      <Marquee  speed={150}>
       <Link className="mr-5" to='/'> I can be a React component, multiple React components, or just some text.</Link>
       <Link className="mr-5" to='/'> I can be a React component, multiple React components, or just some text.</Link>
       <Link className="mr-5" to='/'> I can be a React component, multiple React components, or just some text.</Link>
      
     
      </Marquee>
    </div>
  );
};

export default BreakingNews;
