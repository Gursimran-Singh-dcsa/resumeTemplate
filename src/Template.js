import React from 'react';

import Basic from './Basic';
import Modular from  './Modular';
import Personalprofile from './Personalprofile';

const Template = () => {
  return(
    <div className='template' id="template">
      <Basic />
      <Modular />
      <Personalprofile />
    </div>
  )
}

export default Template;