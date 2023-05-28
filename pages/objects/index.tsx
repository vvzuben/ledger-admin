import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import AddNewButton from '../../components/AddNewButton';
import Breadcrumb from '../../components/common/Breadcrumb';
import Button from '../../components/common/Button';
import Tab from '../../components/common/Tab';
import Filter from '../../components/common/Filter';
import DataGrid, { Row, Col } from '../../components/common/DataGrid';
import CardView from '../../components/common/CardView';
import SpaceObject from '../../components/SpaceObject';
import DeleteModal from '../../components/DeleteModal';
import {
  AvatarContainer,
  DetailViewContainer,
  Header,
  SpaceObjectsContainer,
  TableContainer,
  Title,
  Toolbar,
} from './objects.styles';
import { Tab as TabType, SpaceObject as SpaceObjectType } from '../../types';
import useIsMobile from '../../hooks/useIsMobile';
import { client } from './../../utils/client';
import Pagination from '../../components/common/Pagination';
import { SpinnerCircular } from 'spinners-react';

const SpaceObjects: React.FC = () => {
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
  // const rows: SpaceObjectType[] = [
  //   {
  //     id: 1,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 2,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 3,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 4,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 5,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 6,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 7,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 8,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 9,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 10,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 11,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 12,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 13,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 14,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 15,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 16,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 17,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 18,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 19,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 20,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  //   {
  //     id: 21,
  //     name: 'Polaris',
  //     constellation: 'Ursa Minor',
  //     image: '/assets/images/material.png',
  //     abbreviation: 'UMA',
  //     rightAccession: 'Placeholder',
  //     declination: 'Placeholder',
  //     stellar: 'Placeholder',
  //     bvColor: 'Placeholder',
  //   },
  // ];
  const [rows, setRows] = useState<SpaceObjectType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const cols: string[] = ['Image', 'Name', 'Constellation', 'Status'];


  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number,
  ) => {
    event.stopPropagation();
    Router.push(`/objects/${rowID}/edit`);
  };
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>, id : string) => {
    event.stopPropagation();
    setIsOpen(true);
    setSelectedRowId(id);
  };
  
  const handleDelete = () => {
    client.deleteSpaceObject({ id: selectedRowId.toString() }).then(() => {
      setIsOpen(false);
      init();
    });
  };
  

  const init = async () => {
    setIsLoading(true);
    const { results: results, maxPages } = await client.listSpaceObjects({
      page: pageNum,
      limit: 10,
    });

    
    setRows(
      results && results.map((result) => ({
        id: result.identifier,
        name: result.name,
        constellation: result.constellation,
        image:"/assets/images/material.png",
        abbreviation: "",
        rightAccession: result.rightAscension,
        declination: result.declination ,
        bvColor: "",
        stellar:""
      })),
      );
      
      setPageCount(maxPages);
      setIsLoading(false);
  };

  const handleRedirect = (rowID: number) => {
    Router.push(`/objects/${rowID}/view`);
  };

  const renderCard = (row: SpaceObjectType, init: () => void) => {
    return <SpaceObject init={init} {...row} />;
  };

  const renderRow = (row: SpaceObjectType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>
          <AvatarContainer>
            <Image src={row.image} width={53} height={53} alt=":( Not Found" />
          </AvatarContainer>
        </Col>
        <Col>{row.name}</Col>
        <Col>{row.constellation}</Col>
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
          <Button size="xs" color="light-danger" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOpenModal(e,row.id)}>
            Delete
          </Button>
        </Col>
      </Row>
    );
  };

  const breadcrumbs = ['Home', 'Space Objects'];

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
    <SpaceObjectsContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>Space Objects</Title>
        <AddNewButton url="/objects/new/create" />
      </Header>
      <Toolbar>
        <Filter />
        {!isMobile && (
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
        )}
      </Toolbar>
      {isMobile ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={renderCard} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== 'list' ? (
            <DetailViewContainer>
              <CardView rows={rows} renderCard={renderCard} />
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
        pageName='space object'
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </SpaceObjectsContainer>
  );
};

export default SpaceObjects;
