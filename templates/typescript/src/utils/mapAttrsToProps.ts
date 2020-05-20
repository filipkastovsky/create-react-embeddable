export const mapAttrsToProps = (
  attrs: NamedNodeMap,
  propMap: Map<string, string> = new Map()
) => {
  for (const attr of attrs) {
    propMap.set(attr.name, attr.value);
  }

  return Object.fromEntries(propMap);
};
