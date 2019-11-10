export class ConceptModel {
  conceptHeading: string;
  conceptFormula: string;
  conceptParagraphs: ConceptParagraph[];
  conceptInteraction: string;
  conceptImg: any;

  constructor(conceptHeading: string, conceptFormula: string, conceptParagraphs: ConceptParagraph[], conceptInteraction?: string, conceptImg?: any) {
    this.conceptHeading = conceptHeading;
    this.conceptFormula = conceptFormula;
    this.conceptParagraphs = conceptParagraphs;
    this.conceptInteraction = conceptInteraction;
    this.conceptImg = conceptImg;
  }
}

export class ConceptParagraph {
  paragraphText: string;
  paragraphImg: string;
  paragraphImgAlt: string;

  constructor(paragraphText: string, paragraphImg?: string, paragraphImgAlt?: string) {
    this.paragraphText = paragraphText;
    this.paragraphImg = paragraphImg;
    this.paragraphImgAlt = paragraphImgAlt;
  }
}


