import Card from "../components/MyEquipments/Card";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyEquipments = () => {
  const { user, databaseUserInfo } = useContext(authContext);
  // console.log(databaseUserInfo._id);

  useEffect(() => {
    fetch(
      `https://sports-equipment-store-server-sable.vercel.app/equipments/user/${databaseUserInfo._id}`
    )
      .then((res) => res.json())
      .then((data) => setEquipmentData(data));
  }, [user]);

  const [equipmentData, setEquipmentData] = useState([]);

  const filteredDataHandler = (id) => {
    const remainingData = equipmentData.filter(
      (equipment) => equipment._id !== id
    );
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
