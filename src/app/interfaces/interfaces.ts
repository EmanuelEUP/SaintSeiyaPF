 
  export interface CHARACTERS_INTERFACE {
    id:number,
    name:string,
    age:number,
    gender:string,
    birth:string,
    nationality:string,
    training:string,
    height:string,
    weight:string,
    blood:string,
    debut:string,
    master:master[],
    apprentice:apprentice[],
    attacks:attacks[],
    family:family[],
    midia:string,
    cloths:cloths[],
    image:string
  }
   
  export interface CURIOSITIES_INTERFACE {
    id:number,
    subTitle:string,
    description:string
  }

  export interface CLASSES_INTERFACE {
    id:number,
    name:string,
    cloth:string,
    class:string,
    rank:string,
    affiliation:string,
    image:string,
    artist:artist[], 
    symbol:string,
    debut:string,
    characterId:number,
    attacks:attacks[],
    symbolTag:string    
  }

  export interface CLASSES_NAMES_INTERFACE {
    id:number,
    name:string,
    singular:string
  }
   
  export interface DEBUTS_INTERFACE {
    id:number,
    name:string,
    midia:string,
    release:string,
    description:string,
    image:string,
  }
   
  export interface master {}
  export interface apprentice {}
  export interface attacks {}
  export interface family {}

  export interface artist {
    id:string,
    name:string,
    site:string
  }

  export interface cloths { 
    id:number,
    name:string,
    cloth:string,
    class:string,
    rank:string,
    affiliation:string,
    image:string,
    artist:string,
    symbol:string,
    debut:string,
    characterId:number,
    attacks:attacks[],
    symbolTag:string,
    midia:string
   }
 