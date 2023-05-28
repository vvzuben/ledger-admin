import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '../../../components/common/Breadcrumb';
import Col from '../../../components/common/Col';
import Row from '../../../components/common/Row';
import TextField from '../../../components/common/TextField';
import TextArea from '../../../components/common/TextArea';
import Button from '../../../components/common/Button';
import UnSavedModal from '../../../components/UnSavedModal';
import DeleteModal from '../../../components/DeleteModal';
import { Body, Footer, ArticleContainer, Title } from './article.styles';
import { Article as ArticleType } from '../../../types';
import useIsMobile from '../../../hooks/useIsMobile';
import { observer } from 'mobx-react-lite';
import { client } from '../../../utils/client';
import { Loader } from '../../../components/Loader/Loader';

import Swal from 'sweetalert2'
import { SpinnerCircular } from 'spinners-react';


const Article: React.FC = observer(() => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { id, mode } = router.query;
  const readonly = !(mode === 'create' || mode === 'edit');
  const initialForm: ArticleType = {
    id: '',
    date: '',
    title: '',
    slug: '',
    author: '',
    publishedAt: '',
    content: '',
  };
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [pastForm, setPastForm] = useState<ArticleType>(initialForm);
  const [form, setForm] = useState<ArticleType>(initialForm);
  const [isLoading, setIsLoading] =useState(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/articles/${id}/edit`);
  };
  const handleDelete = () => {
    client.deleteNewsArticle({ id: form.id }).then(() => {
      router.push('/articles');
    });
  };
  const handleSave = async () => {
    if (id === 'new') {
      setIsLoading(true)
      await client.createNewsArticle({
        title: form.title,
        slug: form.slug,
        image: '',
        content: form.content,
        overview: '',
        publishedAt: form.publishedAt,
        status: 'draft',
        categoryIds: [''],
      })
      .then((res) => { setIsLoading(false)})
      .catch((err) => { setIsLoading(false); err.status.toString().split("")[0] === "4" && Swal.fire({
        title: err.data.message,
        icon: 'error',
        confirmButtonText: 'OK'
      }) });
    }

    if (mode === 'edit') {
      setIsLoading(true)
      await client.updateNewsArticle({ ...form })
      .then((res) => { setIsLoading(false);;
      })
      .catch((err) => { setIsLoading(false); err.status.toString().split("")[0] === "4" && Swal.fire({
        title: err.data.message,
        icon: 'error',
        confirmButtonText: 'OK'
      }) 
     });
    }

    router.push('/articles');
    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/articles/${id}/view`);
    setIsOpenUnSaveModal(false);
  };

  useEffect(() => {
    if (id && id !== 'new')
      setIsLoading(true)
      client.getNewsArticle({ slug: id }).then((res) => {
        console.log(res);
        setForm({
          date: '',
          author: '',
          ...res,
          publishedAt: res.publishedAt.slice(0, 16),
        });
        setIsLoading(false)
      });
  }, [router]);

  const breadcrumbs = ['home', 'News Articles', 'Add New'];

  return (
    <ArticleContainer>
      <Breadcrumb redirectURL="/articles" breadcrumbs={breadcrumbs} />
      <Title>{isMobile && 'Edit'} News Articles</Title>
      <Body>
      {isLoading && <SpinnerCircular style={{  position: "fixed", top: "50%", left:"50%", marginTop:"-80px"}} size={100} thickness={60} speed={121} color="black" secondaryColor="white" />}
        <Row spacing={60}>
          <Col sm={12} lg={6}>
            <Row>
              <Col>
                <TextField
                  label="Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  readonly={readonly || isLoading}
                  />
              </Col>
              <Col>
                <TextField
                  label="Slug"
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  readonly={readonly || isLoading}
                  />
              </Col>
              <Col>
                <TextField
                  type="datetime-local"
                  label="Published At"
                  name="publishedAt"
                  value={form.publishedAt}
                  onChange={handleChange}
                  readonly={readonly || isLoading}
                  />
              </Col>
            </Row>
          </Col>
          <Col sm={12} lg={6}>
         
            <Row>
              <Col>
                <TextArea
                  label="Content"
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  readonly={readonly || isLoading}
                  />
              </Col>
            </Row>
          </Col>
        </Row>
      </Body>
      <Footer>
        {mode === 'edit' && (
          <>
            <Button onClick={() => setIsOpenUnSaveModal(true)}>
              Cancel changes
            </Button>
            <Button color="success" onClick={() => handleSave()}>
              Save changes
            </Button>
          </>
        )}
        {mode === 'create' && (
          <Button color="success" onClick={() => handleSave()}>
            Create article
          </Button>
        )}
        {mode === 'view' && (
          <>
            <Button onClick={handleEdit}>Edit article</Button>
            <Button
              color="light-danger"
              onClick={() => setIsOpenDeleteModal(true)}
            >
              Delete article
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
        pageName='article'
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
    </ArticleContainer>
  );
});

export default Article;
