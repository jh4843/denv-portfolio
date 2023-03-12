export interface iProjects {
  object: string
  results: Array<iProjectsResult>
}

export interface iProjectsResult {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  // created_by: Array<Object>
  // last_edited_by: Array<Object>
  cover?: iProjectsResultCover
  // icon: null | Array<Object>
  // parent: null | Array<Object>
  archived: boolean
  properties: null | iProjectsResultProperties
  url: string
}

export interface iProjectsResultCommonAnno {
  bold?: boolean
  italic?: boolean
  strikethrough?: boolean
  underlink?: boolean
  code?: boolean
  color?: string
}

//
//#region "Cover"
//
export interface iProjectsResultCover {
  type: string
  // Tags: object
  file?: iProjectsResultCoverFile
  external?: iProjectsResultCoverExternal
}

export interface iProjectsResultCoverFile {
  url: string
  // Tags: object
  expiry_time: string
}

export interface iProjectsResultCoverExternal {
  url: string
}
//
//#endregion

//
//#region "Properties"
//
export interface iProjectsResultProperties {
  Description: iProjectsResultPropertiesDesc
  Tags: iProjectsResultPropertiesTag
  Github: iProjectsResultPropertiesGithub
  Name: iProjectsResultPropertiesName
}

//#region "Properties - Description"
export interface iProjectsResultPropertiesDesc {
  id: string
  type: string
  url: string
  rich_text: Array<iProjectsResultPropertiesDescRichText>
}

export interface iProjectsResultPropertiesDescRichText {
  type: string
  url: string
  rich_text: iProjectsResultPropertiesDescRichTextText
  annotations: iProjectsResultCommonAnno
  plain_text: string
  href: string | null
}

export interface iProjectsResultPropertiesDescRichTextText {
  content: string
  link: string | null
}

//#endregion

//#region "Properties - Tag"
export interface iProjectsResultPropertiesTag {
  id: string
  type: string
  multi_select?: Array<iProjectsResultPropertiesTagMultiSel>
}

export interface iProjectsResultPropertiesTagMultiSel {
  id: string
  name: string
  color: string
}

//#endregion

//#region "Propecties - Github"
export interface iProjectsResultPropertiesGithub {
  id: string
  type: string
  url: string
}

//#endregion

//#region "Propecties - Name"
export interface iProjectsResultPropertiesName {
  id: string
  type: string
  title: iProjectsResultPropertiesNameTitle[]
}

export interface iProjectsResultPropertiesNameTitle {
  type: string
  text: {
    content: string
    link: {
      url: string
    }
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: string
}
//#endregion

//#endregion
