export type DataType = {
  article: ArticleLoaded;
};

/* This type defines the structure of the article data that is loaded from the Directus API.
Some fields are marked with `any` type because their structure is not fully defined or can vary.
This type was automatically generated and manually modified so it may be somewhat inaccurate.
*/
export type ArticleLoaded = {
  id: string;
  status: string;
  sort: any;
  image: ArticleLoadedImage;
  art_id: string;
  name: string;
  description: any;
  text: string;
  tags: any;
  date: string;
  date_updated: string;
  type: string;
  translations: Array<any>;
  blocks: Array<ArticleLoadedBlock>;
  authors: Array<{
    id: number;
    art_articles_id: string;
    sort: number;
    art_authors_id: {
      id: string;
      name: string;
      email: string;
      user: string;
    };
  }>;
  author: any; // The author field is getting replaced anyway, so I can't be bothered to define it properly :)
};

type ArticleLoadedImage = {
  id: string;
  title: string;
  description: any;
  tags: any;
  location: any;
  storage: string;
  focal_point_x: any;
  focal_point_y: any;
  filename_download: string;
  filename_disk: string;
  metadata: {};
  filesize: string;
  created_on: string;
  type: string;
  modified_on: string;
  modified_by: any;
  embed: any;
  folder: string;
  uploaded_on: string;
  width: number;
  height: number;
  charset: any;
  duration: any;
  tus_id: any;
  tus_data: any;
  uploaded_by: string;
};

type ArticleLoadedBlock = ArticleLoadedBlock_markdown | ArticleLoadedBlock_image;

type ArticleLoadedBlock_markdown = {
  id: number;
  art_articles_id: string;
  sort: number;
  collection: "block_markdown";
  item: {
    id: string;
    content: string;
  };
};

type ArticleLoadedBlock_image = {
  id: number;
  art_articles_id: string;
  sort: number;
  collection: "block_image";
  item: {
    id: string;
    description?: string;
    alt?: string;
    image: ArticleLoadedImage;
  };
};
