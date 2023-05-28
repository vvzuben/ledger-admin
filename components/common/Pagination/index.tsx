import React from 'react';
import Image from 'next/image';
import {
  PaginationContainer,
  PaginationUl,
  PaginationItem,
  PaginationActionContainer,
  PaginationAction,
} from './styles';

interface PaginationProps {
  pageCount: number;
  pageNum: number;
  onPaginate: (index: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  pageNum,
  onPaginate,
}) => {
  const handlePaginate = (index: number) => {
    onPaginate(index);
  };

  const handleNext = () => {
    if (pageNum !== pageCount) onPaginate(pageNum + 1);
  };

  const handleBack = () => {
    if (pageNum !== 1) onPaginate(pageNum - 1);
  };
  
  return (
    <PaginationContainer>
      <PaginationUl>
        {pageNum !== 1 && <PaginationItem active={false}>. . .</PaginationItem>}
        {Object.keys(Array.from(Array(pageCount))).map((item: string) => {
          const index = Number(item) + 1;
          if(Object.keys(Array.from(Array(pageCount))).length > 10){
            if(((index - pageNum  <10) && (index - pageNum > 0))  || index === pageNum ){
              return (
                <>
                <PaginationItem
                  key={item}
                  active={index === pageNum}
                  onClick={() => handlePaginate(index)}
                >
                  {index}
                </PaginationItem>
                </>
              );
            }
          }else {
            return (<PaginationItem
                  key={item}
                  active={index === pageNum}
                  onClick={() => handlePaginate(index)}
                >
                  {index}
                </PaginationItem>)
          }
         
        })}
        {!((Object.keys(Array.from(Array(pageCount))).length - pageNum) < 10)  && <PaginationItem active={false}>. . .</PaginationItem>}
        </PaginationUl>
      <PaginationActionContainer>
        <PaginationAction active={pageNum !== 1} onClick={handleBack}>
          <Image
            src="/assets/images/icons/arrow-left-light.svg"
            width={24}
            height={24}
          />
        </PaginationAction>
        <PaginationAction active={pageNum !== pageCount}>
          <Image
            src="/assets/images/icons/arrow-right-light.svg"
            width={24}
            height={24}
            onClick={handleNext}
          />
        </PaginationAction>
      </PaginationActionContainer>
    </PaginationContainer>
  );
};

export default Pagination;
