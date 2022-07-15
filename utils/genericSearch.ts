export const genericSearch = <T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean
): boolean => {
  if (query === "") {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];
    // added support for array properties
    if (Array.isArray(value)) {
      return value.some((item) => {
        return shouldBeCaseSensitive
          ? item.toString().includes(query)
          : item.toString().toLowerCase().includes(query.toLowerCase());
      })
    }
    if (typeof value === "string" || typeof value === "number") {
      if (shouldBeCaseSensitive) {
        return value.toString().includes(query);
      }
      return value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });
};
