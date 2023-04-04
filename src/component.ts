// This clones React.Component providing a slight different signature:
// "render" is a property and not a member function
//

// import * as React from "react";

/*
export declare class Component implements React.ComponentLifecycle<any, any> {
   constructor(props?: any, context?: any);  
   setState(f: (prevState: any, props: any) => any, callback?: () => any): void;
   setState(state: any, callback?: () => any): void;
   forceUpdate(callBack?: () => any): void;
   //render?: () => JSX.Element;
   props: any;
   state: any;
   context: any;
   refs: any;
}
*/

/*
export declare interface Component<P, S> extends React.ComponentLifecycle<P, S> { }
export declare class Component<P, S> {
   constructor(props?: P, context?: any);
   setState<K extends keyof S>(f: (prevState: S, props: P) => Pick<S, K>, callback?: () => any): void;
   setState<K extends keyof S>(state: Pick<S, K>, callback?: () => any): void;
   forceUpdate(callBack?: () => any): void;
   //render(): JSX.Element | null;

   // React.Props<T> is now deprecated, which means that the `children`
   // property is not available on `P` by default, even though you can
   // always pass children as variadic arguments to `createElement`.
   // In the future, if we can define its call signature conditionally
   // on the existence of `children` in `P`, then we should remove this.
   props: Readonly<{ children?: React.ReactNode }> & Readonly<P>;
   state: Readonly<S>;
   context: any;
   refs: {
      [key: string]: React.ReactInstance
   };
}

var patched = React.Component as (typeof Component);

export default patched;
*/
