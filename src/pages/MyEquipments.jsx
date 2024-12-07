import { useLoaderData } from "react-router-dom";
import Card from "../components/MyEquipments/Card";
import { useState } from "react";

const MyEquipments = () => {
  const data = useLoaderData();
  console.log(data);
  const [equipmentData, setEquipmentData] = useState(data);

  const filteredDataHandler = (id) => {
    const remainingData = data.filter((equipment) => equipment._id !== id);
    setEquipmentData(remainingData);
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {equipmentData.map((equipment, idx) => (
            <Card
              key={idx}
              equipment={equipment}
              filteredDataHandler={filteredDataHandler}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyEquipments;
