declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.Fc<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.json' {
  const content: string;
  export default content;
}
