import React, { useEffect, useState } from 'react';
import AddNewButton from '../../components/AddNewButton';
import Breadcrumb from '../../components/common/Breadcrumb';
import Button from '../../components/common/Button';
import Tab from '../../components/common/Tab';
import Filter from '../../components/common/Filter';
import DataGrid, { Row, Col } from '../../components/common/DataGrid';
import CardView from '../../components/common/CardView';
import Article from '../../components/Article';
import Pagination from '../../components/common/Pagination';
import DeleteModal from '../../components/DeleteModal';
import {
  ArticlesContainer,
  DetailViewContainer,
  Header,
  TableContainer,
  Title,
  Toolbar,
} from './articles.styles';
import { Tab as TabType, Article as ArticleType } from '../../types';
import Router from 'next/router';
import useIsMobile from '../../hooks/useIsMobile';
import { client } from '../../utils/client';
import { Loader } from '../../components/Loader/Loader';
import { SpinnerCircular } from 'spinners-react';

const Articles: React.FC = () => {
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
  const [rows, setRows] = useState<ArticleType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] =useState(false);
  const cols: string[] = ['Title', 'Author', 'Published Date', 'Status'];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: string,
  ) => {
    event.stopPropagation();
    Router.push(`/articles/${rowID}/edit`);
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
    client.deleteNewsArticle({ id: selectedRowId }).then(() => {
      setIsOpen(false);
      init();
    });
  };

  const handleRedirect = (slug: string) => {
    Router.push(`/articles/${slug}/view`);
  };

  const init = async () => {
    setIsLoading(true)
    const { results: newsArticles, maxPages } = await client.listNewsArticles({
      page: pageNum,
      limit: 10,
    });
    setRows(
      newsArticles.map((newsArticle) => ({
        id: newsArticle.id,
        date: '',
        title: newsArticle.title,
        author: 'Unknown',
        content: '',
        slug: newsArticle.slug,
        image: newsArticle.image,
        publishedAt: newsArticle.publishedAt,
      })),
    );

    setPageCount(maxPages);
    setIsLoading(false)
  };

  const renderRow = (row: ArticleType) => {
    return (
      <Row onClick={() => handleRedirect(row.slug)}>
        <Col>{row.title}</Col>
        <Col>{row.author}</Col>
        <Col>{row.publishedAt}</Col>
        <Col>
          <Button
            size="xs"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleEdit(event, row.slug)
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

  const renderCard = (row: ArticleType, init: () => void) => {
    return <Article init={init} {...row} />;
  };

  const breadcrumbs = ['Home', 'News Articles'];

  useEffect(() => {
    init();
  }, []);

  const handleChangePageNumber = (index: number) => {
    setPageNum(index);
  };

  useEffect(() => {
    init();
  }, [pageNum]);

  return (
    <ArticlesContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>News Articles</Title>
        <AddNewButton url="/articles/new/create" />
      </Header>
      <Toolbar>
        <Filter />
        {!isMobile && (
          <>
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
          </>
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
        pageName="article"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </ArticlesContainer>
  );
};

export default Articles;
