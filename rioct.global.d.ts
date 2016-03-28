declare module Rioct
{
   class Component<P, S> implements React.ComponentLifecycle<P, S> {
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
   class Observable {
       on(events: string, callback: Function): void;
       one(events: string, callback: Function): void;
       off(events: string): void;
       trigger(eventName: string, ...args: any[]): void;
       constructor();
   }
   class Tag extends Component<any, any> implements Observable {
       on(events: string, callback: Function): void;
       one(events: string, callback: Function): void;
       off(events: string): void;
       trigger(eventName: string, ...args: any[]): void;
       constructor(props: any);
       update(): void;
   }
   function mount(selector?: string, tag?: any, props?: any): void;
   var tags: tagEntry;
   var styles: any[];
   function updateStyles(): void;
   var styleParser: (css: string) => string;
   function template(tagName: any): (target: Function) => void;
}

declare function template(tagName: string | Function): (target: Function) => void;