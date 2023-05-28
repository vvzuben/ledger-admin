import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../../components/common/Button';
import Breadcrumb from '../../../components/common/Breadcrumb';
import Col from '../../../components/common/Col';
import Dropzone from '../../../components/common/Dropzone';
import Row from '../../../components/common/Row';
import TextField from '../../../components/common/TextField';
import UnSavedModal from '../../../components/UnSavedModal';
import DeleteModal from '../../../components/DeleteModal';
import useIsMobile from '../../../hooks/useIsMobile';
import {
  Body,
  Footer,
  DetailContainer,
  DropzoneContainer,
  SpaceObjectContainer,
  Title,
} from './object.styles';
import { SpaceObject } from '../../../types';
import { client } from './../../../utils/client';
import Swal from 'sweetalert2';
import { SpinnerCircular } from 'spinners-react';

const Object: React.FC = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { id, mode } = router.query;
  const readonly = !(mode === 'create' || mode === 'edit');
  const initialForm: SpaceObject =
    mode === 'create'
      ? {
          id: 1,
          name: '',
          constellation: '',
          abbreviation: '',
          rightAccession: '',
          declination: '',
          stellar: '',
          bvColor: '',
          image: null,
        }
      : {
          id: 1,
          name: '',
          constellation: '',
          abbreviation: '',
          rightAccession: '',
          declination: '',
          stellar: '',
          bvColor: '',
          image: null,
        };
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [pastForm, setPastForm] = useState<SpaceObject>(initialForm);
  const [form, setForm] = useState<SpaceObject>(initialForm);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id && id !== 'new')
      setIsLoading(true);
      // @ts-ignore
      client.getSpaceObject({ id:  id}).then((res) => {
        setForm({
        id: res.id,
        name: res.name,
        constellation: "",
        image:"/assets/images/material.png",
        abbreviation: "",
        rightAccession: "",
        declination:"",
        bvColor: "",
        stellar:""
        });
        setIsLoading(false)
      })
      .catch(err => console.log(err)
      );
  }, [router]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleChangeFile = (file: string | null) => {
    setForm({ ...form, image: file });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/objects/${id}/edit`);
  };

  const handleDelete = () => {
    // @ts-ignore
    client.deleteSpaceObject({ id: id?.toString() }).then(() => {
     setIsOpenDeleteModal(false);
   });
   
 };
  const handleSave = async () => {
    if (id === 'new') {
      await client.createSpaceObject({
        title: form.name,
        message : form.constellation
      }).then(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false); err.status.toString().split("")[0] === "4" && Swal.fire({
          title: err.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        }) 
      });
    }

    if (mode === 'edit') {
      await client.updateSpaceObject({ 
        ...form,
        // @ts-ignore
        id: id?.toString()
      }).then(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false); err.status.toString().split("")[0] === "4" && Swal.fire({
          title: err.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        }) 
      });
    }
    router.push(`/objects/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/objects/${id}/view`);
    setIsOpenUnSaveModal(false);
  };

  const breadcrumbs = ['Home', 'Space Objects', 'Add New'];

  return (
    <SpaceObjectContainer>
      {!isMobile && (
        <Breadcrumb redirectURL="/objects" breadcrumbs={breadcrumbs} />
      )}
      <Title>{isMobile && 'Edit'} Space Objects</Title>
      <Body>
      {isLoading && <SpinnerCircular style={{  position: "fixed", top: "50%", left:"50%", marginTop:"-80px"}} size={100} thickness={60} speed={121} color="black" secondaryColor="white" />}
        <DropzoneContainer>
          <Dropzone
            label="Star Image"
            value={form.image}
            readonly={readonly}
            onChange={(file) => handleChangeFile(file)}
          />
        </DropzoneContainer>
        <DetailContainer>
          <Row>
            <Col>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                label="Constellation"
                name="constellation"
                value={form.constellation}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                label="Abbreviation"
                name="abbreviation"
                value={form.abbreviation}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                label="Right Accession"
                name="rightAccession"
                value={form.rightAccession}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                label="Declination"
                name="declination"
                value={form.declination}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                label="Stellar Classification"
                name="stellar"
                value={form.stellar}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col sm={12} lg={6}>
              <TextField
                label="BV Color"
                name="bvColor"
                value={form.bvColor}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
          </Row>
        </DetailContainer>
      </Body>
      <Footer>
        {mode === 'edit' && (
          <>
            <Button onClick={() => setIsOpenUnSaveModal(true)}>
              Cancel changes
            </Button>
            <Button color="success" onClick={handleSave}>
              Save changes
            </Button>
          </>
        )}
        {mode === 'create' && (
          <Button color="success" onClick={handleSave}>
            Create object
          </Button>
        )}
        {mode === 'view' && (
          <>
            <Button onClick={handleEdit}>Edit object</Button>
            <Button
              color="light-danger"
              onClick={() => setIsOpenDeleteModal(true)}
            >
              Delete object
            </Button>
          </>
        )}
      </Footer>
      <UnSavedModal
        isOpen={isOpenUnSaveModal}
        onClose={() => setIsOpenUnSaveModal(false)}
        onSave={handleSave}
        onCancel={handleCancelSave}
      />
      <DeleteModal
        pageName='space object'
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
    </SpaceObjectContainer>
  );
};

export default Object;
