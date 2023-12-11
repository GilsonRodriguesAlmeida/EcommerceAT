import React from "react";

import './Main.css';

import Header from "../Header/Header";
import Body from "../Body/Body";
import Produto from "../Produto/Produto";
import GaleriaSug from "../Galeria-Sug/GaleriaSug";
import Footer from "../Footer/Footer";
import CardList from "../Avaliacao/Lista";
import GaleriaList from "../Galeria-Sug/ListaGale";

const Main = () => {
  const cardData = [
    {
      coment: "Parabéns por entregar o projeto no prazo! Sua equipe fez um excelente trabalho de gerenciamento de tempo e comunicação com os outros departamentos.",
      nota: "(05)",
      autor: "Machado Assis",
      data: "2023-01-15"
    },
    {
      coment: "Parabéns por entregar o projeto no prazo! Sua equipe fez um excelente trabalho de gerenciamento de tempo e comunicação com os outros departamentos.",
      nota: "(05)",
      autor: "Machado Assis",
      data: "2023-01-15"
    }
  ];

  const estrela = "&#9733;&#9733;&#9733;&#9734;&#9734;";
  const galeriaData = [
    {
      imagem: "/images/images/products/product-8.png",
      productName: "Iphone 14 Pro Max 512GB",
      stars: "Pontuação Produto(05)",
      moeda: "R$ ",
      price: "7350,00"
    },
    {
      imagem: "/images/images/products/product-9.png",
      productName: "Samsung Galaxy S23",
      stars: "Pontuação Produto(05)",
      moeda: "R$ ",
      price: "5350,00"
    },
  ]
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

      <GaleriaList cards={galeriaData} />

      <CardList cards={cardData} />
      <Footer />
    </>
  );
};

export default Main;
