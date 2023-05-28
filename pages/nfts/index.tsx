import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddNewButton from '../../components/AddNewButton';
import Breadcrumb from '../../components/common/Breadcrumb';
import Button from '../../components/common/Button';
import Tab from '../../components/common/Tab';
import Filter from '../../components/common/Filter';
import DataGrid, { Row, Col } from '../../components/common/DataGrid';
import CardView from '../../components/common/CardView';
import NFT from '../../components/NFT';
import DeleteModal from '../../components/DeleteModal';
import {
  AvatarContainer,
  DetailViewContainer,
  Header,
  NFTsContainer,
  TableContainer,
  Title,
  Toolbar,
} from './nfts.styles';
import { Tab as TabType, NFT as NFTType } from '../../types';
import Router from 'next/router';
import useIsMobile from '../../hooks/useIsMobile';
import { client } from './../../utils/client';
import Pagination from '../../components/common/Pagination';
import { SpinnerCircular } from 'spinners-react';

const NFTs: React.FC = () => {
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
  // const rows: NFTType[] = [
  //   {
  //     id: 1,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 5,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 6,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 7,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 8,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 9,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 10,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 11,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 12,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 13,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 14,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 15,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 16,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 17,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 18,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 19,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 20,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Metis',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  //   {
  //     id: 21,
  //     name: 'Antares',
  //     owner: '12e45dee8po9sve8bd6g67j',
  //     chain: 'Ethereum',
  //     ranking: 'Placeholder',
  //     rarity: 'Placeholder',
  //     link: 'https://member.starledger.org/d245jdk/',
  //     image: '/assets/images/material.png',
  //   },
  // ];
  const [rows, setRows] = useState<NFTType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const cols: string[] = ['Image', 'Name', 'Owner', 'Chain', 'Status'];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number,
  ) => {
    event.stopPropagation();
    Router.push(`/nfts/${rowID}/edit`);
  };
  const handleOpenModal = ( event: React.MouseEvent<HTMLButtonElement>, id: string,) => {
    setSelectedRowId(id);
    event.stopPropagation();
    setIsOpen(true);
};
  const handleDelete = () => {
    setIsOpen(false);
  };

  const handleRedirect = (id: number) => {
    Router.push(`/nfts/${id}/view`);
  };

  const init = async () => {
    setIsLoading(true);
    const {results : results, maxCount, maxPages} = await client.listNfts({
      page: pageNum,
      limit: 100,
    });
    
    setRows(results.map(result => ({
      id: result.hip.toString(),
      name: result.name,
      owner: "",
      chain: "",
      image: '/assets/images/material.png',
      ranking: result.ranking.toString(),
      rarity: result.rarity,
      link: ""
    })));
      
      setPageCount(maxPages);
      setIsLoading(false);
  };

  const renderRow = (row: NFTType) => {
    return (
      // @ts-ignore
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>
          <AvatarContainer>
            <Image src={row.image} width={53} height={53} alt=":( Not Found" />
          </AvatarContainer>
        </Col>
        <Col>{row.name}</Col>
        <Col>{row.owner}</Col>
        <Col>{row.chain}</Col>
        <Col>
          <Button
            size="xs"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              // @ts-ignore
              handleEdit(event, row.id)
            }
            style={{ marginRight: '10px' }}
          >
            Edit
          </Button>
          <Button size="xs" color="light-danger" onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            // @ts-ignore
              handleOpenModal(e, row.id)
            }>
            Delete
          </Button>
        </Col>
      </Row>
    );
  };

  const breadcrumbs = ['Home', 'NFT’s'];

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
    <NFTsContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>NFTs</Title>
        <AddNewButton url="/nfts/new/create" />
      </Header>
      <Toolbar>
        <Filter />
        {!isMobile && (
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
        )}
      </Toolbar>
      {isMobile ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={NFT} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== 'list' ? (
            <DetailViewContainer>
              <CardView rows={rows} renderCard={NFT} />
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
        pageName='NFT'
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </NFTsContainer>
  );
};

export default NFTs;
