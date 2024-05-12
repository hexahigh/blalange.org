export type StdlibType = {
  print: (...args: any[]) => void;
  lineData: string[];
  setLineData: (array: any[]) => void;
};

export type CommandType = {
  name: string;
  description: string;
  long_description: string;
  usage: string;
  hidden: boolean;
  execute: any;
};

export type CommandsType = CommandType[];
