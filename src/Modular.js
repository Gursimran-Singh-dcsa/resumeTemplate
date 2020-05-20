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
  const [data, setdata] = useState(['', '', '', '']);
  const savedata = (e) => {
    props.onChange(prevState => {
      return {...prevState, value: [...prevState.value, data], addMore: false }
    })
    console.log(props.rows)
  }
  const handleInputChange = (e) => {
    e.persist();
    setdata(prevState => {
      prevState[e.target.name] = e.target.value
      return prevState;
    })
  }
  return(
    <table className="table">
      <thead>
        <tr>
          {props.headings.map(element => {
            return (<th key={element}>{element}</th>)
          })}
        </tr>
      </thead>
      <tbody id="academicdetails">
        {props.rows.map((element, index) => {
          return(<tr key={element+index}>
            {element.map(item => {
              return <td key={item}>{item}</td>
            })}
          </tr>)
        })}
        {props.addmore ? <tr className="admorerow">
          {console.log(data)}
          {data.map((element, index) => {
            return (<td key={index+element}><input type="text" name={index} onChange={handleInputChange} /></td>)
          })}
        </tr> : null}
        {props.addmore ? <tr className="save">
            <td colSpan={props.headings.length}><button onClick={savedata}>Save</button></td>
        </tr> : null}
      </tbody>
    </table>
  )
}

const Tabular = (props) => {
  const handleAddMore = () => {
    props.onChange({...props.info, addMore: !props.info.addMore})
  }
  return (
    <div>
      <div className="fieldheading">{props.info.name}</div>
      <GetTable rows={(props.info.value)} headings={props.info.headings} addmore={props.info.addMore} onChange={props.onChange}/>
      <div><span id="addmore" onClick={handleAddMore}>+Addmore? </span></div>
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
    addMore: false,
    value: [['MCA', 'PU', '2020', '75'], ['B.Sc', 'KUK', '2017', '70']]
  })

  const [experince, setExperice] = useState({
    name: "Work Experince",
    type: "repeatable",
    addMore: false,
    value: []
  })

  const [strength, setStrength] = useState({
    name: "Strength",
    type: "repeatable",
    addMore: false,
    value: []
  })

  const [skills, setSkills] = useState({
    name: "Skills",
    type: "repeatable",
    addMore: false,
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