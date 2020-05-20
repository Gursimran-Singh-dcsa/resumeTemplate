import React from 'react';

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

export default Simple;