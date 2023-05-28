import React, { useState, useEffect } from 'react';
import AddNewButton from '../../components/AddNewButton';
import Badge from '../../components/common/Badge';
import Breadcrumb from '../../components/common/Breadcrumb';
import Button from '../../components/common/Button';
import Tab from '../../components/common/Tab';
import Filter from '../../components/common/Filter';
import SortBy from '../../components/common/SortBy';
import DataGrid, { Row, Col } from '../../components/common/DataGrid';
import CardView from '../../components/common/CardView';
import Trivia from '../../components/Trivia';
import DeleteModal from '../../components/DeleteModal';
import {
  Actions,
  DetailViewContainer,
  Header,
  TriviaContainer,
  TableContainer,
  Title,
  Toolbar,
  TriviaTitle,
} from './trivia.styles';
import { Tab as TabType, Trivia as TriviaType } from '../../types';
import Router from 'next/router';
import useIsMobile from '../../hooks/useIsMobile';
import { client } from '../../utils/client';
import Pagination from '../../components/common/Pagination';
import { Loader } from '../../components/Loader/Loader';
import { SpinnerCircular } from 'spinners-react';

const Trivias: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState('');
  const [selectedTab, setSelectedTab] = useState('list');
  const tabs: TabType[] = [
    {
      id: 'list',
      name: 'List View',
    },
    {
      id: 'detail',
      name: 'Detail View',
    },
  ];
  // const rows: TriviaType[] = [
    //   {
      //     id: 1,
      //     title: 'Milky Way Galaxy Trivia',
      //     author: 'Chris Tate',
      //     date: 'May 23, 2022',
      //     status: 'Live',
      //     questionCount: 20,
      //     publishedAt: 'Discoard',
      //   },
      //   {
        //     id: 2,
        //     title: 'Planets and Stars Trivia',
        //     author: 'Chris Tate',
        //     date: 'May 23, 2022',
        //     status: 'Live',
        //     questionCount: 20,
        //     publishedAt: 'Discoard',
        //   },
        //   {
          //     id: 3,
          //     title: 'Milky Way Galaxy Trivia',
          //     author: 'Chris Tate',
          //     date: 'May 23, 2022',
          //     status: 'Live',
          //     questionCount: 20,
          //     publishedAt: 'Discoard',
          //   },
          //   {
            //     id: 4,
            //     title: 'Planets and Stars Trivia',
            //     author: 'Chris Tate',
            //     date: 'May 23, 2022',
            //     status: 'Live',
            //     questionCount: 20,
            //     publishedAt: 'Discoard',
            //   },
            //   {
              //     id: 5,
  //     title: 'Milky Way Galaxy Trivia',
  //     author: 'Chris Tate',
  //     date: 'May 23, 2022',
  //     status: 'Live',
  //     questionCount: 20,
  //     publishedAt: 'Discoard',
  //   },
  //   {
    //     id: 6,
    //     title: 'Planets and Stars Trivia',
    //     author: 'Chris Tate',
    //     date: 'May 23, 2022',
    //     status: 'Live',
    //     questionCount: 20,
    //     publishedAt: 'Discoard',
    //   },
    //   {
      //     id: 7,
      //     title: 'Milky Way Galaxy Trivia',
      //     author: 'Chris Tate',
      //     date: 'May 23, 2022',
      //     status: 'Live',
      //     questionCount: 20,
      //     publishedAt: 'Discoard',
      //   },
      //   {
        //     id: 8,
        //     title: 'Planets and Stars Trivia',
        //     author: 'Chris Tate',
        //     date: 'May 23, 2022',
        //     status: 'Live',
        //     questionCount: 20,
        //     publishedAt: 'Discoard',
        //   },
        //   {
          //     id: 9,
          //     title: 'Milky Way Galaxy Trivia',
          //     author: 'Chris Tate',
          //     date: 'May 23, 2022',
          //     status: 'Live',
          //     questionCount: 20,
          //     publishedAt: 'Discoard',
          //   },
          //   {
            //     id: 10,
            //     title: 'Planets and Stars Trivia',
            //     author: 'Chris Tate',
            //     date: 'May 23, 2022',
            //     status: 'Live',
            //     questionCount: 20,
            //     publishedAt: 'Discoard',
            //   },
            //   {
              //     id: 11,
              //     title: 'Milky Way Galaxy Trivia',
              //     author: 'Chris Tate',
              //     date: 'May 23, 2022',
              //     status: 'Live',
              //     questionCount: 20,
              //     publishedAt: 'Discoard',
              //   },
  //   {
  //     id: 12,
  //     title: 'Planets and Stars Trivia',
  //     author: 'Chris Tate',
  //     date: 'May 23, 2022',
  //     status: 'Live',
  //     questionCount: 20,
  //     publishedAt: 'Discoard',
  //   },
  //   {
    //     id: 13,
    //     title: 'Milky Way Galaxy Trivia',
    //     author: 'Chris Tate',
    //     date: 'May 23, 2022',
    //     status: 'Live',
    //     questionCount: 20,
    //     publishedAt: 'Discoard',
    //   },
    //   {
      //     id: 14,
      //     title: 'Planets and Stars Trivia',
      //     author: 'Chris Tate',
      //     date: 'May 23, 2022',
      //     status: 'Live',
      //     questionCount: 20,
      //     publishedAt: 'Discoard',
      //   },
      //   {
        //     id: 15,
        //     title: 'Milky Way Galaxy Trivia',
        //     author: 'Chris Tate',
        //     date: 'May 23, 2022',
        //     status: 'Live',
        //     questionCount: 20,
        //     publishedAt: 'Discoard',
        //   },
        //   {
          //     id: 16,
          //     title: 'Planets and Stars Trivia',
          //     author: 'Chris Tate',
          //     date: 'May 23, 2022',
          //     status: 'Live',
          //     questionCount: 20,
          //     publishedAt: 'Discoard',
          //   },
          //   {
            //     id: 17,
            //     title: 'Milky Way Galaxy Trivia',
            //     author: 'Chris Tate',
            //     date: 'May 23, 2022',
            //     status: 'Live',
            //     questionCount: 20,
            //     publishedAt: 'Discoard',
            //   },
            //   {
              //     id: 18,
  //     title: 'Planets and Stars Trivia',
  //     author: 'Chris Tate',
  //     date: 'May 23, 2022',
  //     status: 'Live',
  //     questionCount: 20,
  //     publishedAt: 'Discoard',
  //   },
  //   {
    //     id: 19,
    //     title: 'Milky Way Galaxy Trivia',
    //     author: 'Chris Tate',
    //     date: 'May 23, 2022',
    //     status: 'Live',
    //     questionCount: 20,
    //     publishedAt: 'Discoard',
    //   },
    //   {
      //     id: 20,
      //     title: 'Planets and Stars Trivia',
      //     author: 'Chris Tate',
      //     date: 'May 23, 2022',
      //     status: 'Live',
      //     questionCount: 20,
      //     publishedAt: 'Discoard',
      //   },
      //   {
        //     id: 21,
        //     title: 'Milky Way Galaxy Trivia',
        //     author: 'Chris Tate',
        //     date: 'May 23, 2022',
        //     status: 'Live',
        //     questionCount: 20,
        //     publishedAt: 'Discoard',
        //   },
        // ];
        
        const [rows, setRows] = useState<TriviaType[]>([]);
        const [pageCount, setPageCount] = useState(0);
        const [pageNum, setPageNum] = useState(1);
        const [isLoading, setIsLoading] = useState(false);
        const cols: string[] = ['Title', 'Author', 'Date', 'Status', 'Settings'];
        
      const handleChangeTab = (id: string) => setSelectedTab(id);
      
      const handleEdit = (
          event: React.MouseEvent<HTMLButtonElement>,
          rowID: number,
          ) => {
            event.stopPropagation();
            Router.push(`/trivia/${rowID}/edit`);
          };
      
      const handleOpenModal = (
            event: React.MouseEvent<HTMLButtonElement>,
            id: string,
            ) => {
    setSelectedRowId(id);
    event.stopPropagation();
    setIsOpen(true);
  };
  
  const handleDelete = () => {
    client.deleteTriviaGame({ id: selectedRowId }).then(() => {
      setIsOpen(false);
      init();
    });
  };

  const handleRedirect = (id: number) => {
    Router.push(`/trivia/${id}/view`);
  };

  const init = async () => {
    setIsLoading(true);
    const { results: results, maxPages } = await client.listTriviaGames({
      page: pageNum,
      limit: 10,
    });
    setRows(
      results.map((result) => ({
        id: result.id,
        date: result.date,
        title: result.title,
        author: 'Unknown',
        questionCount: 0,
        publishedAt: '',
        status: result.status,
      })),
      );
      
      setPageCount(maxPages);
      setIsLoading(false);
  };

  const renderCard = (row: TriviaType, init: () => void) => {
    return <Trivia init={init} {...row} />;
  };

  const renderRow = (row: TriviaType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>
          <TriviaTitle>{row.title}</TriviaTitle>
        </Col>
        <Col>{row.author}</Col>
        <Col>{row.date}</Col>
        <Col>
          <Badge color={row.status === 'Live' ? 'success' : 'warning'}>
            {row.status}
          </Badge>
        </Col>
        <Col>
          <Button
            size="xs"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleEdit(event, row.id)
            }
            style={{ marginRight: '10px' }}
          >
            Edit
          </Button>
          <Button
            size="xs"
            color="light-danger"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleOpenModal(e, row.id)
            }
          >
            Delete
          </Button>
        </Col>
      </Row>
    );
  };

  const breadcrumbs = ['Home', 'Trivia'];

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    init();
  }, [pageNum]);

  const handleChangePageNumber = (index: number) => {
    setPageNum(index);
  };

  return (
    <TriviaContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>Trivia</Title>
        <AddNewButton url="/trivia/new/create" />
      </Header>
      <Toolbar>
        <Actions>
          <Filter />
          <SortBy />
        </Actions>
        {!isMobile && (
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
        )}
      </Toolbar>
      {isMobile ? (
        <DetailViewContainer>
          <CardView rows={rows} init={init} renderCard={renderCard} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== 'list' ? (
            <DetailViewContainer>
              <CardView rows={rows} init={init} renderCard={renderCard} />
            </DetailViewContainer>
          ) : (
            <>
            {isLoading ? <SpinnerCircular style={{marginLeft: "auto", marginRight:"auto", display:"block"}} size={100} thickness={60} speed={121} color="black" secondaryColor="white" /> :
            <TableContainer>
              <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
            </TableContainer>
            }
            </>
          )}
        </>
      )}
      <Pagination
        pageNum={pageNum}
        pageCount={pageCount}
        onPaginate={handleChangePageNumber}
      />
      <DeleteModal
        pageName="trivia"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </TriviaContainer>
  );
};

export default Trivias;
