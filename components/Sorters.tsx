import * as React from "react";
import { ISortProperty } from "../interfaces/ISortProperty";

export interface ISortersProps<T> {
  label: string;
  object: T;
  setSortProperty: (propertyType: ISortProperty<T>) => void;
}

export function Sorters<T>(props: ISortersProps<T>) {
  const { label, object, setSortProperty } = props;

  const onChangeCheckbox = (event) => {
    const values = event.target.value.split("-");
    if (values.length === 2) {
      setSortProperty({
        property: values[0] as any,
        isDescending: values[1] === "true",
      });
    }
  };

  return (
    <>
      <label htmlFor="sorters" className="mt-3">
        {label}
      </label>

      <div id="sorters" className="form-check">
        {Object.keys(object).map((key) => {
          return (
            <>
              <input
                onChange={(event) => onChangeCheckbox(event)}
                className="form-check-input"
                type="checkbox"
                value=""
                id={`${key}-true`}
              />
              <label className="form-check-label" for={`${key}-true`}>
                Sort by '{key}' descending!
              </label>
              <input
                onChange={(event) => onChangeCheckbox(event)}
                className="form-check-input"
                type="checkbox"
                value=""
                id={`${key}-false`}
              />
              <label className="form-check-label" for={`${key}-false`}>
                Sort by '{key}' ascending!
              </label>
            </>
          );
        })}
      </div>
    </>
  );
}
