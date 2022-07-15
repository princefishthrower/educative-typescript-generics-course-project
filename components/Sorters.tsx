import * as React from "react";
import { ISortProperty } from "../interfaces/ISortProperty";

export interface ISortersProps<T> {
  label: string;
  object: T;
  setSortProperty: (propertyType: ISortProperty<T>) => void;
  currentSortProperty: ISortProperty<T>;
}

export function Sorters<T>(props: ISortersProps<T>) {
  const { label, object, setSortProperty, currentSortProperty } = props;

  const onChangeCheckbox = (checkboxId: string) => {
    const values = checkboxId.split("-");
    if (values.length === 2) {
      setSortProperty({
        property: values[0] as any,
        isDescending: values[1] === "true",
      });
    }
  };

  const activeCheckboxId = `${currentSortProperty.property}-${
    currentSortProperty.isDescending ? "true" : "false"
  }`;

  return (
    <>
      <label htmlFor="sorters" className="mt-3">
        {label}
      </label>
      <div id="sorters">
        {Object.keys(object).map((key) => {
          const descendingId = `${key}-true`;
          const ascendingId = `${key}-false`;
          // changed markup to be a series of checkboxes, as required
          return (
            <div className="d-flex flex-row">
              <div className="form-check me-3">
                <input
                  onChange={() => onChangeCheckbox(descendingId)}
                  className="form-check-input"
                  type="checkbox"
                  checked={activeCheckboxId === descendingId}
                  id={descendingId}
                />
                <label className="form-check-label" htmlFor={descendingId}>
                  Sort by '{key}' descending!
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={() => onChangeCheckbox(ascendingId)}
                  className="form-check-input"
                  type="checkbox"
                  checked={activeCheckboxId === ascendingId}
                  id={ascendingId}
                />
                <label className="form-check-label" htmlFor={ascendingId}>
                  Sort by '{key}' ascending!
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
