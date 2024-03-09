import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            {/* <h2>nothing to seee here</h2> */
            }
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;