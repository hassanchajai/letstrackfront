import React from "react";
export const ListMethods = ({
  styles,
  setSelectedMethod,
  methods,
  selectedMethod,
}) => {
  return (
    <ul className={styles.endpointsList}>
      {methods.map((item, i) => (
        <li
          key={i}
          onClick={() => setSelectedMethod(i)}
          className={
            styles.endpointsListItem + (i === selectedMethod ? " active" : "")
          }
        >
          <p className={styles.endpointsMethod}>{item.method}</p>
          <p className={styles.endpointsName}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};
