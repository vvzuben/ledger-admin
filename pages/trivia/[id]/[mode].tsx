import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '../../../components/common/Breadcrumb';
import Col from '../../../components/common/Col';
import Row from '../../../components/common/Row';
import TextField from '../../../components/common/TextField';
import Button from '../../../components/common/Button';
import UnSavedModal from '../../../components/UnSavedModal';
import Question from '../../../components/Question';
import DeleteModal from '../../../components/DeleteModal';
import {
  Body,
  Footer,
  DetailContainer,
  TriviaContainer,
  Title,
} from './trivia.styles';
import { Question as QuestionType } from '../../../types';
import useIsMobile from '../../../hooks/useIsMobile';
import { client } from './../../../utils/client';
import { Loader } from '../../../components/Loader/Loader';
import Swal from 'sweetalert2';
import { SpinnerCircular } from 'spinners-react';

interface TriviaProps {
  id?: string;
  title: string;
  date: string;
  questions: QuestionType[];
}

const Trivia: React.FC = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { id, mode } = router.query;
  const readonly = !(mode === 'create' || mode === 'edit');
  const initialForm: TriviaProps =
    mode === 'create'
      ? {
          title: '',
          date: '',
          questions: [
            {
              question: '',
              answers: ['',''],
            },
            {
              question: '',
              answers: ['',''],
            },
          ],
        }
      : {
          id: id?.toString(),
          title: '',
          date: '',
          questions: [
            {
              question: '',
              answers: ['',''],
            },
            {
              question: '',
              answers: ['',''],
            },
          ],
        };
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [pastForm, setPastForm] = useState<TriviaProps>(initialForm);
  const [form, setForm] = useState<TriviaProps>(initialForm); 
  const [isLoading, setIsLoading] = useState(false);



  
  useEffect(() => {
    if (id && id !== 'new')
      setIsLoading(true);
      //@ts-ignore
      client.getTriviaGame({ id:  id.toString()}).then((res) => {
        setForm({
          id : res.id,
          questions : form.questions,
          date : res.date.slice(0, 16),
          title : res.title
        });
        setIsLoading(false);
      })
      .catch(err => console.log(err)
      );
  }, [router]);

  



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleAddAnswer = (index: any) => {
    let clonedQuestions = form.questions;
    clonedQuestions[index].answers.push('');
    setForm({ ...form, questions: clonedQuestions });
  };

  const handleDeleteAnswer = (qIndex: number, aIndex: number) => {
    let clonedQuestions = form.questions;
    clonedQuestions[qIndex].answers.splice(aIndex, 1);
    setForm({ ...form, questions: clonedQuestions });
  };

  const handleEdit = () => {
    // setPastForm(form);
    router.push(`/trivia/${id}/edit`);
  };
  const handleDelete = () => {
    //@ts-ignore
     client.deleteNewsArticle({ id: id?.toString() }).then(() => {
      setIsOpenDeleteModal(false);
    });
    
  };

  
  const handleSave = async () => {
    if (id === 'new') {
      setIsLoading(true)
      await client.createTriviaGame({
        title: form.title,
        date : form.date,
        questions : form.questions
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

    if (mode === 'edit') {
      setIsLoading(true)
      await client.updateTriviaGame({ 
        ...form,
        //@ts-ignore
        id : id.toString()
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
    router.push(`/trivia`);
    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/trivia/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const breadcrumbs = ['Home', 'Trivia', 'Add New'];
  const handleChangeQuestion = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    let clonedQuestions = form.questions;
    clonedQuestions[index].question = event.target.value;
    setForm({ ...form, questions: clonedQuestions });
  };

  const handleChangeAnswer = (
    event: React.ChangeEvent<HTMLInputElement>,
    aIndex: number,
    qIndex: number,
  ) => {
    let clonedQuestions = form.questions;
    clonedQuestions[qIndex].answers[aIndex] = event.target.value;
    setForm({ ...form, questions: clonedQuestions });
  };

  const handleAddQuestion = () => {
    const clonedQuestions = form.questions;
    clonedQuestions.push({
      question: '',
      answers: [''],
    });
    setForm({ ...form, questions: clonedQuestions });
  }; 
  
  

  return (
    <TriviaContainer>
      <Breadcrumb redirectURL="/trivia" breadcrumbs={breadcrumbs} />
      <Title>{isMobile && 'Edit'} Trivia</Title>
      <Body>
      {isLoading && <SpinnerCircular style={{  position: "fixed", top: "50%", left:"50%", marginTop:"-80px"}} size={100} thickness={60} speed={121} color="black" secondaryColor="white" />}
        <DetailContainer>
          <Row>
            <Col lg={6} sm={12}>
            <TextField
                  type="datetime-local"
                  label="Date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  readonly={readonly || isLoading}
                />
              {/* <TextField
                type="date"
                label="Date"
                name="date"
                value={form.date}
                onChange={handleChange}
                readonly={readonly}
              /> */}
            </Col>
            <Col lg={6} sm={12}>
              <TextField
                label="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                readonly={readonly || isLoading}
                />
            </Col>
            <Col lg={12}>
              {form.questions?.map((question, index: number) => (
                <Question
                  readonly={readonly}
                  isLoading={isLoading}
                  key={index}
                  {...question}
                  onChangeQuestion={(
                    event: React.ChangeEvent<HTMLInputElement>,
                  ) => handleChangeQuestion(event, index)}
                  onChangeAnswer={(
                    event: React.ChangeEvent<HTMLInputElement>,
                    aIndex: number,
                  ) => handleChangeAnswer(event, aIndex, index)}
                  onAddAnswer={() => handleAddAnswer(index)}
                  onDeleteAnswer={(aIndex: any) =>
                    handleDeleteAnswer(index, aIndex)
                  }
                />
              ))}
            </Col>
           {!readonly && <Col lg={12}>
              <Button fullWidth mb={60} onClick={handleAddQuestion}>
                Save changes +
              </Button>
            </Col>}
          </Row>
        </DetailContainer>
      </Body>
      
      <Footer>
        {mode === 'edit' && (
          <>
            <Button onClick={() => setIsOpenUnSaveModal(true)}>
              Cancel and exit
            </Button>
            <Button color="success" onClick={handleSave}>
              Submit and publish
            </Button>
          </>
        )}
        {mode === 'create' && (
          <Button color="success" onClick={handleSave}>
            Create Trivia
          </Button>
        )}
        {mode === 'view' && (
          <>
            <Button onClick={handleEdit}>Edit Trivia</Button>
            <Button
              color="light-danger"
              onClick={() => setIsOpenDeleteModal(true)}
            >
              Delete Trivia
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
        pageName='trivia'
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
    </TriviaContainer>
  );
};

export default Trivia;
