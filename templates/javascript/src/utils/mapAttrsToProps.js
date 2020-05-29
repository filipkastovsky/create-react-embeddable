export const mapAttrsToProps = (attrs, propMap = new Map()) => {
  for (const attr of attrs) {
    propMap.set(attr.name, attr.value);
  }
  return Object.fromEntries(propMap);
};
