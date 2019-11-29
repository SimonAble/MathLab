export class leftMenuItems {
  conceptId: number;
  coreConcept: string;
  coreConceptIcon: string;
  leftmenuitems: leftMenuItem[];

  constructor(conceptId: number, coreConcept: string, coreConceptIcon: string, leftmenuitems: leftMenuItem[]) {
    this.conceptId = conceptId;
    this.coreConcept = coreConcept;
    this.leftmenuitems = leftmenuitems;
    this.coreConceptIcon = coreConceptIcon;
  }
}

export class leftMenuItem {
  sectionComplete: boolean;
  itemText: string;
  itemActive: boolean;
  itemOrder: number;

  constructor(itemOrder: number, itemText: string, sectionComplete: boolean, itemActive: boolean) {
    this.sectionComplete = sectionComplete;
    this.itemText = itemText;
    this.itemActive = itemActive;
    this.itemOrder = itemOrder;
  }
}
