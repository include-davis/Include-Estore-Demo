import { ElementType, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

import styles from './InputField.module.scss';

export default function InputField({
  label,
  name,
  type,
  list,
  icon: Icon,
  handleFieldChange,
}: {
  label: string;
  name: string;
  type: string;
  list?: string[];
  icon?: ElementType;
  handleFieldChange?: (property: string, value: string) => void;
}) {
  return (
    <div className={styles.input_field}>
      {type === 'select' ? (
        <Select
          label={label}
          name={name}
          list={list}
          handleFieldChange={handleFieldChange}
        />
      ) : (
        <Input
          label={label}
          name={name}
          type={type}
          icon={Icon}
          handleFieldChange={handleFieldChange}
        />
      )}
    </div>
  );
}

function Select({
  label,
  name,
  list,
  handleFieldChange,
}: {
  label: string;
  name: string;
  list?: string[];
  handleFieldChange?: (property: string, value: string) => void;
}) {
  const [isOptSelected, setIsOptSelected] = useState(false);
  return (
    <>
      <select
        name={name}
        id={name}
        defaultValue=""
        className={isOptSelected ? styles.valid : styles.invalid}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setIsOptSelected(true);
          handleFieldChange && handleFieldChange(name, e.currentTarget.value);
        }}
      >
        <option disabled value="">
          {label}
        </option>
        {list &&
          list.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
      {isOptSelected && <label>{label}</label>}
      <RiArrowDropDownLine className={styles.icon} />
    </>
  );
}

function Input({
  label,
  name,
  type,
  icon: Icon,
  handleFieldChange,
}: {
  label: string;
  name: string;
  type: string;
  list?: string[];
  icon?: ElementType;
  handleFieldChange?: (property: string, value: string) => void;
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={label}
        onChange={
          handleFieldChange &&
          ((e: React.FormEvent<HTMLInputElement>) =>
            handleFieldChange(name, e.currentTarget.value))
        }
      />
      <label htmlFor={name}>{label}</label>
      {Icon && <Icon className={styles.icon} />}
    </>
  );
}
