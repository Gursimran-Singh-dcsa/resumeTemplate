import React, {useState} from 'react';


const Simple = (props) => {
  const simpleHandler = (e) => {
    e.persist();
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
    props.onChange({
      ...props.info, value:e.target.value
    })
  }
  return(
    <div className="covering">
      <div className="fieldheading">{props.info.name}</div>
      <textarea className="textarea" name={props.info.name} onChange={simpleHandler} value={props.info.value} placeholder={'please write objective here'} />
    </div>
  )
}

const GetTable = (props) => {
  return(
    <table>
      <thead>
        <tr>
          {props.headings.map(element => {
            return (<th key={element}>{element}</th>)
          })}
        </tr>
      </thead>
      <tbody>
        {props.rows.map(element => {
          return(<tr key={element}>
            {element.map(item => {
              return <td key={item}>{item}</td>
            })}
          </tr>)
        })}
      </tbody>
    </table>
  )
}

const Tabular = (props) => {
  return (
    <div>
      <div className="fieldheading">{props.info.name}</div>
      <GetTable rows={(props.info.value)} headings={props.info.headings}/>
      {/* <span>new column</span> */}
      {/* <div>new row</div> */}
    </div>
  )
}

const Modular = () => {
  const [objective, setObjective] = useState({
    name: "Objecetive",
    value: ""
  });

  const [academic, setAcedemic] = useState({
    name: "Academic Qualifications",
    type: "Tabular",
    headings: ['Course', 'Board/Institution/University', 'Year of passing', 'Percentage'],
    value: [['MCA', 'PU', '2020', '75']]
  })

  const [experince, setExperice] = useState({
    name: "Work Experince",
    type: "repeatable",
    value: []
  })

  const [strength, setStrength] = useState({
    name: "Strength",
    type: "repeatable",
    value: []
  })

  const [skills, setSkills] = useState({
    name: "Skills",
    type: "repeatable",
    value: []
  })

  return (
    <div className="modular">
      <Simple info={objective} onChange={setObjective}/>
      <Tabular info={academic} onChange={setAcedemic}/>
    </div>
  )
}

export default Modular;