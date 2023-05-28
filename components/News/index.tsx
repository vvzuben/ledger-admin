import React, { useState } from 'react';
import Image from 'next/image';
import {
  Bold,
  CloseButton,
  Content,
  Description,
  ImageContainer,
  NewsContainer,
  Role,
  Title,
} from './styles';
import useIsMobile from '../../hooks/useIsMobile';
import UserStore from '../../stores/UserStore';

const News: React.FC = () => {
  const isMobile = useIsMobile();

  const [hours] = useState(new Date().getHours());

  return (
    <NewsContainer>
      <CloseButton>
        <Image
          src="/assets/images/icons/remove.svg"
          width={12}
          height={12}
          alt=":( Not Found"
        />
      </CloseButton>
      <Content>
        <Role>starledger admin</Role>
        <Title>
          {hours < 12 ? 'GM' : hours < 17 ? 'GA' : hours < 22 ? 'GE' : 'GN'},{' '}
          <Bold>{UserStore.email}!</Bold>
        </Title>
        <Description>
          Watch your step! Things are a bit messy around here so be careful not to float out into the void.
        </Description>
      </Content>
      <ImageContainer>
        <Image
          src="/assets/images/news-bg.png"
          width={isMobile ? 300 : 520}
          height={isMobile ? 256 : 444}
          alt=":( Not Found"
        />
      </ImageContainer>
    </NewsContainer>
  );
};

export default News;
