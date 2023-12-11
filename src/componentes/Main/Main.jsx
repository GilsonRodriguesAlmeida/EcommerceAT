import React from "react";

import './Main.css';

import Header from "../Header/Header";
import Body from "../Body/Body";
import Produto from "../Produto/Produto";
import GaleriaSug from "../Galeria-Sug/GaleriaSug";
import Avaliacao from "../Avaliacao/Avaliacao";
import Footer from "../Footer/Footer";

const Main = () => {
  
  return (
    <>
      <Header />
      <Body 
        title="Bem vindo ao Seu Sucesso, Seja Ecommerce AT"
        paragrafo="Está querendo trocar de computador, mas está na dúvida qual é 
        o melhor modelo para você? Então venha para a Ecommerce AT
        que a gente te ajuda. Temos um time de especialistas que vai 
        te ajudar a encontrar o melhor computador para você."
        textBtn="Ver Agora"
        imagem="/images/images/gaming-msi-body.png"
      />
      <Produto />
      <GaleriaSug 
        title="Produtos Selecionados"
        imagem="/images/images/products/product-4.png"
        productName="Kit Gamer"
        stars="&#9733;&#9733;&#9733;&#9733;&#9734;"
        moeda="R$ "
        price="350,00"
      />
      <GaleriaSug 
        title="Ultimos Produtos Visualizados"
        imagem="/images/images/products/product-8.png"
        name="Gilson Rodrigues de Almeida"
        productName="Iphone 14 Pro Max 512GB"
        stars="&#9733;&#9733;&#9733;&#9734;&#9734;"
        moeda="R$ "
        price="7350,00"
      />
      
      <Avaliacao 
        coment="Parabéns por entregar o projeto no prazo! Sua equipe fez um excelente trabalho de gerenciamento de tempo e comunicação com os outros departamentos."
        nota="(05)"
        autor="Machado Assis"
        data="2023-01-15"
      />
      
      <Footer />
    </>
  );
};

export default Main;
