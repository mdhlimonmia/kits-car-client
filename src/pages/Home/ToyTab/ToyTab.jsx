import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllCarCard from "../../AllCar/AllCarCard";

const ToyTab = () => {
  const [cars, setCars] = useState([]);
  const [categoryName, setCategoryName] = useState("Regular Car");

  useEffect(() => {
    fetch(`https://kits-car-server.vercel.app/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [categoryName]);

  return (
    <div>
      <div className="flex items-center justify-center text-3xl p-5 font-bold"><h2>Car Categories</h2></div>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategoryName("Regular Car")}>Regular Car</Tab>
          <Tab onClick={() => setCategoryName("Mini Police Car")}>
            Mini Police Car
          </Tab>
          <Tab onClick={() => setCategoryName("Sports Car")}>Sports Car</Tab>
          <Tab onClick={() => setCategoryName("Mini Fire Truck")}>
            Mini Fire Truck
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.slice(0, 3).map((car) => (
              <AllCarCard key={car._id} car={car}></AllCarCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.slice(4, 7).map((car) => (
              <AllCarCard key={car._id} car={car}></AllCarCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.slice(4, 7).map((car) => (
              <AllCarCard key={car._id} car={car}></AllCarCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.slice(4, 7).map((car) => (
              <AllCarCard key={car._id} car={car}></AllCarCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyTab;
