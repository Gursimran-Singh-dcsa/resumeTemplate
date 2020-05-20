import React, {useState} from 'react';

const Repeatable = (props) => {
  const [item, setItem] = useState('')
  const handleAddMore = () => {
    props.onChange({...props.info, addMore: !props.info.addMore})
  }

  const addInput = (e) => {
    setItem(e.target.value)
  }

  const savedata = () => {
    props.onChange(prevState => {return {...prevState, value: [...prevState.value, item], addMore: false}})
  }

  return (
    <div className="covering">
      <div className="fieldheading">{props.info.name}</div>
      <ul>
      {props.info.value.map((Element, index) => {
        return(
          <li className="listitem" key={index}>{Element}</li>
        )
      })}
      {props.info.addMore ? <div><textarea className="textarea" style={{border: `1px solid black`, width: `100%`}} onChange={addInput} /><br/><button onClick={savedata}>save</button></div> : ''}
      </ul>
      {!props.info.addMore ? <div><span className="addmore" onClick={handleAddMore}>+Addmore? </span></div> : ''}
    </div>
  )
}

export default Repeatable