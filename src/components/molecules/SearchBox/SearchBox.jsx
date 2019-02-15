import React from 'react';

import { Button, InputText } from '../../atoms';

const SearchBox = ({ searchText, onChange, onSearch }) => (
  <div>
    <InputText value={searchText} onChange={onChange} />
    <Button text="Buscar" onClick={onSearch} />
  </div>
);

export default SearchBox;
