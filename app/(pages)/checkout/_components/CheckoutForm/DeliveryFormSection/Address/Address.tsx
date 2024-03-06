import InputField from '../InputField/InputField';

import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import styles from './Address.module.scss';

export default function Address({
  updateShippingField,
}: {
  updateShippingField: (property: string, value: string) => void;
}) {
  const [isFieldAdded, setFieldAdded] = useState(false);

  return (
    <>
      <div className={styles.address}>
        <InputField
          label="Address"
          name="address"
          type="text"
          icon={IoIosSearch}
          handleFieldChange={updateShippingField}
        />
        {!isFieldAdded && (
          <div onClick={() => setFieldAdded(true)} className={styles.add_field}>
            + Add apartment, suite, etc.
          </div>
        )}
        {isFieldAdded && (
          <InputField
            label="Apartment, suite, etc. (optional)"
            name="apartment"
            type="text"
            handleFieldChange={updateShippingField}
          />
        )}
      </div>
      <div className={styles.input_group}>
        <InputField
          label="City"
          name="city"
          type="text"
          handleFieldChange={updateShippingField}
        />
        <InputField
          label="State"
          name="state"
          type="select"
          list={['CA']}
          handleFieldChange={updateShippingField}
        />
        <InputField
          label="ZIP code"
          name="zip"
          type="text"
          handleFieldChange={updateShippingField}
        />
      </div>
    </>
  );
}
