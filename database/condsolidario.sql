-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 04-Jun-2021 às 20:01
-- Versão do servidor: 8.0.25
-- versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `condsolidario`
--
CREATE DATABASE IF NOT EXISTS `condsolidario` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `condsolidario`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `condominio`
--

CREATE TABLE `condominio` (
  `IdCondominio` int NOT NULL,
  `Nome` varchar(200) DEFAULT NULL,
  `CEP` varchar(10) DEFAULT NULL,
  `UF` varchar(2) DEFAULT NULL,
  `Cidade` varchar(50) DEFAULT NULL,
  `Bairro` varchar(50) DEFAULT NULL,
  `Rua` varchar(50) DEFAULT NULL,
  `Numero` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `condominio`
--

INSERT INTO `condominio` (`IdCondominio`, `Nome`, `CEP`, `UF`, `Cidade`, `Bairro`, `Rua`, `Numero`) VALUES
(1, 'Condominio Solidario', '01227-200', 'SP', 'Sao Paulo', 'Bela Vista', 'Av. Angelica', 2565),
(2, 'Parque Residence', '07097380', 'SP', 'Guarulhos', 'Jardim Flor da Montanha', 'Rua Dona Tecla', 230);

-- --------------------------------------------------------

--
-- Estrutura da tabela `estado`
--

CREATE TABLE `estado` (
  `IdEstado` int NOT NULL,
  `Nome` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `estado`
--

INSERT INTO `estado` (`IdEstado`, `Nome`) VALUES
(1, 'Pendente'),
(2, 'Executando'),
(3, 'Concluido'),
(4, 'Cancelado');

-- --------------------------------------------------------

--
-- Estrutura da tabela `prioridade`
--

CREATE TABLE `prioridade` (
  `IdPrioridade` int NOT NULL,
  `Nome` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `prioridade`
--

INSERT INTO `prioridade` (`IdPrioridade`, `Nome`) VALUES
(1, 'Alta'),
(2, 'Média'),
(3, 'Baixa');

-- --------------------------------------------------------

--
-- Estrutura da tabela `servicos`
--

CREATE TABLE `servicos` (
  `IdServico` int NOT NULL,
  `IdCondominio` int DEFAULT NULL,
  `IdPrioridade` int DEFAULT NULL,
  `Nome` varchar(200) DEFAULT NULL,
  `Descricao` varchar(480) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `servicos`
--

INSERT INTO `servicos` (`IdServico`, `IdCondominio`, `IdPrioridade`, `Nome`, `Descricao`) VALUES
(1, 1, 1, 'Ida ao mercado', 'Uma ida ao mercado para os vizinhos é tudo que você precisa fazer para melhorar o dia de alguém e preservar a saúde deles. A tarefa é combinada entre os vizinhos e a localização do mercado, bem como a quantidade das compras, também.'),
(2, 1, 1, 'Ida a farmácia', 'Ficar doente na pandemia é algo preocupante, mas mais preocupante ainda é não ter um remédio na mão quando precisamos. Essa tarefa é feita, basicamente, por pegar remédios que precisem de receita ou mesmo aquele comprimido urgente para sanar aquela dorzinha de cabeça que não passa. Assim como as outras, essa tarefa é combinada entre os vizinhos.'),
(3, 1, 1, 'Doação de alimentos', 'O objetivo do projeto é despertar a solidariedade entre todas as pessoas, e a doação de alimentos define bem o que é isso. Eles podem ser doados em todos os condomínios e o apartamento que abrir o chamado será o responsável por sua coleta, os alimentos serão destinados a uma instituição nomeada de antemão pelo apartamento coletor, ou há uma das ONGs parceiras.'),
(4, 1, 2, 'Doação de itens de higiene', 'Eles podem ser doados em todos os condomínios e o apartamento que abrir o chamado será o responsável por sua coleta os itens de higiene que podem ir desde sabonetes até cremes dentais e escovas serão destinados a uma instituição nomeada de antemão pelo apartamento coletor, ou há uma das ONGs parceiras.'),
(5, 1, 2, 'Carona de meios de transporte de urgência', 'Ninguém está livre de imprevistos. Caso alguém precise ir para o hospital,ou de socorro imediato, ou mesmo tenha algum tipo de compromisso que precise urgente de uma carona, esse é o chamado certo para ser aberto. Vale lembrar que são caronas e meios de transporte de urgência. Não é para dar uma de uber particular do condomínio!'),
(6, 1, 2, 'Conserto de equipamentos', 'Esse chamado de ajuda pode ser aberto para você convidar aquele seu vizinho gente boa e que entende de T.I para dar aquele grau no seu maquinário, e salvar você quando a sua impressora não estiver sincronizada ou quando você se deparar com uma tela azul da morte.'),
(7, 1, 3, 'Passeio com pets', 'Muita gente está trabalhando de casa e evita ao máximo de sair, deixando de lado os passeios diários com os pets, e aquela andada básica na pracinha perto de casa. É aqui que você pode abrir um chamado de ajuda para que alguém pertinho de você e que ame animais te ajude com essa tarefa.'),
(8, 1, 3, 'Tarefas domesticas e serviços manuais', 'Pessoas com algum tipo de limitação motora contavam com ajuda para tarefas domésticas e serviços manuais. Com a pandemia, as pessoas que cuidavam disso podem não estar mais disponíveis. É ai que aquele vizinho gente boa e que tem garra e energia para ajudar as pessoas entra, fazendo uma comida, limpando algum cômodo, ajudando a mover objetos pesados, ou mesmo dando aquele talento no serviço de casa.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tarefas`
--

CREATE TABLE `tarefas` (
  `IdTarefa` int NOT NULL,
  `IdCondominio` int DEFAULT NULL,
  `IdVoluntario` int DEFAULT NULL,
  `IdApoiado` int DEFAULT NULL,
  `IdServico` int DEFAULT NULL,
  `IdEstado` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `tarefas`
--

INSERT INTO `tarefas` (`IdTarefa`, `IdCondominio`, `IdVoluntario`, `IdApoiado`, `IdServico`, `IdEstado`) VALUES
(1, 1, 1, 2, 1, 1),
(2, 1, 1, 2, 4, 1),
(3, 1, 1, 2, 7, 1),
(4, 1, 1, 2, 1, 2),
(5, 1, 1, 2, 1, 3),
(6, 1, 1, 2, 1, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `IdUsuario` int NOT NULL,
  `IdCondominio` int DEFAULT NULL,
  `Administrador` tinyint(1) DEFAULT '0',
  `Ativo` tinyint(1) DEFAULT '0',
  `Nome` varchar(50) DEFAULT NULL,
  `Bloco` varchar(5) DEFAULT NULL,
  `Apartamento` varchar(5) DEFAULT NULL,
  `Telefone` varchar(15) DEFAULT NULL,
  `Documento` varchar(15) DEFAULT NULL,
  `Senha` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `IdCondominio`, `Administrador`, `Ativo`, `Nome`, `Bloco`, `Apartamento`, `Telefone`, `Documento`, `Senha`) VALUES
(1, 1, 1, 1, 'Marco', '1', '34', '9999-9999', '9999999999', NULL),
(2, 2, 1, 1, 'Paulo', '7', '92', '90900-9900', '999999999', NULL),
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, 'jao', '3', '12', '12345678', NULL, '123'),
(6, NULL, NULL, NULL, 'soidisodj', '3', '12', '123456789', NULL, '123'),
(7, NULL, NULL, NULL, 'sondo', '3', '12', NULL, NULL, '123'),
(8, NULL, NULL, NULL, 'Alek', '3', '12', NULL, NULL, '123');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `condominio`
--
ALTER TABLE `condominio`
  ADD PRIMARY KEY (`IdCondominio`);

--
-- Índices para tabela `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`IdEstado`);

--
-- Índices para tabela `prioridade`
--
ALTER TABLE `prioridade`
  ADD PRIMARY KEY (`IdPrioridade`);

--
-- Índices para tabela `servicos`
--
ALTER TABLE `servicos`
  ADD PRIMARY KEY (`IdServico`),
  ADD KEY `IdCondominio` (`IdCondominio`),
  ADD KEY `IdPrioridade` (`IdPrioridade`);

--
-- Índices para tabela `tarefas`
--
ALTER TABLE `tarefas`
  ADD PRIMARY KEY (`IdTarefa`),
  ADD KEY `IdCondominio` (`IdCondominio`),
  ADD KEY `IdVoluntario` (`IdVoluntario`),
  ADD KEY `IdApoiado` (`IdApoiado`),
  ADD KEY `IdServico` (`IdServico`),
  ADD KEY `IdEstado` (`IdEstado`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IdUsuario`),
  ADD KEY `IdCondominio` (`IdCondominio`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `condominio`
--
ALTER TABLE `condominio`
  MODIFY `IdCondominio` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `estado`
--
ALTER TABLE `estado`
  MODIFY `IdEstado` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `prioridade`
--
ALTER TABLE `prioridade`
  MODIFY `IdPrioridade` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `servicos`
--
ALTER TABLE `servicos`
  MODIFY `IdServico` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `tarefas`
--
ALTER TABLE `tarefas`
  MODIFY `IdTarefa` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IdUsuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `servicos`
--
ALTER TABLE `servicos`
  ADD CONSTRAINT `servicos_ibfk_1` FOREIGN KEY (`IdCondominio`) REFERENCES `condominio` (`IdCondominio`),
  ADD CONSTRAINT `servicos_ibfk_2` FOREIGN KEY (`IdPrioridade`) REFERENCES `prioridade` (`IdPrioridade`);

--
-- Limitadores para a tabela `tarefas`
--
ALTER TABLE `tarefas`
  ADD CONSTRAINT `tarefas_ibfk_1` FOREIGN KEY (`IdCondominio`) REFERENCES `condominio` (`IdCondominio`),
  ADD CONSTRAINT `tarefas_ibfk_2` FOREIGN KEY (`IdVoluntario`) REFERENCES `usuario` (`IdUsuario`),
  ADD CONSTRAINT `tarefas_ibfk_3` FOREIGN KEY (`IdApoiado`) REFERENCES `usuario` (`IdUsuario`),
  ADD CONSTRAINT `tarefas_ibfk_4` FOREIGN KEY (`IdServico`) REFERENCES `servicos` (`IdServico`),
  ADD CONSTRAINT `tarefas_ibfk_5` FOREIGN KEY (`IdEstado`) REFERENCES `estado` (`IdEstado`);

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`IdCondominio`) REFERENCES `condominio` (`IdCondominio`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
