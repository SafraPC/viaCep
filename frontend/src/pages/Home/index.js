import React from "react";
import Header from "../../components/Header";
import { Page, ScreenView } from "../../styles/default";
import { Container } from "./styles";
import Footer from "../../components/Footer";
import zipMage from "../../assets/zip.svg";
function Home() {

  const handleSubmit = (event)=>{
    event.preventDefault();
  }

  return (
    <Page>
      <Header />
      <ScreenView>
        <Container>
          <section>
            <h4>Utilize nossos Serviços de Busca e Localização por CEP!</h4>
            <img src={zipMage} alt="ImagemCep"/>
          </section>
          <section>
            <label>Busca Por CEP</label>
            <input type="text" placeholder="Insira seu CEP para Busca!"/>
            <button onClick={(e)=>handleSubmit(e)}>Buscar</button>
          </section>
        </Container>
      </ScreenView>
      <Footer />
    </Page>
  );
}

export default Home;
