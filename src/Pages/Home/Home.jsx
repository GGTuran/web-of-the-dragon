import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightsideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <h2 className="text-3xl text-center">Home Sweet Home</h2> 
           <div className= " grid grd-cols-1 md:grid-cols-4 gap-7">
            <div >
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-23">
                <h2 className="text-4xl">Newssss</h2>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;