export class SubjectTabs {
  subjectTabs: SubjectTabModel[];

  constructor(subjectTabs: SubjectTabModel[]) {
    this.subjectTabs = subjectTabs;
  }
}

export class SubjectTabModel {
  selectionOrder: number;
  isSelected: boolean;
  tabText: string;
  icon: string;
  tabCSS: string;
  tabBeforeOrder: number;
  tabAfterOrder: number;

  constructor(selectionOrder: number, isSelected: boolean, tabText: string, icon: string,  tabCSS: string, tabBeforeOrder: number, tabAfterOrder: number) {
    this.selectionOrder = selectionOrder;
    this.isSelected = isSelected;
    this.tabText = tabText;
    this.icon = icon;
    this.tabCSS = tabCSS;
    this.tabBeforeOrder = tabBeforeOrder;
    this.tabAfterOrder = tabAfterOrder;
  }
}
