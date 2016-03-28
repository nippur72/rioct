// This clones React.Component providing a slight different signature:
// "render" is a property and not a member function
// "refs" is a generic object
//

import * as React from "react";

export declare class Component implements React.ComponentLifecycle<any, any> {
   constructor(props?: any, context?: any);  
   setState(f: (prevState: any, props: any) => any, callback?: () => any): void;
   setState(state: any, callback?: () => any): void;
   forceUpdate(callBack?: () => any): void;
   render: () => JSX.Element;
   props: any;
   state: any;
   context: {};
   refs: {};
}

var patched = React.Component as (typeof Component);

export default patched;

