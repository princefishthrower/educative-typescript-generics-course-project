import * as React from "react";

export interface ISortersProps<T> {
  label: string;
  object: T | {};
  setSortProperty: (property: keyof T) => void;
}

export function Sorters<T>(props: ISortersProps<T>) {
  const { label, object, setSortProperty } = props;
  return (
    <>
      <label htmlFor="sorters">{label}</label>
      <select
        id="sorters"
        onChange={(event) => setSortProperty(event.target.value as any)}
      >
        {Object.keys(object).map((key) => {
          return (
            <option key={key} value={key}>
              Sort by '{key}'!
            </option>
          );
        })}
      </select>
    </>
  );
}
