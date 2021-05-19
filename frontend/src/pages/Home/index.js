import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Page, ScreenView } from "../../styles/default";
import { Container } from "./styles";
import Footer from "../../components/Footer";
import zipMage from "../../assets/zip.svg";
import api from "../../services/api";
const Home = () => {
  //Button Event for submit form and bring CEP´s props.

  const [data, setData] = useState();
  const [zip, setZip] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setData(await (await api.get("/helloworld")).data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  /*/^[0-9]{5}-[0-9]{3}$/*/
  const maskInput = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  };
  useEffect(()=>{
    console.log(zip);
  },[zip])
  /*
  can be made that way too
  <InputMask mask="99999-999"  maskChar={null} type="text" placeholder="Insira seu CEP para Busca!" 
            onChange={(e)=>setZip(e.target.value)}
            value={zip}
      />*/
  return (
    <Page>
      <Header />
      <ScreenView>
        <Container>
          <section>
            <h4>Utilize nossos Serviços de Busca e Localização por CEP!</h4>
            <img src={zipMage} alt="ImagemCep" />
          </section>
          <section>
            <h4>Buscue as Informações de um CEP:</h4>
            <input
              type="text"
              placeholder="Insira seu CEP para Busca!"
              onChange={(e) => {
                e.target.value = maskInput(e.target.value);
                setZip(e.target.value);
              }}
              value={zip}
            />
            <button onClick={handleSubmit}>Buscar</button>
          </section>
        </Container>
      </ScreenView>
      <Footer />
    </Page>
  );
};

export default Home;
