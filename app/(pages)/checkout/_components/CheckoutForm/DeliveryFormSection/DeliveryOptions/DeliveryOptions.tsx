import { ElementType } from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { PiHouseLineLight } from 'react-icons/pi';

import styles from './DeliveryOptions.module.scss';

export default function DeliveryOptions() {
  return (
    <fieldset className={styles.delivery_options}>
      <Option
        label="Ship"
        value="ship"
        icon={CiDeliveryTruck}
        isDefault={true}
      />
      <Option label="Pick up" value="pickUp" icon={PiHouseLineLight} />
    </fieldset>
  );
}

function Option({
  label,
  value,
  isDefault,
  icon: Icon,
}: {
  label: string;
  value: string;
  isDefault?: boolean;
  icon?: ElementType;
}) {
  return (
    <div className={styles.opt}>
      <input
        type="radio"
        id={value}
        value={value}
        name="delivery_opt"
        defaultChecked={isDefault}
      />
      <label htmlFor={value}>{label}</label>
      {Icon && <Icon className={styles.icon} />}
    </div>
  );
}
