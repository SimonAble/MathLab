import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SubjectItems } from '../shared/coreEnum';
import { Subjects } from './subject-selection.model';
import mathSubject from '../../assets/Math_Subjects/mathSubject.json';

@Injectable()
export class SubjectSelectionService {

    public subjectModel: Subjects;

    getSubjectSelection() {
      this.subjectModel = mathSubject;
      return this.subjectModel;
    }
}
