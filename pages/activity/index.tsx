import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import CardView from '../../components/common/CardView';
import Badge from '../../components/common/Badge';
import DataGrid, { Row, Col } from '../../components/common/DataGrid';
import Filter from '../../components/common/Filter';
import SortBy from '../../components/common/SortBy';
import Tab from '../../components/common/Tab';
import {
  ActivityContainer,
  ActivityAuthor,
  ActivityDate,
  ActivityTitle,
  Header,
  TableContainer,
  Title,
  Toolbar,
} from './activity.styles';
import useIsMobile from '../../hooks/useIsMobile';
import { Tab as TabType, Activity as ActivityType } from '../../types';
import { client } from './../../utils/client';
import Pagination from '../../components/common/Pagination';
import { SpinnerCircular } from 'spinners-react';

const Activity: React.FC = () => {
  const isMobile = useIsMobile();
  const [selectedTab, setSelectedTab] = useState('all');
  const [rows, setRows] = useState<ActivityType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const tabs: TabType[] = [
    {
      id: 'all',
      name: 'All Activity',
    },
    {
      id: 'object',
      name: 'Space Objects',
    },
    {
      id: 'nft',
      name: 'NFT’s',
    },
    {
      id: 'article',
      name: 'News Articles',
    },
  ];
  // const rows: ActivityType[] = [
  //   {
  //     id: 1,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 2,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 3,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 4,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 5,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 6,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 7,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 8,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 9,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 10,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 11,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 12,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 13,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 14,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 15,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 16,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 17,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 18,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 19,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  //   {
  //     id: 20,
  //     title: 'Space Object Edited',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 21,
  //     title: 'New NFT Listed',
  //     author: 'Chris Tate',
  //     date: 'May 17th, 2022 10:56:41',
  //     status: 'Completed',
  //   },
  // ];

  const cols: string[] = isMobile
    ? ['Title', 'Status']
    : ['Title', 'Author', 'Date', 'Status'];
  const handleChangeTab = (id: string) => setSelectedTab(id);

  const renderRow = (row: ActivityType) => {
    return (
      <Row>
        {isMobile ? (
          <Col>
            <ActivityTitle>{row.title}</ActivityTitle>
            <ActivityAuthor>
              {isMobile && `by `}
              {row.author}
            </ActivityAuthor>
            <ActivityDate>{row.date}</ActivityDate>
          </Col>
        ) : (
          <>
            <Col>
              <ActivityTitle>{row.title}</ActivityTitle>
            </Col>
            <Col>
              <ActivityAuthor>{row.author}</ActivityAuthor>
            </Col>
            <Col>
              <ActivityDate>{row.date}</ActivityDate>
            </Col>
          </>
        )}
        <Col>
          <Badge color={row.status === 'completed' ? 'success' : 'warning'}>
            {row.status}
          </Badge>
        </Col>
      </Row>
    );
  };

  const init = async () => {
    setIsLoading(true)
    const {results : results, maxPages, maxCount}=
      await client.listActivities({
        page: pageNum,
        limit: 25,
      });

    
    setRows(
      results.map(result => ({
        id : result.id,
        status : result.status,
        author: "",
        date: "",
        title: result.title
      })
    )
);
      setIsLoading(false)
    setPageCount(maxPages);
  };

  useEffect(() => {
    init();
  }, []);

  const handleChangePageNumber = (index: number) => {
    setPageNum(index);
  };

  useEffect(() => {
    init();
  }, [pageNum]);

  const breadcrumbs = ['Home', 'Activity'];

  return (
    <ActivityContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>Activity</Title>
      </Header>
      <Toolbar>
        {isMobile && <Filter />}
        <SortBy />
        {!isMobile && (
          <Tab
            size="small"
            tabs={tabs}
            active={selectedTab}
            onChange={handleChangeTab}
          />
        )}
      </Toolbar>
      {isLoading ? <SpinnerCircular style={{marginLeft: "auto", marginRight:"auto", display:"block"}} size={100} thickness={60} speed={121} color="black" secondaryColor="white" /> :
            <TableContainer>
              <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
            </TableContainer>
            }
      <Pagination
        pageNum={pageNum}
        pageCount={pageCount}
        onPaginate={handleChangePageNumber}
      />
    </ActivityContainer>
  );
};

export default Activity;
