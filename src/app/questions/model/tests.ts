import { Questions } from './questions';
import { Answers } from './answers';

export interface Tests {
    _id: string;
    name: string;
    questionList: Questions[];
    answers: string[];
}