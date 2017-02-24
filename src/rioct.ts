
import { each } from "lodash";
import { createElement } from "react";
import { render } from "react-dom";
import Component from "./component";
            
export class Tag extends Component {
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
      render(createElement(tag, props), mountNode);
   }
   else {
      updateStyles();
      var tagList = Object.keys(tags);
      tagList.forEach(tagName => {
         let nodes = document.querySelectorAll(tagName);
         each(nodes, node => {
            if(node.childNodes.length) {
               console.warn(`the mounting node <${tagName}> should not have children`);
            }
            let tagClass = tagClasses[tagName];
            try {
               let props = {};               
               each(node.attributes, n => { props[n.name] = n.value; });
               render(createElement(tagClass, props), node);
            }
            catch(ex) {
               throw `failed to mount ${tagName}() on DOM node <${tagName}>, error: ${ex.message}`;
            }
         });
      });
   }
}

export interface tagEntry { [tagName: string]: ()=>void }

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

export type StyleParser = (css: string) => string;

var styleParser: StyleParser;

export function setStyleParser(parser: StyleParser) {
   styleParser = parser;
}

// @template decorator
export function template(tagName: string|Function) {
   if(typeof(tagName)==="string") 
   {
	   return function(target: Function) {
         var tagFunction = tags[tagName as string];
         if(!tagFunction) {
            throw `tag "${tagName}" not defined/loaded`;
         }
         target.prototype["render"] = tagFunction; 
         tagClasses[tagName as string] = target;
      }
   }
   else 
   {
	   return function(target: Function) {
         var tagFunction = tagName as Function;
         if(!tagFunction) {
            throw `tag function not defined/loaded`;
         }
         target.prototype["render"] = tagFunction; 
         // TODO: tagClasses[tagName] = target;
      }
   }
}

