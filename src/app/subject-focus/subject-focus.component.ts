import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SubjectTypeCode } from './subjectEnum';
import { SubjectTabModel, SubjectTabs } from './subjectTab.model';
import { NavigationService } from '../shared/navigation.service';
import { Topic, TopicComponentsModel } from './Topic.model';
import { leftMenuItems, leftMenuItem } from '../menus/left-menu/left-menu.model';
import { ConceptModel, ConceptParagraph } from '../subjectFocusViews/concept-view/concept-view-model.component';
import { HistoryViewModel, HistorySection, SectionParagraph } from '../subjectFocusViews/history-view/history-view-model.component';
import { ApplicationModel, ApplicationViewModel, ApplicationModal, ApplicationParagraph } from '../subjectFocusViews/application-view/application-view-model.component';
import { PracticeViewModel } from '../subjectFocusViews/practice-view/practice-view-model.component';
import { TopicConstructorService } from './topic-constructor.service';
import { TopicListItems } from '../shared/coreEnum';

@Component({
  selector: 'app-subject-focus',
  templateUrl: './subject-focus.component.html',
  styleUrls: ['./subject-focus.component.css']
})
export class SubjectFocusComponent implements OnInit {
  @Output() leftMenuToggled = new EventEmitter<boolean>();
  leftMenuVisible = true;

  public topicModel = new Topic(
    new TopicComponentsModel(
      new leftMenuItems(
        'Foundations',
        'fas fa-square-root-alt mr-3',
        [
          new leftMenuItem(0, 'Whole Numbers', true, false),
          new leftMenuItem(1, 'Integers', false, true),
          new leftMenuItem(2, 'Negative Numbers', true, false),
          new leftMenuItem(3, 'Addition', false, false),
          new leftMenuItem(4, 'Subtraction', false, false),
          new leftMenuItem(5, 'Multiplication', true, false),
          new leftMenuItem(6, 'Division', false, false),
        ]
    ),
    new ConceptModel(
      'Whole Numbers',
    '1, 2, 3, 4, 5, ...',
    [
      new ConceptParagraph('Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires  constant attention. If it has been a while since you have studied math, it can be helpful to review basic topics. In  this chapter, we will focus on <strong class="blue">numbers used for counting</strong> as well as four arithmetic operations—addition, subtraction,  multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.')
    ]
    ),
    new HistoryViewModel(
      [
        new HistorySection(
          'Introduction to Whole Numbers',
          'What are Whole Numbers?',
          'fas fa-lightbulb',
          [
            new SectionParagraph(
              'Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires constant attention. If it has been a while since you have studied math, it can be helpful to review <strong class="green">basic topics</strong>. In this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction, multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.'
            ),
            new SectionParagraph(
              'Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires  constant attention. If it has been a while since you have studied math, it can be helpful to review basic topics. In  this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction,  multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.',
              'https://s3.amazonaws.com/tinycards/image/048f2fa66ae0142ff35878980685c4b5',
              'Abacus'
            )]),

        new HistorySection(
          'Early Humans',
          'How did early humans keep count?',
          'fas fa-lightbulb',
          [
            new SectionParagraph(
              'Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires constant attention. If it has been a while since you have studied math, it can be helpful to review basic topics. In this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction, multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.'
            ),
            new SectionParagraph(
              'Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires  constant attention. If it has been a while since you have studied math, it can be helpful to review basic topics. In  this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction,  multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.',
              'https://mathandmind.com/update/img/articles/cover_8.jpg',
              'Abacus'
            )]),
      ]
    ),
    new ApplicationViewModel(
      'Application View',
      [
        new ApplicationModel(
          0,
          'Accounting',
          'https://leaderonomics.com/wp-content/uploads/2018/07/ACCA-or-accounting-degree-which-course-is-better-Feature-2-770x470.png',
          new ApplicationModal('Accounting', [new ApplicationParagraph('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.')])
          ),
        new ApplicationModel(
          1,
          'Sciences',
          'https://ak9.picdn.net/shutterstock/videos/4466489/thumb/2.jpg',
          new ApplicationModal('Sciences', [new ApplicationParagraph('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.')])
          ),
        new ApplicationModel(
          2,
          'Programming',
          'https://image.freepik.com/free-vector/colorful-infographic-computer_52683-529.jpg',
          new ApplicationModal('Programming', [new ApplicationParagraph('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.')])
          ),
        new ApplicationModel(
          3,
          'Architecture',
          'https://leaderonomics.com/wp-content/uploads/2018/07/ACCA-or-accounting-degree-which-course-is-better-Feature-2-770x470.png',
          new ApplicationModal('Architecture', [new ApplicationParagraph('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.')])
          ),
        new ApplicationModel(
          4,
          'Everyday Life',
          'https://leaderonomics.com/wp-content/uploads/2018/07/ACCA-or-accounting-degree-which-course-is-better-Feature-2-770x470.png',
          new ApplicationModal('Everyday Life', [new ApplicationParagraph('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.')])
          ),
          new ApplicationModel(
            5,
            'Everyday Life',
            'https://leaderonomics.com/wp-content/uploads/2018/07/ACCA-or-accounting-degree-which-course-is-better-Feature-2-770x470.png',
            new ApplicationModal('Everyday Life', [new ApplicationParagraph('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.')])
            ),
            new ApplicationModel(
              6,
              'Everyday Life',
              'https://leaderonomics.com/wp-content/uploads/2018/07/ACCA-or-accounting-degree-which-course-is-better-Feature-2-770x470.png',
              new ApplicationModal('Everyday Life', [new ApplicationParagraph('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.')])
              )
      ]
    ),
    new PracticeViewModel()
  ));

  public topic: string;
  public leftMenuItems: leftMenuItems;
  public conceptView: ConceptModel = this.topicModel.topic.concept;
  public historyView: HistoryViewModel = this.topicModel.topic.history;
  public applicationView: ApplicationViewModel = this.topicModel.topic.application;
  public practiceView: PracticeViewModel = this.topicModel.topic.practice;

  public selectedTab: number;

  public subjectTabs = new SubjectTabs(
    [
      new SubjectTabModel(0, false, false, 'Concept', 'far fa-lightbulb', 'firstTab', 5, 1),
      new SubjectTabModel(1, true, false, 'History', 'fas fa-hourglass-half', 'tab', 0, 2),
      new SubjectTabModel(2, false, false, 'Application', 'fas fa-calculator', 'tab', 1, 3),
      new SubjectTabModel(3, false, false, 'Practice', 'far fa-edit', 'tab', 2, 4),
      new SubjectTabModel(4, false, true, 'Discussion', 'far fa-comments', 'tab', 3, 5),
      new SubjectTabModel(5, false, true, 'Resources', 'fas fa-book', 'lastTab', 4, 0)
    ]
  );

  constructor(
    private topicConstructorService: TopicConstructorService
  ) {}

  ngOnInit() {
    this.getActiveTab();

    this.getLeftMenuItems();
  }

  getLeftMenuItems() {
    this.leftMenuItems = this.topicConstructorService.getLeftMenuItems(TopicListItems.Foundations);
  }

  toggleLeftMenu() {
    if(this.leftMenuVisible == true) {
      this.leftMenuVisible = false;
    }
    else if (this.leftMenuVisible == false){
      this.leftMenuVisible = true;
    }
  }

  getActiveTab() {
    for (let i = 0; i < this.subjectTabs.subjectTabs.length; i++) {
      if (this.subjectTabs.subjectTabs[i].isSelected) {
        this.selectedTab = this.subjectTabs.subjectTabs[i].selectionOrder;
      }
    }
  }

  selectionTypeChange(subjectSelectionType: number) {
    console.log(`Subject Selected ${this.subjectTabs.subjectTabs[subjectSelectionType].tabText}`);
    for (let i = 0; i < this.subjectTabs.subjectTabs.length; i++) {
      if (this.subjectTabs.subjectTabs[i].selectionOrder === subjectSelectionType) {
        this.selectedTab = this.subjectTabs.subjectTabs[i].selectionOrder;
        this.subjectTabs.subjectTabs[i].isSelected = true;
      }
      else {
        this.subjectTabs.subjectTabs[i].isSelected = false;
      }
    }
  }

  cycleLeft(subjectSelectionType: number) {
    const currentTab = this.subjectTabs.subjectTabs[subjectSelectionType];
    currentTab.isSelected = false;

    const leftTab = this.subjectTabs.subjectTabs[currentTab.tabBeforeOrder];
    leftTab.isSelected = true;

    this.selectedTab = leftTab.selectionOrder;
  }

  cycleRight(subjectSelectionType: number) {
    console.log("right clicked");
    const currentTab = this.subjectTabs.subjectTabs[subjectSelectionType];
    currentTab.isSelected = false;

    const rightTab = this.subjectTabs.subjectTabs[currentTab.tabAfterOrder];
    rightTab.isSelected = true;

    this.selectedTab = rightTab.selectionOrder;
  }
}
