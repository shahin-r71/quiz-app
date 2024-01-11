import { useState, useEffect, useRef } from "react";


export default function Questions() {
  const [data, setData] = useState([]);

  let isFetched= useRef(false)
  // console.log(isFetching)
  useEffect(() => {
    if (!isFetched.current) {
      fetchData();
      isFetched.current=true;
      
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=30&difficulty=easy&type=multiple"
      );
      const data = await response.json();
      console.log(data.results);
      setData(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  // let options=[];
  return(
    <>
      <main>
        {data.length > 0 ? (
          data.map((item, index) => {
            const options = [...item.incorrect_answers, item.correct_answer]; // Create a new array for each question
            console.log(options);
            const optElem = options.map((op, index) => <button className="optBtn" key={index}>{op}</button>); // Add keys
            return (
              <section className="question" key={index}>
                <h3>{item.question}</h3>
                <div className="optnContainer">{optElem}</div>
              </section>
            );
          })
        ) : (
          <h1>Questions are on the way!</h1>
        )}
      </main>
    </>
  );
}
