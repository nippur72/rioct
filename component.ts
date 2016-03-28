// This clones React.Component providing a slight different signature:
// "render" is a property and not a member function
// "refs" is a generic object
//

import * as React from "react";

export declare class Component<P,S> implements React.ComponentLifecycle<P, S> {
   constructor(props?: P, context?: any);  
   setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
   setState(state: S, callback?: () => any): void;
   forceUpdate(callBack?: () => any): void;
   render: () => JSX.Element;
   props: P;
   state: S;
   context: {};
   refs: {};
}

var patched = Component;
patched = React.Component as any;

export default patched;





