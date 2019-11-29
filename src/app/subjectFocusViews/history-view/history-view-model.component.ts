export class HistoryViewModel {
  historyHeader: string;
  historySections: HistorySection[];

  constructor(historyHeader: string, historySections: HistorySection[]) {
    this.historyHeader = historyHeader;
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
  paragraphHead: string;
  paragraphText: string;
  paragraphImg: string;
  imgAlt: string;

  constructor( paragraphText: string, paragraphHead?: string, paragraphImg?: string, imgAlt?: string) {
    this.paragraphHead = paragraphHead;
    this.paragraphText = paragraphText;
    this.paragraphImg = paragraphImg;
    this.imgAlt = imgAlt;
  }
}
