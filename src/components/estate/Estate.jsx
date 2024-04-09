import { useEffect, useState } from "react";
import Button from "../../shareComponents/Button";
import Loader from "../../shareComponents/Loader";
import EstateCart from "./EstateCart";
function Estate() {
  // estate data calling
  const [estates, setEstates] = useState([]);
  const [loader, setLoader] = useState(true);

  // slice estate data
  const [sliceEstates, setSliceEstates] = useState(5);
  const handleSlice = () => {
    setSliceEstates(estates.length);
  };

  // data fetching
  useEffect(() => {
    fetch("/estate.json")
      .then((res) => res.json())
      .then((data) => {
        setEstates(data.estates);
        setLoader(false);
      });
  }, []);

  // loader added
  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-8">
        {estates.slice(0, `${sliceEstates}`).map((estate) => {
          const { id } = estate;
          return (
            <EstateCart key={id} estate={estate} loader={loader}></EstateCart>
          );
        })}
      </div>
      {estates.length > sliceEstates ? (
        <Button
          onClick={handleSlice}
          cls={"mt-8 flex justify-center text-center mx-auto"}
          name="All Residential"
        ></Button>
      ) : null}
    </>
  );
}

export default Estate;
