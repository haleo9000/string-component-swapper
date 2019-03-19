declare module 'string-component-swapper' {
  import * as React from 'react';

  export interface StringSwapperProps {
    incoming: string;
    componentFn: (fragment:string) => React.ReactChild;
    stringSearchTuple: [RegExp, RegExp];
  }
}