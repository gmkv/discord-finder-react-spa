import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`mr-1 alert alert-${alert.type}`}>
        <i
          className='fas fa-info-circle'
          style={{ display: 'inline-block', marginRight: '0.3rem' }}
        />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
