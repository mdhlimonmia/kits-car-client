import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <div className='mx-8'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;