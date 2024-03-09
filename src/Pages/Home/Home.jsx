import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    return (
        <div className="">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           <h2 className="text-3xl text-center">Home Sweet Home</h2> 
           <div className=  "md:flex justify-between  w-full text-center gap-8">
            <div >
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2">
                {
                    news.map(aNews => <NewsCard
                    key={aNews._id}
                    news={aNews}
                    ></NewsCard>)
                }
            </div>
            <div >
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;