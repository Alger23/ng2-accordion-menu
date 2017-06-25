export declare type AccordionNodes = AccordionNode[];
export interface AccordionNode {
  id?: string,
  name: string,
  title?: string,
  children?: AccordionNodes
  data?: any
}
