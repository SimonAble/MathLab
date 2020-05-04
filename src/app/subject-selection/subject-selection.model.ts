export class FieldModel {
  fieldId: number;
  fieldName: string;
  fieldSubjects: SubjectSelectionModel[];

  constructor(fieldId: number, fieldName: string, fieldSubjects: SubjectSelectionModel[]) {
    this.fieldId = fieldId;
    this.fieldName = fieldName;
    this.fieldSubjects = fieldSubjects;
  }
}

export class Subjects {
  subjectId: number;
  subjectName: string;
  subjects: SubjectSelectionModel[];

  constructor(subjectId: number, subjectName: string, subjects: SubjectSelectionModel[]) {
    this.subjectId = subjectId;
    this.subjectName = subjectName;
    this.subjects = subjects;
  }
}

export class SubjectSelectionModel {
  subjectSelectorId: number;
  subjectText: string;
  subjectIcon: string;
  isDisabled: boolean;

  constructor(subjectId: number, subjectText: string, subjectIcon: string, isDisabled: boolean) {
    this.subjectSelectorId = subjectId;
    this.subjectText = subjectText;
    this.subjectIcon = subjectIcon;
    this.isDisabled = isDisabled;
  }
}
