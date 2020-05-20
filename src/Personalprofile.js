import React, {useState} from 'react';

const Personalprofile = () => {
  const [personalData, setPesonalData] = useState({
    'Name': '',
    'Father Name': '',
    'Date of Birth': '',
    'Gender': '',
    'Marital Stauts': '',
    'Languages Known': '',
    'Local Address': ''
  })

  const handleInput = (e) => {
    e.persist();
    setPesonalData(prevState => {return {...prevState, [e.target.name]: e.target.value}})
  }
  return(
    <div className="covering">
      <div className="fieldheading">Personal Profile</div>
      <div className="personalrender">
      {Object.keys(personalData).map((Element, index) => {
        return(
          <div className="labeldiv" key={index}>
            <div className={'label'} key={index}>{Element}</div>
            <div className={'span'}>{':'} </div>
            <div className={personalData[Element] != '' ? 'inputdiv nounderline' : 'inputdiv'}>
              <input value={personalData[Element]} name={Element} onChange={handleInput}/>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Personalprofile;