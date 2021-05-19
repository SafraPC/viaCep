import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Page, ScreenView } from '../../styles/default';
import notFound from '../../assets/not_found.svg'
import { Container } from './styles';
import { useHistory } from 'react-router';

const NotFound = () => {

  const {push} = useHistory();

  return <Page>
      <Header/>
      <ScreenView>
        <Container>
          <h1>Página não Encontrada!</h1>
          <img src={notFound} alt="notFound"/>
          <button onClick={()=>(push('/'))}>Voltar</button>
        </Container>
      </ScreenView>
      <Footer/>
  </Page>
}

export default NotFound;