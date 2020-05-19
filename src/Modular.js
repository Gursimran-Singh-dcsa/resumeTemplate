import React, {useState} from 'react';


const Simple = (props) => {
  const simpleHandler = (e) => {
    e.persist();
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
    props.setBioFields((prevBioField) => {
      let newdata = [];
      prevBioField.forEach((item, index) => {
        if(item.name == e.target.name) {
          console.log(item.name);
          item.value = e.target.value;
        }
        newdata.push(item);
      })
      console.log(newdata);
      return newdata;
    })
  }
  return(
    <div>
      <div className="fieldheading">{props.item.name}</div>
      <input className="textarea" name={props.item.name} onChange={simpleHandler} value={props.item.value} />
    </div>
  )
}
const Modular = () => {
  const [BioFields, setBioFields] = useState([
    {
      id: 1,
      name: "Objective",
      type: "simple",
      value: ""
    },
    {
      id: 2,
      name: "Academic Qualification",
      type: "Tabular",
      headings: ['Course', 'Board/Institution/University', 'Year of passing', 'Percentage'],
      value: []
    },
    {
      id: 3,
      name: "Work Experince",
      type: "repeatable",
      value: []
    },
    {
      id: 4,
      name: "Strength",
      type: "repeatable",
      value: []
    },
    {
      id: 5,
      name: "Skills",
      type: "repeatable",
      value: []
    }
  ])

  const Element = () => {
    return BioFields.map((item, index) => {
      if ('simple' == item.type) {
        return(
          <Simple item={item} setBioFields={setBioFields} key={item.id}/>
        )
      }
      return (<div key={item.id}></div>)
    })
  }
  return (
    <div className="modular">
      <Element key={1}/>
    </div>
  )
}

export default Modular;