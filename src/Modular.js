import React, {useState} from 'react';
import Simple from './modules/Simple';
import Tabular from './modules/Tabular';
import Repeatable from './modules/Repeatable';

const Modular = () => {
  const [objective, setObjective] = useState({
    name: "Objecetive",
    value: ""
  });

  const [academic, setAcedemic] = useState({
    name: "Academic Qualifications",
    type: "Tabular",
    headings: ['Course', 'Board / Institution / University', 'Year of passing', 'Percentage'],
    addMore: false,
    value: [['MCA', 'PU', '2020', '75'], ['B.Sc', 'KUK', '2017', '70']]
  })

  const [experince, setExperice] = useState({
    name: "Work Experince",
    type: "repeatable",
    addMore: false,
    value: ["1.3 years work at agilemedia lab"]
  })

  const [strength, setStrength] = useState({
    name: "Strength",
    type: "repeatable",
    addMore: false,
    value: ["my strength"]
  })

  const [skills, setSkills] = useState({
    name: "Skills",
    type: "repeatable",
    addMore: false,
    value: ["my skills"]
  })

  return (
    <div className="modular">
      <Simple info={objective} onChange={setObjective} />
      <Tabular info={academic} onChange={setAcedemic} />
      <Repeatable info={experince} onChange={setExperice} />
      <Repeatable info={strength} onChange={setStrength} />
      <Repeatable info={skills} onChange={setSkills} />
    </div>
  )
}

export default Modular;