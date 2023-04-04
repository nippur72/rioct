
import { createElement } from "react";
import { render } from "react-dom";

let mounted = false;

export function mount(selector?: string, tag?: any, props?: any) {
   if(selector && tag) {
      let mountNode = document.querySelector(selector);
      if(!mountNode) {
         throw `mount node '${selector}' not found`;
      }
      mounted = true;
      updateStyles();
      render(createElement(tag, props), mountNode);
   }
}

let styles: string[] = [];

export function updateStyles(style?: string) {
   if(style !== undefined) styles.push(style);
   if(!mounted) return;
   let styleNode = document.querySelector("style[name=rioct]") as HTMLStyleElement;
   if(!styleNode) {
      styleNode = document.createElement('style');
      styleNode.setAttribute("name", "rioct");
      document.head.appendChild(styleNode);
   }
   let allStyles = styles.join('');
   styleNode.innerHTML = styleParser ? styleParser(allStyles) : allStyles;
}

export type StyleParser = (css: string) => string;

let styleParser: StyleParser;

export function setStyleParser(parser: StyleParser) {
   styleParser = parser;
}
