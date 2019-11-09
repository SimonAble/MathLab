export class leftMenuItems {
  coreConcept: string;
  coreConceptIcon: string;
  leftmenuitems: leftMenuItem[];

  constructor(coreConcept: string, coreConceptIcon: string, leftmenuitems: leftMenuItem[]) {
    this.coreConcept = coreConcept;
    this.leftmenuitems = leftmenuitems;
    this.coreConceptIcon = coreConceptIcon;
  }
}

export class leftMenuItem {
  sectionComplete: boolean;
  itemText: string;
  itemActive: boolean;

  constructor(itemText: string, sectionComplete: boolean, itemActive: boolean) {
    this.sectionComplete = sectionComplete;
    this.itemText = itemText;
    this.itemActive = itemActive;
  }
}
