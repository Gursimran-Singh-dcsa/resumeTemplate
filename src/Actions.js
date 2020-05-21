import React from 'react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

const Actions = () => {
  const saveall = () => {
    const addmore = document.getElementsByClassName('addmore');
    Array.from(addmore).forEach(element => {
      element.innerHTML = ''
    });
    const input = document.getElementById('template');
    const data =  input.getBoundingClientRect();
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image', 1.0);
        window.open(imgData)
        const pdf = new jsPDF('', '', [canvas.width, canvas.height]);
        pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
        pdf.save("Resume.pdf");
    });
  }

  return (
    <div className="actions">
      <button onClick={saveall}>Save</button>
    </div>
  )
}
export default Actions;