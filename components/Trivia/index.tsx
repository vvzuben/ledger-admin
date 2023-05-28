import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import DeleteModal from '../DeleteModal';
import Button from '../common/Button';
import { Trivia as TriviaType } from '../../types';
import {
  ActionContainer,
  Body,
  ButtonContainer,
  DeleteButton,
  EditButton,
  FormItem,
  Header,
  Label,
  TriviaContainer,
  Title,
  Value,
} from './styles';
import useIsMobile from '../../hooks/useIsMobile';
import { client } from '../../utils/client';
interface PropsForInit {
  init: () => void;
}

type TriviaProps = TriviaType & PropsForInit;

const Trivia: React.FC<TriviaProps> = (props, init) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
 


  const handleRedirect = () => {
    Router.push(`/trivia/${props.id}/view`);
  };
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    Router.push(`/trivia/${props.id}/edit`);
  };
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    client.deleteTriviaGame({ id: props.id }).then(() => {
      props.init();
      setIsOpen(false);
    });
  };
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(false);
  };
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <TriviaContainer onClick={handleRedirect}>
      <Header>
        <Title>{props.title}</Title>
        <ActionContainer>
          {isMobile ? (
            <>
              <ButtonContainer>
                <Button
                  size="sm"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleEdit(e)
                  }
                  fullWidth
                >
                  Edit trivia
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  size="sm"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleOpen(e)
                  }
                  fullWidth
                  color="light-danger"
                >
                  Remove trivia
                </Button>
              </ButtonContainer>
            </>
          ) : (
            <>
              <EditButton
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleEdit(e)
                }
              >
                <Image
                  src="/assets/images/icons/edit.svg"
                  width={24}
                  height={24}
                  alt=":( Not Found"
                />
              </EditButton>
              <DeleteButton
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleOpen(e)
                }
              >
                <Image
                  src="/assets/images/icons/trash.svg"
                  width={24}
                  height={24}
                  alt=":( Not Found"
                />
              </DeleteButton>
            </>
          )}
        </ActionContainer>
      </Header>
      <Body onClick={handleRedirect}>
        <FormItem>
          <Label>Date</Label>
          <Value>{props.date}</Value>
        </FormItem>
        <FormItem>
          <Label>Questions</Label>
          <Value>{props.questionCount}</Value>
        </FormItem>
        <FormItem>
          <Label>Author</Label>
          <Value>{props.author}</Value>
        </FormItem>
        <FormItem>
          <Label>Published At</Label>
          <Value>{props.publishedAt}</Value>
        </FormItem>
      </Body>
      <DeleteModal
        pageName="trivia"
        isOpen={isOpen}
        onClose={(e: React.MouseEvent<HTMLButtonElement>) => handleClose(e)}
        onDelete={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete(e)}
      />
    </TriviaContainer>
  );
};

export default Trivia;
