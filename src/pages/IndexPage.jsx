import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PizzaCard from "../components/PizzaCard";
import { TailSpin } from "react-loader-spinner";

function IndexPage() {
  const [pizzaList, setPizzaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPizzaList = async () => {
      try {
        const response = (
          await axios.get(
            "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
          )
        ).data;
        setPizzaList(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPizzaList();
  }, []);
  if (loading) {
    return (
      <div className="absolute w-full h-screen flex justify-center items-center">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="w-full max-w-6xl mt-20 mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {pizzaList.length > 0 &&
        pizzaList.map((pizza) => {
          return <PizzaCard pizza={pizza} key={pizza.id} />;
        })}
    </div>
  );
}

export default IndexPage;
