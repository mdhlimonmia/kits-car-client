import { useEffect, useState } from "react";
import AllCarCard from "./AllCarCard";
import Loader from "../../Shared/Loader/Loader";

const AllCar = () => {
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(true);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://kits-car-server.vercel.app/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            });
    }, [])
    if(loading){
        return <Loader></Loader>
    }
    let content;
    if(!showAll){
        content = cars.map(car => <AllCarCard
            key={car._id}
            car ={car}
            ></AllCarCard>)
    }
    else{
        content = cars.slice(0,20).map(car => <AllCarCard
            key={car._id}
            car ={car}
            ></AllCarCard>)
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    content
                }
            </div>
            <div className="flex items-center justify-end">
                {showAll && <button onClick={()=> setShowAll(false)} className="btn btn-warning">Show More</button> }
            </div>
        </div>
    );
};

export default AllCar;