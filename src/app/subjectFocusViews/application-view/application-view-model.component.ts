export class ApplicationViewModel {
  applicationHeading: string;
  applications: ApplicationModel[];

  constructor(applicationHeading: string, applications: ApplicationModel[]) {
    this.applicationHeading = applicationHeading;
    this.applications = applications;
  }
}

export class ApplicationModel {
  applicationId: number;
  applicationBackground: string;
  applicationText: string;
  applicationModal: ApplicationModal;

  constructor(applicationId: number, applicationText: string, applicationBackground: string, applicationModal: ApplicationModal) {
    this.applicationId = applicationId;
    this.applicationBackground = applicationBackground;
    this.applicationText = applicationText;
    this.applicationModal = applicationModal;
  }
}

export class ApplicationModal {
  modalHeader: string;
  modalParagraphs: ApplicationParagraph[];
  constructor(modalHeader: string, modalParagraphs: ApplicationParagraph[]) {
    this.modalHeader = modalHeader;
    this.modalParagraphs = modalParagraphs;
  }
}

export class ApplicationParagraph {
  paragraphText: string;
  paragraphImage: string;

  constructor(paragraphText: string, paragraphImage?: string) {
    this.paragraphText = paragraphText;
    this.paragraphImage = paragraphImage;
  }
}
