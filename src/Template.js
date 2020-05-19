import React from 'react';

import Basic from './Basic';
import Modular from  './Modular.js';

const Template = () => {
  return(
    <div className='template'>
      <Basic />
      <Modular />
      {/* <Allinfo /> */}
    </div>
  )
}

export default Template;