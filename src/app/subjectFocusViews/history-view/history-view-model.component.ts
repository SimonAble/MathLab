export class HistoryViewModel {
  historySections: HistorySection[];

  constructor(historySections: HistorySection[]) {
    this.historySections = historySections;
  }
}

export class HistorySection {
  sectionHeader: string;
  sectionIcon: string;
  sectionSubheader: string;
  sectionParagraphs: SectionParagraph[];

  constructor(sectionHeader: string, sectionSubheader: string, sectionIcon: string, sectionParagraphs: SectionParagraph[] ) {
    this.sectionHeader = sectionHeader;
    this.sectionSubheader = sectionSubheader;
    this.sectionIcon = sectionIcon;
    this.sectionParagraphs = sectionParagraphs;
  }
}

export class SectionParagraph {
  paragraphText: string;
  paragraphImg: string;
  imgAlt: string;

  constructor(paragraphText: string, paragraphImg?: string, imgAlt?: string) {
    this.paragraphText = paragraphText;
    this.paragraphImg = paragraphImg;
    this.imgAlt = imgAlt;
  }
}
