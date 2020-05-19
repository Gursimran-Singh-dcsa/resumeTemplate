import React from 'react';

import metaData from './metaData.json'

const Header = () => {
  return (
  <header className='siteHeader'>{metaData.headerText}</header>
  )
}

export default Header;