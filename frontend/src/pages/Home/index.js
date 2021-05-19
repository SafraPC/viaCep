import React, {useEffect, useState } from "react";
import Header from "../../components/Header";
import { Page, ScreenView } from "../../styles/default";
import { Container } from "./styles";
import Footer from "../../components/Footer";
import zipMage from "../../assets/zip.svg";
import api from "../../services/api";
import { toast } from "react-toastify";
import { TOASTIFY_OPTIONS } from "../../styles/global";
const Home = () => {

  //Input ZIP
  const [zip, setZip] = useState();

  //Will get data from requisition and put in the screen
  const [apiData,setApiData] = useState({});
  
  
  //Button Event for submit form and bring CEP´s props.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const rgx = /^[0-9]{5}-[0-9]{3}$/;
      if(rgx.test(zip)){

      const infoData = await api.post("/testapi",{
          cep:zip
        });
        
      setApiData(infoData);
        if(apiData.status === 200){
          toast.success("Obrigado por Utilizar nossos Serviços!",TOASTIFY_OPTIONS)
        }else{
          toast.error("Houve um Erro Inesperado..",TOASTIFY_OPTIONS)
        }
    }else{
        toast.error("O CEP está Inválido! Favor Verificar.")
      }
    } catch (error) {
      toast.error("Houve um Erro Inesperado..  : "+error.message,TOASTIFY_OPTIONS)

    }
  };
 

  //I Could resolve this problem using react-input-mask
  //But i decided to resolve the better and performatic way.
  const maskInput = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  };
 
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
          {apiData?.data?.cep?
            <>
            <h4>CEP Retornado :</h4>
            <h5>CEP: {apiData?.data?.cep}</h5>
            <h5>Bairro: {apiData?.data?.bairro}</h5>
            <h5>Complemento: {apiData?.data?.complemento}</h5>
            <h5>ddd: {apiData?.data?.ddd}</h5>
            <h5>Gia: {apiData?.data?.gia}</h5>
            <h5>IBGE: {apiData?.data?.ibge}</h5>
            <h5>Localidade: {apiData?.data?.localidade}</h5>
            <h5>Logradouro: {apiData?.data?.logradouro}</h5>
            <h5>Siafi: {apiData?.data?.siafi}</h5>
            <h5>UF: {apiData?.data?.uf}</h5>
            </>:null}
            <h4>Busque as Informações de um CEP:</h4>
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
