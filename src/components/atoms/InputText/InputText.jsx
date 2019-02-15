import React from 'react';

const InputText = (props) => {
  const { value, onChange } = props;
  return <input type="text" value={value} onChange={onChange} />;
};

export default InputText;
