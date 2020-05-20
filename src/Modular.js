import React, {useState} from 'react';
import Simple from './modules/Simple';
import Tabular from './modules/Tabular';

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