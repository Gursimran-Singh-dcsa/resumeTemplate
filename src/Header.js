import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import metaData from './metaData.json'

const Header = () => {
  return (
  <header className='siteHeader'>{metaData.headerText}</header>
  )
}

export default Header;