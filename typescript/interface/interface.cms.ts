export interface CMSRoot {
    statusCode: number
    message: string
    data: Daum[]
  }
  
  export interface Daum {
    title: string
    slug: string
  }