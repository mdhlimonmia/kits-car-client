import { useEffect, useState } from "react";
import AllCarCard from "./AllCarCard";

const AllCar = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
                {
                    cars.map(car => <AllCarCard
                        key={car._id}
                        car ={car}
                        ></AllCarCard>)
                }
            </div>
        </div>
    );
};

export default AllCar;