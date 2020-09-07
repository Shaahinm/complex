import React, { useState, useEffect } from "react";
import axios from "axios";

const Fib = () => {
  const [seenIndex, setSeenIndex] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    console.log(values)
    setValues(values.data);
  };

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    setSeenIndex(seenIndexes.data);
  };
  const renderSeenIndexes = () => {
    return seenIndex.map(({ number }) => number).join(", ");
  };

  const renderCalculatedValues = () => {            
    const entries = [];
    for (const key in values) {
      if (values.hasOwnProperty(key)) {        
        entries.push(
          <div key={key}>
            For index {key} I calculated {values[key]}
          </div>
        );
      }
    }
    return entries;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();    
    await axios.post("/api/values", {
      index: parseInt(index),
    });

    setIndex("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          type="text"
          values={index}
          onChange={(event) => setIndex(event.target.value)}
        />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated values:</h3>
      {renderCalculatedValues()}
    </div>
  );
};
export default Fib;
