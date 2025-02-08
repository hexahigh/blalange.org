interface FileData {
  width: number | null;
  height: number | null;
  size: string;
  name: string;
  title: string;
  extension: string;
  fileId: string;
  fileURL: string;
  url: string;
}

interface ImageBlockData {
  caption: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  file: FileData;
}

interface HeaderBlockData {
  text: string;
  level: number;
}

interface ParagraphBlockData {
  text: string;
}

interface TableBlockData {
  withHeadings: boolean;
  stretched: boolean;
  content: string[][];
}

interface CodeBlockData {
  code: string;
}

interface AttachesBlockData {
  file: FileData;
  title: string;
}

interface NestedListItem {
  content: string;
  items: NestedListItem[];
}

interface NestedListBlockData {
  style: "ordered" | "unordered";
  items: NestedListItem[];
}

interface QuoteBlockData {
  text: string;
  caption: string;
  alignment: "left" | "center" | "right";
}

interface DelimiterBlockData {
  // No specific properties
}

interface ChecklistItem {
  text: string;
  checked: boolean;
}

interface ChecklistBlockData {
  items: ChecklistItem[];
}

interface ToggleBlockData {
  text: string;
  status: "open" | "closed";
  fk: string;
  items: number;
}

interface RawBlockData {
  html: string;
}

interface AlignmentTune {
  alignment: string;
}

interface Block {
  id: string;
  type: string;
  data:
    | ImageBlockData
    | HeaderBlockData
    | ParagraphBlockData
    | TableBlockData
    | CodeBlockData
    | AttachesBlockData
    | NestedListBlockData
    | QuoteBlockData
    | DelimiterBlockData
    | ChecklistBlockData
    | ToggleBlockData
    | RawBlockData;
  tunes?: {
    alignment: AlignmentTune;
  };
}

interface Content {
  time: number;
  blocks: Block[];
  version: string;
}
