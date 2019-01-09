import React from 'react';

const InputText = (props) => {
  const { value } = props;
  return <input type="text" value={value} />;
};

export default InputText;
