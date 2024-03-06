import InputField from '../InputField/InputField';
import Address from '../Address/Address';

import { useState } from 'react';
import { GoQuestion } from 'react-icons/go';

import styles from './ShippingInfo.module.scss';

interface ShippingInfo {
  firstName?: string;
  lastName?: string;
  country?: string;
  address?: string;
  apartment?: string;
  state?: string;
  city?: string;
  zip?: string;
  phone?: string;
}

export default function ShippingInfo() {
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({});

  const updateShippingField = (property: string, value: string) => {
    setShippingInfo({ ...shippingInfo, [property]: value });

    if (isShippingInfoInitialized()) {
      setTimeout(() => {
        console.log('Delayed for 3 seconds');
      }, 3000);
    }
  };

  const isShippingInfoInitialized = () => {
    const requiredProperties: Array<keyof ShippingInfo> = [
      'country',
      'address',
      'state',
      'city',
      'zip',
    ];

    return requiredProperties.every(
      (property) =>
        shippingInfo[property] !== undefined &&
        shippingInfo[property]?.length !== 0
    );
  };

  return (
    <div className={styles.shipping_info}>
      <InputField
        label="Country/Region"
        name="country"
        type="select"
        list={['United States']} // populate with list of valid countries
        handleFieldChange={updateShippingField}
      />
      <div className={styles.input_group}>
        <InputField
          label="First name"
          name="firstName"
          type="text"
          handleFieldChange={updateShippingField}
        />
        <InputField
          label="Last name"
          name="lastName"
          type="text"
          handleFieldChange={updateShippingField}
        />
      </div>
      <Address updateShippingField={updateShippingField} />
      <InputField
        label="Phone"
        name="phone"
        type="tel"
        icon={GoQuestion}
        handleFieldChange={updateShippingField}
      />
    </div>
  );
}
