import React, {useState} from 'react';
import metaData from './metaData';

const Basic = () => {
const [headerName, setHeaderName] = useState('');
const [fullName, setFullName] = useState('');
const [phone, setPhone] = useState('');
const [email, setemail] = useState('');
  return(
    <div className="basic">
      <div className="nameHeader">
        <input type="text" name='headerName' value={headerName} placeholder={metaData.headerNamePlaceholder} onChange={(e) => setHeaderName(e.target.value)} onFocus={e => e.target.classList.add('noBorder')} />
      </div>
      <div className="basicInfo">
        <input type="text" value={fullName} placeholder={metaData.nameSpanPlaceholder} onChange={(e) => setFullName(e.target.value)} />
        <input type="text" value={phone} placeholder={metaData.phoneSpanPlaceholder} onChange={(e) => setPhone(e.target.value)} />
        <input type="email" value={email} placeholder={metaData.emailSpanPlaceholder} onChange={(e) => setemail(e.target.value)} />
      </div>
    </div>
  )
}

export default Basic;