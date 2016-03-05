﻿/// <reference path="typings/lodash/lodash.d.ts" />
/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />

/// <reference path="observable.ts" />
/// <reference path="types.ts" />
               
import _ = require("lodash");
import * as React from "react";
import * as ReactDOM from "react-dom";
import observable from "./observable";
                
export class Observable {      
   on(events: string, callback: Function) {}; 
   one(events: string, callback: Function) {};
   off(events: string) {};
   trigger(eventName: string, ...args) {};

   constructor() {
      observable(this);
   }
}  

export class Tag extends React.Component<any,any> implements Observable {
   on(events: string, callback: Function) {} 
   one(events: string, callback: Function) {}
   off(events: string) {}
   trigger(eventName: string, ...args) {}

   constructor(props) {
      super(props);
      observable(this);         
      Object.defineProperty(this, "_refs", {
         get: ()=> this.refs,            
         enumerable: true,
         configurable: true
      });                 
   }     

   update() {
      this.forceUpdate();
   }
}

export function mount(selector?: string, tag?: any, props?: any) {
   if(selector && tag) {
      let mountNode = document.querySelector(selector);
      if(!mountNode) {
         throw `mount node '${selector}' not found`;
      }
      updateStyles();
      ReactDOM.render( React.createElement(tag, props), mountNode);      
   }
   else {
      updateStyles();         
      var tagList = Object.keys(tags);
      _.each(tagList, tagName => {            
         let nodes = document.querySelectorAll(tagName);
         _.each(nodes, node => {                      
            if(node.childNodes.length) {
               console.warn(`the mounting node <${tagName}> should not have children`);
            }
            let tagClass = tagClasses[tagName];
            ReactDOM.render( React.createElement(tagClass, {}), node);      
         });
      });
   }
}

export var tags:tagEntry = {};

var tagClasses: { [tagName: string]: any } = {};

export var styles = [];                          

export function updateStyles() {
   var styleNode = document.querySelector("style[name=rioct]") as HTMLStyleElement;
   if(!styleNode) {
      styleNode = document.createElement('style');
      styleNode.setAttribute("name", "rioct");
      document.head.appendChild(styleNode);
   }
   var allStyles = styles.join('');
   styleNode.innerHTML = styleParser ? styleParser(allStyles) : allStyles;      
}

export var styleParser: (css: string)=>string;      

// @template decorator
export function template(tagName) {
	return function(target: Function) {
      var tagFunction = tags[tagName];
      if(!tagFunction) {
         throw `tag "${tagName}" not defined/loaded`;
      }
      target.prototype["render"] = tagFunction; //function() { try { return tagFunction() } catch(ex) { console.error(ex) } };               
      tagClasses[tagName] = target;
   }	
}
