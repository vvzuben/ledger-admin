import React, { useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import DeleteModal from '../DeleteModal';
import Button from '../common/Button';
import { Article as ArticleProps } from '../../types';
import {
  ActionContainer,
  Author,
  AuthorLabel,
  Body,
  ButtonContainer,
  Calendar,
  Date,
  DeleteButton,
  DetailInfo,
  EditButton,
  FormItem,
  Header,
  Label,
  ArticleContainer,
  Title,
  Value,
} from './styles';
import useIsMobile from '../../hooks/useIsMobile';
import { client } from './../../utils/client';
import { type } from 'os';

interface ArticleForInitProps {
  init: () => void;
}

type ArticlePropsData = ArticleProps & ArticleForInitProps;

const Article: React.FC<ArticlePropsData> = (props, init) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = () => {
    Router.push(`/articles/${props.slug}/view`);
  };
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    Router.push(`/articles/${props.slug}/edit`);
  };
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    client.deleteNewsArticle({ id: props.id }).then(() => {
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
    <ArticleContainer onClick={handleRedirect}>
      <Header>
        <Title>{props.title}</Title>
        {isMobile && (
          <DetailInfo>
            <Date>
              <Calendar>
                <Image
                  src="/assets/images/icons/calendar.svg"
                  width={24}
                  height={24}
                  alt=":( Not Found"
                />
              </Calendar>
              {props.date}
            </Date>
            <Author>
              <AuthorLabel>Created by</AuthorLabel>
              {props.author}
            </Author>
          </DetailInfo>
        )}
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
                  Edit card
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
                  Remove card
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
      <Body>
        <FormItem>
          <Label>Date</Label>
          <Value>{props.date}</Value>
        </FormItem>
        <FormItem>
          <Label>Content</Label>
          <Value>{props.content}</Value>
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
        pageName="article"
        isOpen={isOpen}
        onClose={(e: React.MouseEvent<HTMLButtonElement>) => handleClose(e)}
        onDelete={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete(e)}
      />
    </ArticleContainer>
  );
};

export default Article;
