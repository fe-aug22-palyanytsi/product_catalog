import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { SelectOptions } from '../../../types/SelectOptions';

import './Select.scss';

type Props = {
  options: SelectOptions[];
  selectLabel: string;
  selected: string;
  handleOnSelect: (option: SingleValue<SelectOptions>) => void;
};

export const CustomSelect: React.FC<Props> = ({
  options,
  selectLabel,
  selected,
  handleOnSelect,
}) => {
  const [sorting, setSorting] = useState<SelectOptions>(options[0]);

  useEffect(() => {
    const method = options.find(item => item.value === selected) || options[0];

    setSorting(method);
  }, [selected]);

  return (
    <label className="select">
      <span className="select__label text text--secondary">{selectLabel}</span>
      <Select
        data-cy="userSelect"
        id="select"
        classNamePrefix="select"
        options={options}
        placeholder={sorting.label}
        onChange={
          (option: SingleValue<SelectOptions>) => handleOnSelect(option)
        }
        value={sorting}
        isSearchable={false}
      />
    </label>
  );
};
