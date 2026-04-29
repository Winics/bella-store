// 🔥 IMPORT DAS IMAGENS
import sutia1 from "../assets/produtos/sutia1.jpg"
import sutia2 from "../assets/produtos/sutia2.jpg"
import sutia3 from "../assets/produtos/sutia3.jpg"

import molde1 from "../assets/produtos/molde1.jpg"
import molde2 from "../assets/produtos/molde2.jpg"

// 🔥 LISTA DE PRODUTOS
const products = [
  // 🛍️ PRODUTO NORMAL
  {
    id: "123456",
    nome: "Sutiã Renda Preto",
    preco: 79.9,

    imagens: [sutia1, sutia2, sutia3],

    classe: "sutia",

    tamanhos: ["P", "M", "G"],

    cores: [
      { nome: "Preto", codigo: "#000000" },
      { nome: "Rosa Suave", codigo: "#EC9FBF" }
    ],

    descricao: "Sutiã em renda elegante e confortável."
  },

  // 🛍️ OUTRO PRODUTO (IMPORTANTE PARA SIMILARES)
  {
    id: "123457",
    nome: "Sutiã Delicado Rosa",
    preco: 89.9,

    imagens: [sutia2, sutia1],

    classe: "sutia",

    tamanhos: ["P", "M", "G"],

    cores: [
      { nome: "Rosa Claro", codigo: "#FFB7D7" }
    ],

    descricao: "Modelo delicado com acabamento premium."
  },

  // 🎥 MOLDE COM VÍDEO
  {
    id: "200001",
    nome: "Molde Sutiã Básico",
    preco: 0,

    imagens: [molde1, molde2],

    classe: "moldes",

    tamanhos: [],
    cores: [],

    descricao: "Molde básico para iniciantes.",

    video: "https://www.youtube.com/embed/VIDEO_ID",

    download: "/downloads/molde.pdf"
  }
]

export default products