import { Questions } from 'src/app/questions/model/questions';
import { questionViewModel } from 'src/app/dialog-question/dialog-question.component';

export interface TestQuestion {
    name: string;
    question: questionViewModel;
}