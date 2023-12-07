import { useState, useEffect } from "react";


export default function Questions() {
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  console.log(isFetching)
  useEffect(() => {
    if (!isFetching) {
      console.log("fetching");
      setIsFetching(true);
      setTimeout(() => {
        fetchData();
      }, 1500); // Add a delay of 500 milliseconds
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await response.json();
      // console.log(data);
      // setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <main>
        {/* {
          data.map((item)=>{

          })
        } */}
        <h1>Hi from question page</h1>
      </main>
    </>
  );
}
