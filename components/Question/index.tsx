import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import TextField from '../common/TextField';
import {
  Answer,
  AnswerContainer,
  AnswersContainer,
  DeleteButton,
  QuestionContainer,
  Toolbar,
} from './styles';

interface QuestionProps {
  isLoading: boolean;
  readonly: boolean;
  question: string;
  answers: string[];
  onAddAnswer: () => void;
  onDeleteAnswer: (index: number) => void;
  onChangeAnswer: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
  onChangeQuestion: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  answers,
  onAddAnswer,
  onDeleteAnswer,
  onChangeAnswer,
  onChangeQuestion,
  readonly,
  isLoading
}) => {
  return (
    <QuestionContainer>
      <TextField
        label="Question"
        value={question}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeQuestion(event)
        }
        mb={24}
        readonly={readonly || isLoading}
      />
      <AnswersContainer>
        {answers.map((answer, index: number) => (
          <AnswerContainer key={index}>
            <Answer>
              <TextField
                value={answer}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeAnswer(event, index)
                }
                mb={0}
                placeholder="Answer"
                readonly={readonly || isLoading}
                />
            </Answer>
            <DeleteButton onClick={() => onDeleteAnswer(index)}>
              <Image
                src="/assets/images/icons/trash.svg"
                width={24}
                height={24}
                alt=":( Not Found"
              />
            </DeleteButton>
          </AnswerContainer>
        ))}
      </AnswersContainer>
      <Toolbar>
        {!readonly && <Button size="sm" onClick={onAddAnswer}>
          Add another answer
        </Button>}
      </Toolbar>
    </QuestionContainer>
  );
};

export default Question;
