import React from "react";
import Section2Component from "./Section2Component";
import data from "./data2.json"; // Assuming your JSON file is named 'data2.json'

const Section2 = () => {
  return (
    <div className="flex flex-row flex-wrap mt-4 gap-2.5 ">
      {data.map((item) => (
        <Section2Component
          key={item.id}
          title={item.title}
          data1Type={item.data1Type}
          data1Value={item.data1Value}
          data2Type={item.data2Type}
          data2Value={item.data2Value}
          data3Type={item.data3Type}
          data3Value={item.data3Value}
        />
      ))}
    </div>
  );
};

export default Section2;
