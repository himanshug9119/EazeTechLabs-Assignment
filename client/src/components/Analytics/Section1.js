import React from 'react'
import data from './data1'
import Section1Component from './Section1Component'
const Section1 = () => {
  return (
    <div className='flex flex-row flex-wrap mt-4 gap-6 '>
      {data.map((item) => (
        <Section1Component
          key={item.id}
          title={item.title}
          desc={item.desc}
          value={item.value}
          gain={item.gain}
          gainValue={item.gainValue}
          gainValuePercentage={item.gainValuePercentage}
          value2={item.value2}
          value2Type={item.value2Type}
        />
      ))}
    </div>
  );
}

export default Section1
