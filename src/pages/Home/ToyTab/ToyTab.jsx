import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllCarCard from "../../AllCar/AllCarCard";

const ToyTab = () => {
  const [cars, setCars] = useState([]);
  const [categoryName, setCategoryName] = useState('Regular Car');

  useEffect(() => {
    fetch(`https://kits-car-server.vercel.app/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [categoryName]);


  return (
    <Tabs>
      <TabList>
       <div onClick={()=>setCategoryName("Regular Car")}>
       <Tab>Regular Car</Tab>
       </div>
       <div onClick={()=>setCategoryName("Mini Police Car")}>
       <Tab>Mini Police Car</Tab>
       </div>
      
      </TabList>

      <TabPanel>
        <div className="grid grid-cols-3 gap-10">
          {cars.slice(0, 3).map((car) => (
            <AllCarCard key={car._id} car={car}></AllCarCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-3 gap-10">
          {cars.slice(4, 7).map((car) => (
            <AllCarCard key={car._id} car={car}></AllCarCard>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ToyTab;
