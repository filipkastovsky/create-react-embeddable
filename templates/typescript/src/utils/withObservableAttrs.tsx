import * as React from 'react';
import { mapAttrsToProps } from './mapAttrsToProps';

export function withObservableAttrs<PropsType = {}>(
  el: HTMLElement,
  Component: React.ComponentType<PropsType>
) {
  return (props: PropsType) => {
    const [attrProps, setProps] = React.useState(
      mapAttrsToProps(el.attributes)
    );

    const observer = React.useMemo(
      () =>
        new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type == 'attributes') {
              setProps(mapAttrsToProps(el.attributes));
            }
          });
        }),
      []
    );

    React.useEffect(() => {
      observer.observe(el, { attributes: true });
    }, []);

    return <Component {...{ ...attrProps, ...props }} />;
  };
}
