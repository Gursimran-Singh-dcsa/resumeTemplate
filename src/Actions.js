import React from 'react';

const Actions = () => {
  const saveall = () => {
    const addmore = document.getElementsByClassName('addmore');
    Array.from(addmore).forEach(element => {
      // console.log(element)
      element.innerHTML = ''
    });
  }

  return (
    <div className="actions">
      <button onClick={saveall}>Save</button>
    </div>
  )
}
export default Actions;