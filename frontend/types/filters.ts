export type FiltersType = {
    result: Result | null;
    loading: boolean,
    error: string
}

export type Result = {
    uid:    string;
    apiID:  string;
    schema: Schema;
}

export type Schema = {
    draftAndPublish:     boolean;
    displayName:         string;
    singularName:        string;
    pluralName:          string;
    description:         string;
    kind:                string;
    collectionName:      string;
    attributes:          Attributes;
    visible:             boolean;
    restrictRelationsTo: null;
}

export type Attributes = {
    productName: Description;
    slug:        Slug;
    description: Description;
    images:      Images;
    active:      Active;
    price:       Description;
    brand:       Brand;
    isFeatured:  Description;
    category:    Category;
    sizes:       Category;
}

export type Active = {
    type:    string;
    default: boolean;
}

export type Brand = {
    type: string;
    enum: string[];
}

export type Category = {
    type:            string;
    relation:        string;
    target:          string;
    targetAttribute: null;
    private:         boolean;
}

export type Description = {
    type: string;
}

export type Images = {
    type:         string;
    multiple:     boolean;
    required:     boolean;
    private:      boolean;
    allowedTypes: string[];
}

export type Slug = {
    type:        string;
    targetField: string;
}

