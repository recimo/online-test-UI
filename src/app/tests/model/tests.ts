import { Questions } from 'src/app/questions/model/questions';
import { Answers } from 'src/app/questions/model/answers';

export interface Tests {
    _id: string;
    name: string;
    questionList: Questions[];
    answers: string[];
}