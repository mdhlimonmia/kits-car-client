import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyCarCard from "./MyCarCard";


const MyCars = () => {
    const {user} = useContext(AuthContext)
    const[cars, setCars] = useState([])

    const url = `https://kits-car-server.vercel.app/mycars?seller_email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data));
    },[])
    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
                {
                    cars.map(car => <MyCarCard
                        key={car._id}
                        car ={car}
                    >
                        
                    </MyCarCard>)
                }
            </div>
        </div>
    );
};

export default MyCars;