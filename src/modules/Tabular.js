import React, {useState} from 'react';

const GetTable = (props) => {
  const [data, setdata] = useState(['', '', '', '']);
  const savedata = (e) => {
    props.onChange(prevState => {
      return {...prevState, value: [...prevState.value, data], addMore: false }
    })
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
    <div className="covering">
      <div className="fieldheading">{props.info.name}</div>
      <GetTable rows={(props.info.value)} headings={props.info.headings} addmore={props.info.addMore} onChange={props.onChange}/>
      {!props.info.addMore ? <div><span id="addmore" onClick={handleAddMore}>+Addmore? </span></div> : ''}
    </div>
  )
}
export default Tabular;