import { useLoaderData } from "react-router-dom";
import Card from "../components/MyEquipments/Card";

const MyEquipments = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-12">
        <div className="grid gap-6 grid-cols-4">
          {data.map((equipment, idx) => (
            <Card key={idx} equipment={equipment}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyEquipments;
