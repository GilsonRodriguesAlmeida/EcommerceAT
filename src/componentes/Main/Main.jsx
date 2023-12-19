import React from "react";

import './Main.css';

import Header from "../Header/Header";
import Body from "../Body/Body";
import Produto from "../Produto/Produto";
import GaleriaSug from "../Galeria-Sug/GaleriaSug";
import Footer from "../Footer/Footer";
import CardList from "../Avaliacao/Lista";
import Perguntas from "../Perguntas/Perguntas";

const Main = () => {
  const cardData = [
    {coment:"Parabéns por entregar o projeto no prazo! Sua equipe fez um excelente trabalho de gerenciamento de tempo e comunicação com os outros departamentos.",
    nota:"(05)",
    autor:"Machado Assis",
    data:"2023-01-15"},
    {coment:"Parabéns por entregar o projeto no prazo! Sua equipe fez um excelente trabalho de gerenciamento de tempo e comunicação com os outros departamentos.",
    nota:"(05)",
    autor:"Machado Assis",
    data:"2023-01-15"}
  ];

  const estrela = "&#9733;&#9733;&#9733;&#9734;&#9734;";
  const galeriaData = [
    {imagem: "/images/images/products/product-8.png",
    productName: "Iphone 14 Pro Max 512GB",
    stars: "Pontuação Produto(05)",
    moeda: "R$ ",
    price: "7350,00"},
    {imagem: "/images/images/products/product-9.png",
    productName: "Samsung 512GB",
    stars: "Pontuação Produto(02)",
    moeda: "R$ ",
    price: "7350,00"},
  ]

  const dadosPerguntas = [
    {
      nome: "Fernanda", 
      dataPublicacao: "2023-01-20", 
      pergunta: "Qual é a capacidade da bateria?", 
      resposta: "A bateria tem uma capacidade de 4000mAh."
    },
    { nome: "Gabriel", dataPublicacao: "2023-02-05", pergunta: "Esse modelo suporta carregamento sem fio?"},
    { nome: "Mariana", dataPublicacao: "2023-02-18", pergunta: "É resistente à água?", resposta: "Sim, o smartphone possui certificação IP68, sendo resistente à água e poeira." },
    { nome: "Carlos", dataPublicacao: "2023-03-10", pergunta: "Quantos megapixels tem a câmera frontal?", resposta: "A câmera frontal tem 20 megapixels." },
    { nome: "Juliana", dataPublicacao: "2023-03-25", pergunta: "Vem com fones de ouvido na caixa?", resposta: "Sim, o produto inclui fones de ouvido na embalagem." },
    { nome: "Rafael", dataPublicacao: "2023-04-12", pergunta: "Posso expandir a memória com um cartão SD?", resposta: "Infelizmente, este modelo não suporta expansão de memória via cartão SD." },
    { nome: "Luiza", dataPublicacao: "2023-05-05", pergunta: "Qual é o sistema operacional pré-instalado?", resposta: "O smartphone vem com o sistema operacional Android 12 pré-instalado." },
    { nome: "Gustavo", dataPublicacao: "2023-06-18", pergunta: "Existem opções de cores disponíveis?", resposta: "Sim, oferecemos o smartphone nas cores preto, branco e azul." },
    { nome: "Isabela", dataPublicacao: "2023-07-02", pergunta: "O produto tem garantia?", resposta: "Sim, o smartphone possui garantia de 1 ano contra defeitos de fabricação." },
    { nome: "Thiago", dataPublicacao: "2023-07-22", pergunta: "Qual é o prazo de entrega para a minha região?", resposta: "O prazo de entrega varia de acordo com a sua localização, geralmente entre 5 a 7 dias úteis." }
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
      <GaleriaSug cards={galeriaData} />
      <CardList cards={cardData}/>
      <Perguntas perguntas={dadosPerguntas}/>
      <Footer />
    </>
  );
};

export default Main;
