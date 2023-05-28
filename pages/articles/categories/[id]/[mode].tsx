import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '../../../../components/common/Breadcrumb';
import Col from '../../../../components/common/Col';
import Row from '../../../../components/common/Row';
import TextField from '../../../../components/common/TextField';
import TextArea from '../../../../components/common/TextArea';
import Button from '../../../../components/common/Button';
import UnSavedModal from '../../../../components/UnSavedModal';
import DeleteModal from '../../../../components/DeleteModal';
import { Body, Footer, CategoryContainer, Title } from './category.styles';
import { Category as CategoryType } from '../../../../types';
import useIsMobile from '../../../../hooks/useIsMobile';
import { observer } from 'mobx-react-lite';
import { client } from '../../../../utils/client';
import { Loader } from '../../../../components/Loader/Loader';
import Swal from 'sweetalert2';
import { SpinnerCircular } from 'spinners-react';

const Category: React.FC = observer(() => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { id, mode } = router.query;
  const readonly = !(mode === 'create' || mode === 'edit');
  const initialForm: CategoryType = {
    id: '',
    title: '',
    slug: '',
  };
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [pastForm, setPastForm] = useState<CategoryType>(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<CategoryType>(initialForm);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/articles/categories/${id}/edit`);
  };
  const handleDelete = () => {
    client.deleteNewsCategory({ id: form.id }).then(() => {
      router.push('/articles/categories');
    });
  };
  const handleSave = async () => {
    console.log(mode)
    if (mode === 'create') {
      setIsLoading(true)
      await client.createNewsCategory({
        title: form.title,
        slug: form.slug,
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false); err.status.toString().split("")[0] === "4" && Swal.fire({
          title: err.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        }) 
      });;
    }

    if (mode === 'edit') {
      setIsLoading(true)
      await client.updateNewsCategory({
        id: form.id,
        slug: form.slug,
        title: form.title,
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false); err.status.toString().split("")[0] === "4" && Swal.fire({
          title: err.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        }) 
      });
    }

    router.push('/articles/categories');
    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/articles/categories/${id}/view`);
    setIsOpenUnSaveModal(false);
  };

  useEffect(() => {
    if (id && id !== 'new')
      setIsLoading(true)
      client.getNewsCategory({ slug: id }).then((res) => {
        setForm(res);
        setIsLoading(false)
      });
  }, [router]);

  const breadcrumbs = ['home', 'News Articles', 'Categories', 'Add New'];

  return (
    <CategoryContainer>
      <Breadcrumb redirectURL="/articles/categories" breadcrumbs={breadcrumbs} />
      {isLoading && <SpinnerCircular style={{  position: "fixed", top: "50%", left:"50%", marginTop:"-80px"}} size={100} thickness={60} speed={121} color="black" secondaryColor="white" />}
      <Title>{isMobile && 'Edit'} Categories</Title>
      <Body>
        <Row spacing={40}>
          <Col sm={12} lg={6}>
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              readonly={readonly || isLoading}
            />
          </Col>
          <Col sm={12} lg={6}>
            <TextField
              label="Slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              readonly={readonly || isLoading}
            />
          </Col>
        </Row>
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
            Create category
          </Button>
        )}
        {mode === 'view' && (
          <>
            <Button onClick={handleEdit}>Edit category</Button>
            <Button
              color="light-danger"
              onClick={() => setIsOpenDeleteModal(true)}
            >
              Delete category
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
        pageName='category'
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
    </CategoryContainer>
  );
});

export default Category;
