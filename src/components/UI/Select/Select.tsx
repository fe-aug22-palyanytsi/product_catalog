import React from 'react';
import { SelectOptions } from '../../../types/SelectOptions';

import './Select.scss';

type Props = {
  options: SelectOptions;
  defaultValue: string;
  selectLabel: string;
  selected: string;
  handleOnSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const CustomSelect: React.FC<Props> = ({
  defaultValue,
  options,
  selectLabel,
  selected,
  handleOnSelect,
}) => {
  return (
    <label className="select">
      <span className="select__label text text--secondary">{selectLabel}</span>
      <select
        data-cy="userSelect"
        className="select__field"
        id="select"
        onChange={handleOnSelect}
        value={selected}
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
