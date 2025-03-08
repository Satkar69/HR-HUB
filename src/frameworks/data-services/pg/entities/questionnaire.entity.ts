import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { QuestionnaireTypeEnum } from 'src/common/enums/questionnaire-type.enum';

@Entity('questionnaires')
export class QuestionnaireEntity extends BaseEntity {
  @Column({ name: 'type' })
  type: QuestionnaireTypeEnum;

  @Column({ name: 'question' })
  question: string;

  @Column({ name: 'answer' })
  ansert: string;

  @Column({ name: 'ratings' })
  ratings: number;
}
