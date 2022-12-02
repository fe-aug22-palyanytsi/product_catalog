import React, { useState } from 'react';
import { SelectOptions } from '../../../types/SelectOptions';

type Props = {
  options: SelectOptions;
  defaultValue: string;
  selectLable: string;
};

export const CustomSelect: React.FC<Props> = ({
  defaultValue,
  options,
  selectLable,
}) => {
  const [sortingType, setSortingType] = useState('newest');

  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingType(event.target.value);
  };

  return (
    <label>
      <span style={{ display: 'block' }}>{selectLable}</span>
      <select
        data-cy="userSelect"
        className="select container"
        id="select"
        onChange={handleOnSelect}
        value={sortingType}
      >
        <option value="0" disabled>
          {defaultValue}
        </option>

        {options.map(({ value, label }) => (
          <option value={value} key={value}>{label}</option>
        ))}
      </select>
    </label>
  );
};
