export type CategoryType = {
    id:            number;
    documentId:    string;
    categoryName:  string;
    slug:          string;
    createdAt:     Date;
    updatedAt:     Date;
    publishedAt:   Date;
    locale:        null;
    image:         Image;
}

export type Image = {
    id:                number;
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    locale:            null;
}

export enum EXT {
    Jpg = ".jpg",
}

export type Formats = {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export type Large = {
    ext:         EXT;
    url:         string;
    hash:        string;
    mime:        MIME;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}
