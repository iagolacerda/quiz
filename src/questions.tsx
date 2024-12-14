const questions = [
  {
    id: 1,
    question: 'Qual foi o sinal que Deus deu a Noé, como promessa de não mais destruir a terra com água?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Um arco nas nuvens', isCorrect: true },
      { checked: false, option: 'B', text: 'Um castiçal com sete luzes', isCorrect: false },
      { checked: false, option: 'C', text: 'Um arco-irís', isCorrect: false },
      { checked: false, option: 'D', text: 'Um anel de ouro', isCorrect: false },
    ],
    context: `O sinal dado a Noé foi o arco-íris, representando a aliança de Deus de não mais destruir a terra com um dilúvio (Gênesis 9:12-17).`
  },
  {
    id: 2,
    question: 'Quantos eram os apóstolos de Jesus?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '12', isCorrect: true },
      { checked: false, option: 'B', text: '7', isCorrect: false },
      { checked: false, option: 'C', text: '14', isCorrect: false },
      { checked: false, option: 'D', text: '40', isCorrect: false },
    ],
    context: `Jesus escolheu 12 apostolos para segui-lo e ajudá-lo no ministério (Lucas 6:12-16), porém Ele tinha mais de 12 discípulos: João 6.66-67`
  },
  {
    id: 3,
    question: 'Como é dividida a estrutura do Antigo Testamento?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pentateuco, Livros Históricos, Livros Poéticos, Livros Proféticos', isCorrect: true },
      { checked: false, option: 'B', text: 'Lei, Sabedoria, Profecias, História', isCorrect: false },
      { checked: false, option: 'C', text: 'Pentateuco, Livros de Sabedoria, Profecias', isCorrect: false },
      { checked: false, option: 'D', text: 'História, Poesia, Sabedoria, Evangelhos', isCorrect: false },
    ],
    context: `O Antigo Testamento é tradicionalmente dividido em quatro grandes categorias: Pentateuco (os cinco primeiros livros), Livros Históricos, Livros Poéticos e Livros Proféticos.`
  },
  {
    id: 4,
    question: 'O que Dalila era, segundo a Bíblia?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Prostituta', isCorrect: false },
      { checked: false, option: 'B', text: 'Viúva', isCorrect: false },
      { checked: false, option: 'C', text: 'Mulher contratada pelos filisteus para trair Sansão', isCorrect: true },
      { checked: false, option: 'D', text: 'Esposa de Sansão', isCorrect: false },
    ],
    context: `A Bíblia não menciona que Dalila era prostituta. Ela era uma mulher do vale de Soreque contratada pelos filisteus para descobrir o segredo da força de Sansão (Juízes 16).`
  },
  {
    id: 5,
    question: 'Como Elias foi levado aos céus?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Em uma carruagem de fogo', isCorrect: false },
      { checked: false, option: 'B', text: 'Nas asas de um anjo', isCorrect: false },
      { checked: false, option: 'C', text: 'Em um carro celestial', isCorrect: false },
      { checked: false, option: 'D', text: 'Em um redemoinho', isCorrect: true },
    ],
    context: `A Bíblia descreve que Elias foi levado ao céu em um redemoinho de fogo, e não em uma carruagem ou carro celestial. (2 Reis 2:11)`
  },
  {
    id: 6,
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Monte Horebe, viu uma chama de fogo no meio de uma sarça.', isCorrect: true },
      { checked: false, option: 'B', text: 'Monte Sinai, viu as tábuas da Lei escritas por Deus.', isCorrect: false },
      { checked: false, option: 'C', text: 'Monte Sião, viu uma brisa calma e um terremoto.', isCorrect: false },
      { checked: false, option: 'D', text: 'Monte Carmelo, viu um carneiro amarrado e disse: Deus proverá.', isCorrect: false }
    ],
    context: `Essa pergunta refere-se ao episódio bíblico em que Moisés encontra Deus pela primeira vez, de acordo com o livro do Êxodo.`
  },
  {
    id: 7,
    question: 'Quem foi o primeiro rei de Israel?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Davi', isCorrect: false },
      { checked: false, option: 'B', text: 'Samuel', isCorrect: false },
      { checked: false, option: 'C', text: 'Salomão', isCorrect: false },
      { checked: false, option: 'D', text: 'Saul', isCorrect: true }
    ],
    context: `Essa pergunta refere-se ao episódio bíblico onde Saul é ungido como o primeiro rei de Israel, conforme descrito em 1 Samuel 9:15-17 e 1 Samuel 10:1.`
  },
  {
    id: 8,
    question: 'Qual foi o milagre que Jesus realizou em Caná da Galiléia no segundo capítulo do Evangelho de João?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Curou um endemoniado', isCorrect: false },
      { checked: false, option: 'B', text: 'Multiplicação de pães e peixes', isCorrect: false },
      { checked: false, option: 'C', text: 'Transformação da água em vinho', isCorrect: true },
      { checked: false, option: 'D', text: 'Cura da sogra de Pedro', isCorrect: false }
    ],
    context: `Essa pergunta se refere ao primeiro milagre de Jesus, quando ele transformou água em vinho na festa de Caná, conforme descrito em João 2:1-11.`
  },
  {
    id: 9,
    question: 'O que Maria Madalena era antes de encontrar com Jesus?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Uma prostituta', isCorrect: false },
      { checked: false, option: 'B', text: 'Uma mulher possuída por sete demônios', isCorrect: true },
      { checked: false, option: 'C', text: 'Uma das apóstolas de Jesus', isCorrect: false },
      { checked: false, option: 'D', text: 'A mãe de Jesus', isCorrect: false }
    ],
    context: `Antes de seguir Jesus, Maria Madalena era uma mulher possuída por sete demônios, e Jesus a curou, como descrito em Lucas 8:2. Ela se tornou uma seguidora fiel de Jesus. A representação de Maria Madalena como uma prostituta começou em 591, quando Papa Gregório I fundiu Maria Madalena, que foi apresentada em Lucas 8:2, com Maria de Betânia (Lucas 10:39) e a sem nome 'mulher pecadora' que ungiu os pés de Jesus em Lucas 7:36–50`
  },
  {
    id: 10,
    question: 'Quais foram as últimas palavras de Jesus na cruz antes de morrer?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Perdoa-lhes porque não sabem o que fazem', isCorrect: false },
      { checked: false, option: 'B', text: 'Pai, não perdi nenhum dos que me deste', isCorrect: false },
      { checked: false, option: 'C', text: 'Tenho sede!', isCorrect: false },
      { checked: false, option: 'D', text: 'Está consumado!', isCorrect: true }
    ],
    context: `As últimas palavras de Jesus na cruz, segundo o Evangelho de João 19:30, foram Está consumado!, indicando o cumprimento de sua missão de salvação.`
  },
  {
    id: 11,
    question: 'Quem foi a primeira pessoa a encontrar o túmulo de Jesus vazio, na manhã de domingo?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Maria, sua mãe', isCorrect: false },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'Maria Madalena', isCorrect: true },
      { checked: false, option: 'D', text: 'João', isCorrect: false }
    ],
    context: `De acordo com o Evangelho de João 20:1, Maria Madalena foi a primeira a encontrar o túmulo de Jesus vazio na manhã de domingo, após a ressurreição.`
  },
  {
    id: 12,
    question: 'Qual a cidade em que Jesus nasceu?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Nazaré', isCorrect: false },
      { checked: false, option: 'B', text: 'Belém', isCorrect: true },
      { checked: false, option: 'C', text: 'Galiléia', isCorrect: false },
      { checked: false, option: 'D', text: 'Jerusalém', isCorrect: false }
    ],
    context: `Segundo o Evangelho de Mateus 2:1 e Lucas 2:4-7, Jesus nasceu em Belém, uma cidade localizada na região da Judeia.`
  },
  {
    id: 13,
    question: 'Qual dos discípulos substituiu Judas Iscariotes depois da ressurreição de Jesus?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Matias', isCorrect: true },
      { checked: false, option: 'B', text: 'Mateus', isCorrect: false },
      { checked: false, option: 'C', text: 'José, o justo', isCorrect: false },
      { checked: false, option: 'D', text: 'Saulo', isCorrect: false }
    ],
    context: `Após a morte de Judas Iscariotes, os outros discípulos escolheram Matias para ocupar seu lugar, conforme descrito em Atos 1:15-26.`
  },
  {
    id: 14,
    question: 'Qual destes livros NÃO foi escrito pelo apóstolo Paulo?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Tito', isCorrect: false },
      { checked: false, option: 'B', text: 'Tiago', isCorrect: true },
      { checked: false, option: 'C', text: 'Romanos', isCorrect: false },
      { checked: false, option: 'D', text: 'Timóteo', isCorrect: false }
    ],
    context: `O livro de Tiago foi escrito pelo apóstolo Tiago, irmão de Jesus, e não por Paulo. Os outros livros listados foram escritos por Paulo.`
  },
  {
    id: 15,
    question: 'Num episódio com Jesus, quem é que estava preocupada e inquieta com muitas coisas? E quem escolheu a boa parte?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Maria Madalena e Joana mulher de Herodes', isCorrect: false },
      { checked: false, option: 'B', text: 'Maria de Betânia e Susana que ajudava com ofertas', isCorrect: false },
      { checked: false, option: 'C', text: 'Marta e Maria de Betânia', isCorrect: true },
      { checked: false, option: 'D', text: 'Maria de Betânia e Maria mãe de Jesus', isCorrect: false }
    ],
    context: `No Evangelho de Lucas 10:38-42, Marta estava preocupada com muitas coisas enquanto Maria de Betânia escolheu a boa parte, sentando-se aos pés de Jesus.`
  },
  {
    id: 16,
    question: 'Quem ressuscitou um jovem chamado Êutico?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jesus', isCorrect: false },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'Filipe', isCorrect: false },
      { checked: false, option: 'D', text: 'Paulo', isCorrect: true }
    ],
    context: `No livro de Atos 20:9-12, o apóstolo Paulo ressuscitou o jovem Êutico, que havia caído de uma janela e morrido durante um culto.`
  },
  {
    id: 17,
    question: 'Qual o nome e a idade da pessoa mais velha mencionada na Bíblia?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Enos', isCorrect: false },
      { checked: false, option: 'B', text: 'Noé', isCorrect: false },
      { checked: false, option: 'C', text: 'Matusalém', isCorrect: true },
      { checked: false, option: 'D', text: 'Rainha Ester', isCorrect: false }
    ],
    context: `Matusalém é a pessoa mais velha mencionada na Bíblia, com 969 anos de vida, conforme Gênesis 5:27.`
  },
  {
    id: 18,
    question: 'Em que momento Deus elegeu seus filhos?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'No Jardim do Éden', isCorrect: false },
      { checked: false, option: 'B', text: 'Antes da fundação do mundo', isCorrect: true },
      { checked: false, option: 'C', text: 'Desde a criação do mundo', isCorrect: false },
      { checked: false, option: 'D', text: 'Após o pecado de Adão', isCorrect: false }
    ],
    context: `Efésios 1:4 declara que Deus escolheu os seus filhos "antes da criação do mundo, para sermos santos e irrepreensíveis em sua presença". Isso frequentemente é confundido com Apocalipse 13:8, que menciona o "Cordeiro que foi morto desde a criação do mundo".`
  },
  {
    id: 19,
    question: 'Que rei de Israel, sentado em seu trono, em trajes reais, morreu comido por vermes? (Novo Testamento)',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Herodes', isCorrect: true },
      { checked: false, option: 'B', text: 'Manassés', isCorrect: false },
      { checked: false, option: 'C', text: 'Acabe', isCorrect: false },
      { checked: false, option: 'D', text: 'Josias', isCorrect: false }
    ],
    context: `O rei Herodes, descrito em Atos 12:21-23, morreu comido por vermes após não dar glória a Deus.`
  },
  {
    id: 20,
    question: 'Quem orou por Paulo, logo após ele ser encontrado por Jesus no caminho de Damasco?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Barnabé', isCorrect: true },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'D', text: 'Ananias', isCorrect: false }
    ],
    context: `Após o encontro de Paulo com Jesus no caminho de Damasco, Ananias orou por ele. Atos 9:10-19.`
  },
  {
    id: 21,
    question: 'Onde Paulo estava após seu encontro com Jesus no caminho de Damasco?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Na casa de Judas', isCorrect: true },
      { checked: false, option: 'B', text: 'Na casa de Ananias', isCorrect: false },
      { checked: false, option: 'C', text: 'Na casa de Barnabé', isCorrect: false },
      { checked: false, option: 'D', text: 'Na casa de Pedro', isCorrect: false }
    ],
    context: `Após o encontro com Jesus no caminho de Damasco, Paulo ficou cego e foi levado à casa de Judas, onde aguardou a visita de Ananias, conforme Atos 9:10-12.`
  },
  {
    id: 22,
    question: 'O que Zaqueu era antes de encontrar Jesus?', 
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Um ladrão', isCorrect: false },
      { checked: false, option: 'B', text: 'Um cobrador de impostos', isCorrect: true },
      { checked: false, option: 'C', text: 'Um fariseu', isCorrect: false },
      { checked: false, option: 'D', text: 'Um pescador', isCorrect: false }
    ],
    context: `Zaqueu era um cobrador de impostos, considerado impuro pelos judeus, mas após seu encontro com Jesus, ele se arrependeu e prometeu devolver o que havia tirado de maneira injusta, conforme Lucas 19:1-10.`
  },
  {
    id: 23,
    question: 'Quem foi a esposa de Moisés?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Zipora', isCorrect: true },
      { checked: false, option: 'B', text: 'Miriam', isCorrect: false },
      { checked: false, option: 'C', text: 'Raabe', isCorrect: false },
      { checked: false, option: 'D', text: 'Débora', isCorrect: false }
    ],
    context: `Zipora, filha de Jetro, sacerdote de Midiã, foi a esposa de Moisés, conforme descrito em Êxodo 2:21.`
  },
  {
    id: 24,
    question: 'Quem foi o apóstolo conhecido como o discípulo amado?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'C', text: 'João', isCorrect: true },
      { checked: false, option: 'D', text: 'André', isCorrect: false }
    ],
    context: `O apóstolo João é frequentemente referido como o 'discípulo amado' no evangelho de João`
  },
  {
    id: 25,
    question: 'Quem foi o primeiro apóstolo a ser martirizado?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'Tiago, filho de Zebedeu', isCorrect: true },
      { checked: false, option: 'C', text: 'João', isCorrect: false },
      { checked: false, option: 'D', text: 'André', isCorrect: false }
    ],
    context: `Tiago, filho de Zebedeu, foi o primeiro apóstolo martirizado, conforme descrito em Atos 12:1-2.`
  },
  {
    id: 26,
    question: 'Qual é o nome do homem que teve a visão de um grande lençol com animais impuros e foi instruído por Deus a matá-los e comê-los?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Paulo', isCorrect: false },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: true },
      { checked: false, option: 'C', text: 'João', isCorrect: false },
      { checked: false, option: 'D', text: 'Cornélio', isCorrect: false }
    ],
    context: `Pedro teve a visão do lençol com animais impuros, e a mensagem de Deus lhe ensinando que 'nada é impuro' conforme Atos 10:9-16.`
  },
  {
    id: 27,
    question: 'Quantos reis magos visitaram Jesus quando Ele nasceu?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Três', isCorrect: false },
      { checked: false, option: 'B', text: 'Quatro', isCorrect: false },
      { checked: false, option: 'C', text: 'Cinco', isCorrect: false },
      { checked: false, option: 'D', text: 'Não especificado', isCorrect: true }
    ],
    context: `A Bíblia não especifica o número exato de magos que visitaram Jesus, embora a tradição cristã frequentemente os descreve como três devido às três ofertas mencionadas: ouro, incenso e mirra, conforme Mateus 2:1-12.`
  },
  {
    id: 28,
    question: 'Quem foi o apóstolo que escreveu o livro de Apocalipse?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Paulo', isCorrect: false },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'João', isCorrect: true },
      { checked: false, option: 'D', text: 'Mateus', isCorrect: false }
    ],
    context: `O apóstolo João escreveu o livro de Apocalipse enquanto estava exilado na ilha de Patmos, conforme descrito em Apocalipse 1:9.`
  },
  {
    id: 29,
    question: 'Quantos dias Jesus passou no deserto sendo tentado pelo diabo?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Quarenta dias', isCorrect: true },
      { checked: false, option: 'B', text: 'Trinta dias', isCorrect: false },
      { checked: false, option: 'C', text: 'Trinta e três dias', isCorrect: false },
      { checked: false, option: 'D', text: 'Cinquenta dias', isCorrect: false }
    ],
    context: `Jesus passou 40 dias no deserto, sendo tentado pelo diabo, conforme descrito em Mateus 4:1-11.`
  },
  {
    id: 30,
    question: 'Qual foi o nome do homem que ajudou Jesus a carregar a cruz?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Simão Cirineu', isCorrect: true },
      { checked: false, option: 'B', text: 'José de Arimateia', isCorrect: false },
      { checked: false, option: 'C', text: 'Nicodemos', isCorrect: false },
      { checked: false, option: 'D', text: 'Bartimeu', isCorrect: false }
    ],
    context: `Simão Cirineu ajudou Jesus a carregar a cruz no caminho para o Calvário, conforme descrito em Marcos 15:21.`
  },
  {
    id: 31,
    question: 'Onde estava João quando escreveu o livro de Apocalipse?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Creta', isCorrect: false },
      { checked: false, option: 'B', text: 'Patmos', isCorrect: true },
      { checked: false, option: 'C', text: 'Éfeso', isCorrect: false },
      { checked: false, option: 'D', text: 'Roma', isCorrect: false }
    ],
    context: `João escreveu o livro de Apocalipse enquanto estava exilado na ilha de Patmos, conforme descrito em Apocalipse 1:9.`
  },
  {
    id: 32,
    question: 'Quem foi o apóstolo que escreveu o evangelho que começa com No princípio era o Verbo?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Mateus', isCorrect: false },
      { checked: false, option: 'B', text: 'Marcos', isCorrect: false },
      { checked: false, option: 'C', text: 'Lucas', isCorrect: false },
      { checked: false, option: 'D', text: 'João', isCorrect: true }
    ],
    context: `O Evangelho de João começa com a famosa frase 'No princípio era o Verbo', conforme descrito em João 1:1.`
  },
  {
    id: 33,
    question: 'Quantos livros do Novo Testamento foram escritos por Paulo?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '10', isCorrect: false },
      { checked: false, option: 'B', text: '12', isCorrect: false },
      { checked: false, option: 'C', text: '13', isCorrect: true },
      { checked: false, option: 'D', text: '14', isCorrect: false }
    ],
    context: `O apóstolo Paulo escreveu 13 livros do Novo Testamento, que incluem as cartas a várias igrejas e indivíduos`
  },
  {
    id: 34,
    question: 'Quem foi o governante romano que mandou matar os bebês em Belém, após o nascimento de Jesus?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'César Augusto', isCorrect: false },
      { checked: false, option: 'B', text: 'Herodes, o Grande', isCorrect: true },
      { checked: false, option: 'C', text: 'Tibério', isCorrect: false },
      { checked: false, option: 'D', text: 'Nero', isCorrect: false }
    ],
    context: `Herodes, o Grande, mandou matar os bebês em Belém para tentar eliminar o recém-nascido 'rei dos judeus', conforme descrito em Mateus 2:16.`
  },
  {
    id: 35,
    question: 'Qual foi o nome do irmão de Tiago, que também foi um dos apóstolos?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'João', isCorrect: true },
      { checked: false, option: 'B', text: 'Simão', isCorrect: false },
      { checked: false, option: 'C', text: 'André', isCorrect: false },
      { checked: false, option: 'D', text: 'Mateus', isCorrect: false }
    ],
    context: `João e Tiago eram irmãos e apóstolos de Jesus, conforme descrito em Mateus 4:21.`
  },
  {
    id: 36,
    question: 'Quem foi o apóstolo conhecido por duvidar da ressurreição de Jesus até ver as marcas em suas mãos?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'C', text: 'Tomé', isCorrect: true },
      { checked: false, option: 'D', text: 'Mateus', isCorrect: false }
    ],
    context: `Tomé foi o apóstolo que duvidou da ressurreição de Jesus e só acreditou ao ver as marcas nas mãos de Jesus, conforme descrito em João 20:24-29.`
  },
  {
    id: 37,
    question: 'Quem foi o primeiro a ver Jesus após sua ressurreição?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Maria Madalena', isCorrect: true },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'João', isCorrect: false },
      { checked: false, option: 'D', text: 'Tomé', isCorrect: false }
    ],
    context: `Maria Madalena foi a primeira pessoa a ver Jesus após sua ressurreição, conforme descrito em João 20:11-18.`
  },
  {
    id: 38,
    question: 'Qual era a profissão de Mateus antes de seguir Jesus?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pescador', isCorrect: false },
      { checked: false, option: 'B', text: 'Médico', isCorrect: false },
      { checked: false, option: 'C', text: 'Cobrador de impostos', isCorrect: true },
      { checked: false, option: 'D', text: 'Carpinteiro', isCorrect: false }
    ],
    context: `Mateus era cobrador de impostos antes de ser chamado por Jesus para ser um de seus discípulos, conforme descrito em Mateus 9:9.`
  },
  {
    id: 39,
    question: 'Qual era o nome do pai de João, o apóstolo?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Zebedeu', isCorrect: true },
      { checked: false, option: 'B', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'C', text: 'Simão', isCorrect: false },
      { checked: false, option: 'D', text: 'Judas', isCorrect: false }
    ],
    context: `O pai de João, o apóstolo, era Zebedeu, conforme descrito em Mateus 4:21.`
  },
  {
    id: 40,
    question: 'Quem foi o apóstolo que escreveu o livro de Atos dos Apóstolos?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'Paulo', isCorrect: false },
      { checked: false, option: 'C', text: 'João', isCorrect: false },
      { checked: false, option: 'D', text: 'Lucas', isCorrect: true }
    ],
    context: `Lucas foi o autor do livro de Atos dos Apóstolos, conforme descrito no início de Atos 1:1-2.`
  },
  {
    id: 41,
    question: 'Em qual cidade Paulo foi preso e teve um terremoto que abriu as portas da prisão?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Corinto', isCorrect: false },
      { checked: false, option: 'B', text: 'Filipos', isCorrect: true },
      { checked: false, option: 'C', text: 'Éfeso', isCorrect: false },
      { checked: false, option: 'D', text: 'Antióquia', isCorrect: false }
    ],
    context: `Paulo e Silas foram presos em Filipos, e um terremoto milagroso abriu as portas da prisão, conforme descrito em Atos 16:25-34.`
  },
  {
    id: 42,
    question: 'Quem foi o homem que caiu de uma janela e foi ressuscitado por Paulo?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Eutico', isCorrect: true },
      { checked: false, option: 'B', text: 'Timóteo', isCorrect: false },
      { checked: false, option: 'C', text: 'Lázaro', isCorrect: false },
      { checked: false, option: 'D', text: 'Barnabé', isCorrect: false }
    ],
    context: `Eutico foi o jovem que caiu de uma janela durante o discurso de Paulo e foi ressuscitado, conforme descrito em Atos 20:7-12.`
  },
  {
    id: 43,
    question: 'Quem foi picado por uma víbora enquanto estava em Malta?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'Paulo', isCorrect: true },
      { checked: false, option: 'C', text: 'Silas', isCorrect: false },
      { checked: false, option: 'D', text: 'Barnabé', isCorrect: false }
    ],
    context: `Paulo foi picado por uma víbora enquanto estava em Malta, mas não sofreu danos, como descrito em Atos 28:3-6.`
  },
  {
    id: 44,
    question: 'Qual foi o nome do fariseu que visitou Jesus à noite, conhecido por seu encontro com Ele sobre o novo nascimento?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Nicodemos', isCorrect: true },
      { checked: false, option: 'B', text: 'Saulo', isCorrect: false },
      { checked: false, option: 'C', text: 'Anás', isCorrect: false },
      { checked: false, option: 'D', text: 'Caifás', isCorrect: false }
    ],
    context: `Nicodemos foi o fariseu que visitou Jesus à noite, conforme descrito em João 3:1-21.`
  },
  {
    id: 45,
    question: 'Qual foi o nome do governador romano que interrogou Jesus antes de sua crucificação?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pôncio Pilatos', isCorrect: true },
      { checked: false, option: 'B', text: 'Felipe', isCorrect: false },
      { checked: false, option: 'C', text: 'Herodes Antipas', isCorrect: false },
      { checked: false, option: 'D', text: 'Lúcio', isCorrect: false }
    ],
    context: `Pôncio Pilatos foi o governador romano que interrogou Jesus antes de sua crucificação, conforme relatado em Mateus 27:11-26.`
  },
  {
    id: 46,
    question: 'Quem foi o primeiro discípulo a ser chamado por Jesus?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'André', isCorrect: true },
      { checked: false, option: 'C', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'D', text: 'João', isCorrect: false }
    ],
    context: `André, irmão de Pedro, foi o primeiro a ser chamado por Jesus, conforme relatado em João 1:35-42`
  },
  {
    id: 47,
    question: 'Qual o nome do pai de João e Tiago?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Simão', isCorrect: false },
      { checked: false, option: 'B', text: 'Zebedeu', isCorrect: true },
      { checked: false, option: 'C', text: 'Judas', isCorrect: false },
      { checked: false, option: 'D', text: 'Levi', isCorrect: false }
    ],
    context: `Zebedeu foi o pai de João e Tiago conforme descrito em Mateus 4:21.`
  },
  {
    id: 48,
    question: 'Qual o nome do chefe da sinagoga cuja filha foi ressuscitada por Jesus?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jairo', isCorrect: true },
      { checked: false, option: 'B', text: 'Zaqueu', isCorrect: false },
      { checked: false, option: 'C', text: 'Simão', isCorrect: false },
      { checked: false, option: 'D', text: 'Nicodemos', isCorrect: false }
    ],
    context: `Jairo foi o chefe da sinagoga cuja filha foi ressuscitada por Jesus, conforme relatado em Marcos 5:21-43.`
  },
  {
    id: 49,
    question: 'Quem foi o juiz de Israel que derrotou os midianitas com apenas 300 homens?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Débora', isCorrect: false },
      { checked: false, option: 'B', text: 'Sansão', isCorrect: false },
      { checked: false, option: 'C', text: 'Gideão', isCorrect: true },
      { checked: false, option: 'D', text: 'Jefté', isCorrect: false }
    ],
    context: `Gideão derrotou os midianitas com apenas 300 homens, conforme descrito em Juízes 7.`
  },
  {
    id: 50,
    question: 'Quem foi o juiz de Israel que fez um voto a Deus e sacrificou sua filha?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Gideão', isCorrect: false },
      { checked: false, option: 'B', text: 'Jefté', isCorrect: true },
      { checked: false, option: 'C', text: 'Eli', isCorrect: false },
      { checked: false, option: 'D', text: 'Sansão', isCorrect: false }
    ],
    context: `Jefté fez um voto a Deus dizendo que sacrificaria o primeiro ser vivo que saísse de sua casa, e esse foi sua filha, conforme descrito em Juízes 11.`
  },
  {
    id: 51,
    question: 'Qual juiz de Israel foi conhecido por sua força física e seu voto de nunca cortar o cabelo?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jefté', isCorrect: false },
      { checked: false, option: 'B', text: 'Débora', isCorrect: false },
      { checked: false, option: 'C', text: 'Sansão', isCorrect: true },
      { checked: false, option: 'D', text: 'Gideão', isCorrect: false }
    ],
    context: `Sansão é famoso por sua força e seu voto de nunca cortar o cabelo, conforme descrito em Juízes 13-16.`
  },
  {
    id: 52,
    question: 'Quem matou o rei Eglom de Moabe com uma espada afiada?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Gideão', isCorrect: false },
      { checked: false, option: 'B', text: 'Débora', isCorrect: false },
      { checked: false, option: 'C', text: 'Eúde', isCorrect: true },
      { checked: false, option: 'D', text: 'Sansão', isCorrect: false }
    ],
    context: `Eúde matou o rei Eglom de Moabe com uma espada afiada ao se infiltrar no palácio do rei, conforme descrito em Juízes 3:12-30.`
  },
  {
    id: 53,
    question: 'Qual juíza de Israel era também profetisa e liderou uma batalha contra os cananeus?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Débora', isCorrect: true },
      { checked: false, option: 'B', text: 'Raabe', isCorrect: false },
      { checked: false, option: 'C', text: 'Jael', isCorrect: false },
      { checked: false, option: 'D', text: 'Mical', isCorrect: false }
    ],
    context: `Débora, uma profetisa, foi uma das juízas de Israel e liderou a batalha contra os cananeus, conforme descrito em Juízes 4.`
  },
  {
    id: 54,
    question: 'Quem matou a rainha de Canaan, Sísera, ao fincar uma estaca na sua têmpora?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Débora', isCorrect: false },
      { checked: false, option: 'B', text: 'Jael', isCorrect: true },
      { checked: false, option: 'C', text: 'Raabe', isCorrect: false },
      { checked: false, option: 'D', text: 'Mical', isCorrect: false }
    ],
    context: `Jael matou Sísera, o comandante do exército cananeu, fincando uma estaca na sua têmpora, conforme descrito em Juízes 4:21.`
  },
  {
    id: 55,
    question: 'Qual juiz de Israel, após ser capturado pelos filisteus, destruiu o templo de Dagom?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Sansão', isCorrect: true },
      { checked: false, option: 'B', text: 'Gideão', isCorrect: false },
      { checked: false, option: 'C', text: 'Jephthé', isCorrect: false },
      { checked: false, option: 'D', text: 'Eúde', isCorrect: false }
    ],
    context: `Sansão destruiu o templo de Dagom, matando mais filisteus em sua morte do que em sua vida, conforme descrito em Juízes 16:30.`
  },
  {
    id: 56,
    question: 'Quem escreveu a carta aos Colossenses?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Paulo', isCorrect: true },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'D', text: 'João', isCorrect: false }
    ],
    context: `Paulo escreveu a carta aos Colossenses enquanto estava preso, como mencionado em Colossenses 1:1.`
  },
  {
    id: 57,
    question: 'Que discípulo de Jesus foi acordado por um Anjo do Senhor na prisão?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'B', text: 'João', isCorrect: false },
      { checked: false, option: 'C', text: 'Pedro', isCorrect: true },
      { checked: false, option: 'D', text: 'Paulo', isCorrect: false }
    ],
    context: `Em Atos 12:6-11, o anjo do Senhor liberta Pedro da prisão, guiando-o até a porta e instruindo-o a seguir em frente.`
  },
  {
    id: 58,
    question: 'João disse em Apocalipse que a besta que saiu do mar tinha quantos chifres?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Dez chifres', isCorrect: true },
      { checked: false, option: 'B', text: 'Cinco chifres', isCorrect: false },
      { checked: false, option: 'C', text: 'Sete chifres', isCorrect: false },
      { checked: false, option: 'D', text: 'Oito chifres', isCorrect: false }
    ],
    context: `Em Apocalipse 13:1, João descreve uma besta que saiu do mar com dez chifres e sete cabeças.`
  },
  {
    id: 59,
    question: `Em Romanos 6:23, Paulo afirma que o 'salário do pecado é a morte'. Qual é o restante do versículo?`,
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Mas o dom de Deus é a vida eterna em Cristo Jesus, nosso Senhor', isCorrect: true },
      { checked: false, option: 'B', text: 'Mas a graça de Deus é mais forte que o pecado', isCorrect: false },
      { checked: false, option: 'C', text: 'Mas Deus perdoa aos que se arrependem', isCorrect: false },
      { checked: false, option: 'D', text: 'Mas a misericórdia de Deus é para sempre', isCorrect: false }
    ],
    context: `Em Romanos 6:23, após afirmar que 'o salário do pecado é a morte', Paulo completa dizendo que 'o dom de Deus é a vida eterna em Cristo Jesus, nosso Senhor'.`
  },
  {
    id: 60,
    question: 'Qual foi a primeira pergunta que Pilatos fez a Jesus, quando O interrogou?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Você é o Rei dos Judeus?', isCorrect: true },
      { checked: false, option: 'B', text: 'Por que você foi acusado?', isCorrect: false },
      { checked: false, option: 'C', text: 'Você é o Cristo?', isCorrect: false },
      { checked: false, option: 'D', text: 'O que você fez para ser preso?', isCorrect: false }
    ],
    context: `Em João 18:33, Pilatos pergunta a Jesus: 'Você é o Rei dos Judeus?' durante o interrogatório antes da condenação.`
  },
  {
    id: 61,
    question: 'Jesus perguntou: “Contudo, quando o Filho do homem vier, encontrará...?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'paz na terra', isCorrect: false },
      { checked: false, option: 'B', text: 'amor na terra', isCorrect: false },
      { checked: false, option: 'C', text: 'fé na terra', isCorrect: true },
      { checked: false, option: 'D', text: 'esperança na terra', isCorrect: false }
    ],
    context: `Em Lucas 18:8, Jesus pergunta: “Contudo, quando o Filho do homem vier, encontrará fé na terra?'`
  },
  {
    id: 62,
    question: 'Em que cidade os discípulos dali, movidos pelo Espírito Santo, recomendaram a Paulo que não fosse a Jerusalém?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Éfeso', isCorrect: false },
      { checked: false, option: 'B', text: 'Césaréia', isCorrect: true },
      { checked: false, option: 'C', text: 'Antioquia', isCorrect: false },
      { checked: false, option: 'D', text: 'Corinto', isCorrect: false }
    ],
    context: `Em Atos 21:4, em Césaréia, os discípulos, movidos pelo Espírito Santo, advertiram Paulo a não ir a Jerusalém, pois ele enfrentaria dificuldades lá.`
  },
  {
    id: 63,
    question: 'A quem Pilatos desejava agradar quando soltou Barrabás?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Aos soldados romanos', isCorrect: false },
      { checked: false, option: 'B', text: 'A multidão', isCorrect: true },
      { checked: false, option: 'C', text: 'Aos sacerdotes e líderes religiosos', isCorrect: false },
      { checked: false, option: 'D', text: 'A César', isCorrect: false }
    ],
    context: `Em Mateus 27:15-26, Pilatos soltou Barrabás para agradar à multidão, que estava pedindo a liberação de Barrabás e a condenação de Jesus.`
  },
  {
    id: 64,
    question: 'De acordo com Jesus, quando um espírito imundo sai de uma pessoa, por onde ele passa?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Ele volta ao seu lugar de origem', isCorrect: false },
      { checked: false, option: 'B', text: 'Ele vai ao deserto, sem encontrar descanso', isCorrect: false },
      { checked: false, option: 'C', text: 'Ele passa por lugares áridos, buscando descanso', isCorrect: true },
      { checked: false, option: 'D', text: 'Ele passa por cidades em busca de refúgio', isCorrect: false }
    ],
    context: `Em Mateus 12:43-45, Jesus descreve a parábola do espírito imundo, que, ao sair de uma pessoa, passa por lugares áridos, buscando descanso, mas sem encontrá-lo.`
  },
  {
    id: 65,
    question: 'Quem disse: “Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá generosamente...?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Tiago', isCorrect: true },
      { checked: false, option: 'B', text: 'Paulo', isCorrect: false },
      { checked: false, option: 'C', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'D', text: 'João', isCorrect: false }
    ],
    context: `Em Tiago 1:5, Tiago ensina que, se alguém tem falta de sabedoria, deve pedir a Deus, que a dá generosamente a todos que pedem com fé.`
  },
  {
    id: 66,
    question: 'Quais discípulos perguntaram a Jesus se podiam fazer descer fogo do céu?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'João e Tiago', isCorrect: true },
      { checked: false, option: 'B', text: 'Pedro e João', isCorrect: false },
      { checked: false, option: 'C', text: 'Tiago e Pedro', isCorrect: false },
      { checked: false, option: 'D', text: 'André e Filipe', isCorrect: false }
    ],
    context: `Em Lucas 9:54, Tiago e João pediram a Jesus para fazer descer fogo do céu sobre uma cidade que não os recebeu, mas Jesus os repreendeu por isso.`
  },
  {
    id: 67,
    question: 'Qual era o nome da serpente de bronze que Moisés tinha feito?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Aserá', isCorrect: false },
      { checked: false, option: 'B', text: 'Leviatã', isCorrect: false },
      { checked: false, option: 'C', text: 'Neustã', isCorrect: true },
      { checked: false, option: 'D', text: 'Belial', isCorrect: false }
    ],
    context: `Em 2 Reis 18:4, é mencionado que o nome da serpente de bronze que Moisés fez foi Neustã, que mais tarde foi destruída pelo rei Ezequias por causa da idolatria associada a ela.`
  },
  {
    id: 68,
    question: 'Qual era o nome babilônico de Daniel?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Aspenaz', isCorrect: false },
      { checked: false, option: 'B', text: 'Beltessazar', isCorrect: true },
      { checked: false, option: 'C', text: 'Abede-Nego', isCorrect: false },
      { checked: false, option: 'D', text: 'Sadraque', isCorrect: false }
    ],
    context: `Em Daniel 1:7, o chefe dos eunucos deu a Daniel o nome babilônico de Beltessazar, enquanto os outros jovens receberam outros nomes, como Sadraque, Mesaque e Abede-Nego.`
  },
  {
    id: 69,
    question: 'Quais eram os nomes originais de Sadraque, Mesaque e Abede-Nego?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Daniel, Elias e Ezequiel', isCorrect: true },
      { checked: false, option: 'B', text: 'Ananias, Misael e Azarias', isCorrect: false },
      { checked: false, option: 'C', text: 'José, Levi e Simeão', isCorrect: false },
      { checked: false, option: 'D', text: 'João, Tiago e Felipe', isCorrect: false }
    ],
    context: `Em Daniel 1:6-7, Sadraque, Mesaque e Abede-Nego receberam seus nomes babilônicos, mas seus nomes originais eram Ananias, Misael e Azarias, respectivamente.`
  },
  {
    id: 70,
    question: 'Em quais livros da Bíblia não encontramos a palavra Deus?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jó e Malaquias', isCorrect: false },
      { checked: false, option: 'B', text: 'Ageu e Amós', isCorrect: false },
      { checked: false, option: 'C', text: 'Oséias e Eclesiastes', isCorrect: false },
      { checked: false, option: 'D', text: 'Ester e Cantares de Salomão', isCorrect: false }
    ],
    context: `Nos livros de Ester e Cantares de Salomão, a palavra 'Deus' não é mencionada diretamente. Embora o livro de Ester mencione o Rei persa e os eventos que envolvem a salvação de Israel, o nome de Deus não é diretamente citado.`
  },
  {
    id: 71,
    question: 'Quem escreveu a Epístola de Judas?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Judas, irmão de Tiago', isCorrect: true },
      { checked: false, option: 'B', text: 'Judas Iscariotes', isCorrect: false },
      { checked: false, option: 'C', text: 'Judas Tadeu', isCorrect: false },
      { checked: false, option: 'D', text: 'Judas, o Galileu', isCorrect: false }
    ],
    context: `A Epístola de Judas foi escrita por Judas, irmão de Tiago, conforme mencionado na introdução da carta. Ele não deve ser confundido com Judas Iscariotes, o traidor.`
  },
  {
    id: 72,
    question: 'Quem teve seu corpo disputado pelo arcanjo Miguel e o Diabo?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jesus', isCorrect: false },
      { checked: false, option: 'B', text: 'Eliseu', isCorrect: false },
      { checked: false, option: 'C', text: 'Moisés', isCorrect: true },
      { checked: false, option: 'D', text: 'Davi', isCorrect: false }
    ],
    context: `Em Judas 1:9, é mencionado que o arcanjo Miguel disputou com o Diabo pelo corpo de Moisés, mas não são fornecidos muitos detalhes sobre o motivo ou a natureza dessa disputa.`
  },
  {
    id: 73,
    question: 'A quem o Apóstolo Paulo chamou de médico amado?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jesus', isCorrect: false },
      { checked: false, option: 'B', text: 'Demas', isCorrect: false },
      { checked: false, option: 'C', text: 'Lucas', isCorrect: true },
      { checked: false, option: 'D', text: 'Timóteo', isCorrect: false }
    ],
    context: `Em Colossenses 4:14, Paulo se refere a Lucas, o autor do Evangelho de Lucas e de Atos dos Apóstolos, como 'médico amado', mostrando seu apreço e amizade por ele.`
  },
  {
    id: 74,
    question: 'Por quantas moedas Judas entregou Jesus?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '30 moedas de ouro', isCorrect: false },
      { checked: false, option: 'B', text: '30 moedas de prata', isCorrect: true },
      { checked: false, option: 'C', text: '100 denários', isCorrect: false },
      { checked: false, option: 'D', text: '10 dracmas', isCorrect: false }
    ],
    context: `Em Mateus 26:15, Judas Iscariotes entregou Jesus por 30 moedas de prata, o valor de um escravo, conforme profetizado no Antigo Testamento.`
  },
  {
    id: 75,
    question: 'Qual o discípulo que acompanhou Jesus até a sua crucificação?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'André', isCorrect: false },
      { checked: false, option: 'B', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'C', text: 'João', isCorrect: true },
      { checked: false, option: 'D', text: 'Pedro', isCorrect: false }
    ],
    context: `De acordo com João 19:26, João o discípulo amado, foi o único dos discípulos que permaneceu ao lado de Jesus até a crucificação, conforme o Evangelho de João.`
  },
  {
    id: 76,
    question: 'A estátua do sonho de Nabucodonosor era composta de quais elementos?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Toda em ouro.', isCorrect: false },
      { checked: false, option: 'B', text: 'Ouro, prata, bronze, ferro e barro.', isCorrect: true },
      { checked: false, option: 'C', text: 'Ouro, prata, bronze, ônix e ferro.', isCorrect: false },
      { checked: false, option: 'D', text: 'Ouro, prata, prata e barro.', isCorrect: false }
    ],
    context: `Em Daniel 2:31-33, o sonho de Nabucodonosor descreve uma estátua composta de cinco materiais: ouro, prata, bronze, ferro e barro, que representam diferentes reinos ao longo da história.`
  },
  {
    id: 77,
    question: 'Quanto tempo Jonas ficou preso dentro da barriga de um grande peixe?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '7 dias', isCorrect: false },
      { checked: false, option: 'B', text: '3 dias', isCorrect: true },
      { checked: false, option: 'C', text: '1 dia', isCorrect: false },
      { checked: false, option: 'D', text: '5 dias', isCorrect: false }
    ],
    context: `Em Jonas 1:17, o profeta Jonas foi engolido por um grande peixe e passou 3 dias e 3 noites em seu ventre, até ser vomitado na praia.`
  },
  {
    id: 78,
    question: 'Quem foram apelidados por Jesus de Boanerges, que significa Filhos do Trovão?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'João e Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'João e Tiago', isCorrect: true },
      { checked: false, option: 'C', text: 'Pedro e Tiago', isCorrect: false },
      { checked: false, option: 'D', text: 'Mateus e Tiago', isCorrect: false }
    ],
    context: `Em Marcos 3:17, Jesus deu o apelido de 'Boanerges', que significa 'Filhos do Trovão', aos irmãos João e Tiago, devido ao seu temperamento impetuoso e fervoroso.`
  },
  {
    id: 79,
    question: 'Quais foram os dois nomes indicados para substituir Judas Iscariotes?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Barsabás e Matias', isCorrect: true },
      { checked: false, option: 'B', text: 'Paulo e Matias', isCorrect: false },
      { checked: false, option: 'C', text: 'Paulo e José', isCorrect: false },
      { checked: false, option: 'D', text: 'Tiago e João', isCorrect: false }
    ],
    context: `Em Atos 1:23-26, os apóstolos escolheram dois homens para substituir Judas Iscariotes: Barsabás (também conhecido como Justo) e Matias. Depois de orar, foi Matias quem foi escolhido por sorteio.`
  },
  {
    id: 80,
    question: 'Adão viveu ao todo quantos anos?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '930 anos', isCorrect: true },
      { checked: false, option: 'B', text: '1000 anos', isCorrect: false },
      { checked: false, option: 'C', text: '500 anos', isCorrect: false },
      { checked: false, option: 'D', text: '800 anos', isCorrect: false }
    ],
    context: `Em Gênesis 5:5, é mencionado que Adão viveu 930 anos antes de morrer.`
  },
  {
    id: 81,
    question: 'Em qual dia da criação foi feito o sol, a lua e as estrelas?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '1º dia', isCorrect: false },
      { checked: false, option: 'B', text: '3º dia', isCorrect: false },
      { checked: false, option: 'C', text: '4º dia', isCorrect: true },
      { checked: false, option: 'D', text: '5º dia', isCorrect: false }
    ],
    context: `Em Gênesis 1:14-19, Deus criou o sol, a lua e as estrelas no 4º dia da criação para separar o dia da noite e para marcar as estações, os dias e os anos.`
  },
  {
    id: 82,
    question: 'Qual é o quinto livro do Novo Testamento?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Evangelho de Marcos', isCorrect: false },
      { checked: false, option: 'B', text: 'Carta aos Romanos', isCorrect: false },
      { checked: false, option: 'C', text: 'Atos dos Apóstolos', isCorrect: true },
      { checked: false, option: 'D', text: 'Evangelho de João', isCorrect: false }
    ],
    context: `O Atos dos Apóstolos é o 5º livro do Novo Testamento, e nele são relatadas as ações dos apóstolos, especialmente de Pedro e Paulo, após a ascensão de Jesus.`
  },
  {
    id: 83,
    question: 'Qual era o nome da mulher de Jó?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Abigail', isCorrect: false },
      { checked: false, option: 'B', text: 'Maria', isCorrect: false },
      { checked: false, option: 'C', text: 'Sara', isCorrect: false },
      { checked: false, option: 'D', text: 'A Bíblia não diz', isCorrect: true },
    ],
    context: `A Bíblia não menciona o nome da esposa de Jó. Embora ela tenha falado com Jó e apareça em algumas passagens, como Jó 2:9, seu nome não é revelado nas Escrituras.`
  },
  {
    id: 84,
    question: 'Quem Noé amaldiçoou após saber que foi visto em nudez?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Canaã', isCorrect: true },
      { checked: false, option: 'B', text: 'Cam', isCorrect: false },
      { checked: false, option: 'C', text: 'Jafé', isCorrect: false },
      { checked: false, option: 'D', text: 'Sem', isCorrect: false }
    ],
    context: `Em Gênesis 9:20-25, Noé amaldiçoou o filho de Cam, chamado Canaã, depois que ele viu a nudez de Noé. A Bíblia não diz exatamente o que aconteceu, mas o ato de Cam foi considerado desrespeitoso.`
  },
  {
    id: 85,
    question: 'Qual o maior salmo da Bíblia?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Salmo 23', isCorrect: false },
      { checked: false, option: 'B', text: 'Salmo 119', isCorrect: true },
      { checked: false, option: 'C',text: 'Salmo 51', isCorrect: false },
      { checked: false, option: 'D',text: 'Salmo 1', isCorrect: false }
    ],
    context: `O Salmo 119 é o maior salmo da Bíblia, com 176 versículos.`
  },
  {
    id: 86,
    question: 'Qual é o menor salmo da Bíblia?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Salmo 23', isCorrect: false },
      { checked: false, option: 'B', text: 'Salmo 117', isCorrect: true },
      { checked: false, option: 'C',text: 'Salmo 1', isCorrect: false },
      { checked: false, option: 'D',text: 'Salmo 133', isCorrect: false }
    ],
    context: `O Salmo 117 é o menor salmo da Bíblia, com apenas 2 versículos.`
  },
  {
    id: 87,
    question: 'Quem teve a vida prolongada por mais 15 anos após orar?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Enoque', isCorrect: false },
      { checked: false, option: 'B', text: 'Matusalém', isCorrect: false },
      { checked: false, option: 'C', text: 'Ezequias', isCorrect: true },
      { checked: false, option: 'D', text: 'Davi', isCorrect: false }
    ],
    context: `O rei Ezequias orou a Deus pedindo misericórdia, e Deus prolongou sua vida em 15 anos como resposta à sua oração (Isaías 38:1-5).`
  },
  {
    id: 87,
    question: 'Qual foi o profeta que surgiu depois de Malaquias?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Zacarias', isCorrect: false },
      { checked: false, option: 'B', text: 'Joel', isCorrect: false },
      { checked: false, option: 'C', text: 'João Batista', isCorrect: true },
      { checked: false, option: 'D', text: 'Elias', isCorrect: false }
    ],
    context: `Após o ministério de Malaquias, o próximo profeta registrado no Novo Testamento é João Batista, que preparou o caminho para a vinda de Jesus (Mateus 3:1-3).`
  },
  {
    id: 88,
    question: 'Quem foi o profeta que ungiu o primeiro rei de Israel?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Samuel', isCorrect: true },
      { checked: false, option: 'B', text: 'Elias', isCorrect: false },
      { checked: false, option: 'C', text: 'Isaías', isCorrect: false },
      { checked: false, option: 'D', text: 'Eliseu', isCorrect: false }
    ],
    context: `O profeta Samuel foi quem ungiu Saul como o primeiro rei de Israel, conforme registrado em 1 Samuel 10:1.`
  },
  {
    id: 89,
    question: 'Quem foi o profeta que desafiou os profetas de Baal no Monte Carmelo?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Elias', isCorrect: true },
      { checked: false, option: 'B', text: 'Eliseu', isCorrect: false },
      { checked: false, option: 'C', text: 'Isaías', isCorrect: false },
      { checked: false, option: 'D', text: 'Jeremias', isCorrect: false }
    ],
    context: `O profeta Elias desafiou os profetas de Baal no Monte Carmelo, pedindo a Deus para enviar fogo do céu e provar que o Senhor era o verdadeiro Deus (1 Reis 18:20-40).`
  },
  {
    id: 90,
    question: 'Quem foi o profeta que escreveu o Livro das Lamentações?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Daniel', isCorrect: false },
      { checked: false, option: 'B', text: 'Isaías', isCorrect: false },
      { checked: false, option: 'C', text: 'Jeremias', isCorrect: true },
      { checked: false, option: 'D', text: 'Ezequiel', isCorrect: false }
    ],
    context: `O Livro das Lamentações foi escrito pelo profeta Jeremias, que lamentou a destruição de Jerusalém e o sofrimento do povo de Deus (Lamentações 1:1).`
  },
  {
    id: 91,
    question: 'Que povo recebeu Paulo com grande interesse, e examinou as Escrituras, para ver se tudo era verdade?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Os tessalônios', isCorrect: false },
      { checked: false, option: 'B', text: 'Os bereanos', isCorrect: true },
      { checked: false, option: 'C', text: 'Os atenienses', isCorrect: false },
      { checked: false, option: 'D', text: 'Os coríntios', isCorrect: false }
    ],
    context: `Os bereanos são mencionados em Atos 17:11 como pessoas que ouviram as pregações de Paulo e verificaram as Escrituras para ver se o que ele dizia estava de acordo com a Palavra de Deus.`
  },
  {
    id: 92,
    question: 'Quem foi o apóstolo que teve uma visão na estrada de Damasco e ficou cego temporariamente?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'João', isCorrect: false },
      { checked: false, option: 'C', text: 'Paulo', isCorrect: true },
      { checked: false, option: 'D', text: 'Tiago', isCorrect: false }
    ],
    context: `Paulo, antes conhecido como Saulo, teve uma visão de Jesus na estrada de Damasco, durante a qual ficou temporariamente cego (Atos 9:3-9).`
  },
  {
    id: 93,
    question: 'Que discípulo curou Paulo após sua cegueira temporária?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'Barnabé', isCorrect: false },
      { checked: false, option: 'C', text: 'Ananias', isCorrect: true },
      { checked: false, option: 'D', text: 'Lucas', isCorrect: false }
    ],
    context: `Ananias foi um discípulo de Damasco que, obedecendo a instruções de Deus, curou Paulo de sua cegueira temporária (Atos 9:17-18).`
  },
  {
    id: 94,
    question: 'O que deixou Paulo indignado em Atenas?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'A promiscuidade do povo grego.', isCorrect: false },
      { checked: false, option: 'B', text: 'A quantidade de ídolos na cidade.', isCorrect: true },
      { checked: false, option: 'C', text: 'A falta de sinagogas na cidade.', isCorrect: false },
      { checked: false, option: 'D', text: 'A falta de templos para adorar Deus.', isCorrect: false }
    ],
    context: `Paulo ficou indignado ao ver a quantidade de ídolos na cidade de Atenas. Ele ficou profundamente perturbado ao observar que a cidade estava cheia de ídolos e levou essa preocupação ao público (Atos 17:16).`
  },
  {
    id: 95,
    question: 'Em Atenas, onde Paulo foi levado para falar sobre Jesus Cristo?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Coliseu.', isCorrect: false },
      { checked: false, option: 'B', text: 'Santuário.', isCorrect: false },
      { checked: false, option: 'C', text: 'Areópago', isCorrect: true },
      { checked: false, option: 'D', text: 'Teatro de Dionísio.', isCorrect: false }
    ],
    context: `Paulo foi levado ao Areópago, um local de grande importância em Atenas, para falar sobre Jesus Cristo e ressurgimento, conforme registrado em Atos 17:19-22.`
  },
  {
    id: 96,
    question: 'Qual foi o destino de Paulo depois de Atenas?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Tessalônica', isCorrect: false },
      { checked: false, option: 'B', text: 'Roma', isCorrect: false },
      { checked: false, option: 'C', text: 'Corinto', isCorrect: true },
      { checked: false, option: 'D', text: 'Éfeso', isCorrect: false }
    ],
    context: `Após sua visita a Atenas, Paulo seguiu para Corinto, onde pregou e fundou uma igreja, conforme registrado em Atos 18:1-11.`
  },
  {
    id: 97,
    question: 'Quais são as 7 igrejas que receberam as cartas em Apocalipse?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Éfeso, Filipo, Pérgamo, Tiatira, Creta, Filadélfia e Laodiceia', isCorrect: false },
      { checked: false, option: 'B', text: 'Éfeso, Esmirna, Pérgamo, Tiatira, Sardes, Filadélfia e Laodiceia', isCorrect: true },
      { checked: false, option: 'C', text: 'Éfeso, Macedônia, Pérgamo, Filipo, Tessalônica, Filadélfia e Laodiceia', isCorrect: false },
      { checked: false, option: 'D', text: 'Éfeso, Roma, Pérgamo, Tiatira, Corinto, Filadélfia e Laodiceia', isCorrect: false }
    ],
    context: `As sete igrejas mencionadas no livro de Apocalipse são: Éfeso, Esmirna, Pérgamo, Tiatira, Sardes, Filadélfia e Laodiceia, e receberam cartas com mensagens de Jesus Cristo (Apocalipse 2-3).`
  },
  {
    id: 98,
    question: 'Quantas taças da ira de Deus foram derramadas em Apocalipse?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '6 taças', isCorrect: false },
      { checked: false, option: 'B', text: '12 taças', isCorrect: false },
      { checked: false, option: 'C', text: '7 taças', isCorrect: true },
      { checked: false, option: 'D', text: '10 taças', isCorrect: false }
    ],
    context: `Em Apocalipse 16, são mencionadas sete taças da ira de Deus, que são derramadas sobre a terra como juízos finais antes da segunda vinda de Cristo.`
  },
  {
    id: 99,
    question: 'Sobre Jesus, é CORRETO afirmar:',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jesus foi batizado por João Batista no Rio Jordão para a remissão dos pecados', isCorrect: true },
      { checked: false, option: 'B', text: 'Não foi filho único de Maria e José', isCorrect: false },
      { checked: false, option: 'C', text: 'Seu sobrenome era Cristo, nome da família do pai adotivo, José', isCorrect: false },
      { checked: false, option: 'D', text: 'Jesus nunca falou sobre o inferno ou condenação', isCorrect: false }
    ],
    context: `Jesus tinha outros irmãos: João 7.3-5.`
  },
  {
    id: 100,
    question: 'Quantos espiões foram enviados para reconhecimento da Terra Prometida?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '24', isCorrect: false },
      { checked: false, option: 'B', text: '12', isCorrect: true },
      { checked: false, option: 'C', text: '40', isCorrect: false },
      { checked: false, option: 'D', text: '2', isCorrect: false }
    ],
    context: `Moisés enviou 12 espiões para explorar a Terra Prometida, sendo um de cada tribo de Israel. Apenas dois deles, Josué e Calebe, voltaram com um relatório positivo, enquanto os outros 10 desanimaram o povo (Números 13).`
  },
  {
    id: 101,
    question: 'Quem era irmã de Lia?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Raquel', isCorrect: true },
      { checked: false, option: 'B', text: 'Sete', isCorrect: false },
      { checked: false, option: 'C', text: 'Hagar', isCorrect: false },
      { checked: false, option: 'D', text: 'Sara', isCorrect: false }
    ],
    context: `Lia e Raquel são personagens bíblicas. Elas eram irmãs e filhas de Labão.`
  },
  {
    id: 102,
    question: 'André era irmão de qual apóstolo?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: true },
      { checked: false, option: 'B', text: 'João', isCorrect: false },
      { checked: false, option: 'C', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'D', text: 'Mateus', isCorrect: false }
    ],
    context: `André e Pedro eram irmãos e ambos foram apóstolos de Jesus, conhecidos por serem pescadores antes de seguir o mestre.`
  },
  {
    id: 103,
    question: 'Quem foi instruído "aos pés de Gamaliel"?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jesus', isCorrect: false },
      { checked: false, option: 'B', text: 'Paulo', isCorrect: true },
      { checked: false, option: 'C', text: 'João', isCorrect: false },
      { checked: false, option: 'D', text: 'Tiago', isCorrect: false }
    ],
    context: `O apóstolo Paulo foi instruído aos pés de Gamaliel, conforme Atos 22:3.`
  },
  {
    id: 104,
    question: 'Qual dessas parábolas Jesus não contou?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'A parábola da dracma perdida', isCorrect: false },
      { checked: false, option: 'B', text: 'A parábola do soldado prudente', isCorrect: true },
      { checked: false, option: 'C', text: 'A parábola do juiz iníquo', isCorrect: false },
      { checked: false, option: 'D', text: 'A parábola do bom samaritano', isCorrect: false }
    ],
    context: `A parábola do soldado prudente não é uma parábola contada por Jesus, conforme os Evangelhos. Ela é uma invenção posterior e não aparece nas Escrituras.`
  },
  {
    id: 105,
    question: 'Quem foi que andou com Deus e não se viu mais por ter sido transladado?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Enoque', isCorrect: true },
      { checked: false, option: 'B', text: 'Elias', isCorrect: false },
      { checked: false, option: 'C', text: 'Moisés', isCorrect: false },
      { checked: false, option: 'D', text: 'Abel', isCorrect: false }
    ],
    context: `Enoque andou com Deus e foi transladado, conforme Gênesis 5:24.`
  },
  {
    id: 106,
    question: 'Quem ficou temporariamente mudo?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Zacarias', isCorrect: true },
      { checked: false, option: 'B', text: 'Obadias', isCorrect: false },
      { checked: false, option: 'C', text: 'Jeremias', isCorrect: false },
      { checked: false, option: 'D', text: 'Isaías', isCorrect: false }
    ],
    context: `Zacarias ficou temporariamente mudo após duvidar da mensagem do anjo Gabriel, conforme Lucas 1:20.`
  },
  {
    id: 107,
    question: 'Qual tribo ficou responsável por cuidar do templo e guiar o povo na adoração a Deus?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Manassés', isCorrect: false },
      { checked: false, option: 'B', text: 'Levi', isCorrect: true },
      { checked: false, option: 'C', text: 'Judá', isCorrect: false },
      { checked: false, option: 'D', text: 'Efraim', isCorrect: false }
    ],
    context: `A tribo de Levi foi designada para servir no templo e guiar o povo na adoração a Deus, conforme Números 3:6-8.`
  },
  {
    id: 108,
    question: 'Quem foi Asafe?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Rei de Judá', isCorrect: false },
      { checked: false, option: 'B', text: 'Levita', isCorrect: true },
      { checked: false, option: 'C', text: 'Fariseu', isCorrect: false },
      { checked: false, option: 'D', text: 'Profeta', isCorrect: false }
    ],
    context: `Asafe foi um levita e músico que serviu no templo de Jerusalém e é conhecido por ser um dos autores de vários salmos, conforme 1 Crônicas 6:39.`
  },
  {
    id: 109,
    question: 'Quantos livros tem a Bíblia protestante e a Bíblia Católica?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '66 na protestante e 73 na católica', isCorrect: true },
      { checked: false, option: 'B', text: '66 na protestante e 70 na católica', isCorrect: false },
      { checked: false, option: 'C', text: '65 na protestante e 71 na católica', isCorrect: false },
      { checked: false, option: 'D', text: '68 na protestante e 74 na católica', isCorrect: false }
    ],
    context: `A Bíblia protestante tem 66 livros, enquanto a Bíblia Católica inclui 73 livros, sendo que a diferença se deve aos livros deuterocanônicos.`
  },
  {
    id: 110,
    question: 'Qual profeta era calvo e chegou a ser zombado pela sua aparência?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jonas', isCorrect: false },
      { checked: false, option: 'B', text: 'Samuel', isCorrect: false },
      { checked: false, option: 'C', text: 'Eliseu', isCorrect: true },
      { checked: false, option: 'D', text: 'Isaías', isCorrect: false }
    ],
    context: `O profeta Eliseu era calvo e foi zombado por um grupo de jovens, conforme 2 Reis 2:23-25.`
  },
  {
    id: 111,
    question: 'Quem escreveu o Livro de Apocalipse?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Paulo', isCorrect: false },
      { checked: false, option: 'B', text: 'João Batista', isCorrect: false },
      { checked: false, option: 'C', text: 'João', isCorrect: true },
      { checked: false, option: 'D', text: 'Pedro', isCorrect: false }
    ],
    context: `O Livro de Apocalipse foi escrito pelo apóstolo João, enquanto ele estava exilado na ilha de Patmos, conforme Apocalipse 1:9.`
  },
  {
    id: 112,
    question: 'A história da Torre de Babel se encontra em que livro bíblico?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Apocalipse', isCorrect: false },
      { checked: false, option: 'B', text: 'Ezequiel', isCorrect: false },
      { checked: false, option: 'C', text: 'Gênesis', isCorrect: true },
      { checked: false, option: 'D', text: 'Êxodo', isCorrect: false }
    ],
    context: `A história da Torre de Babel está registrada em Gênesis 11:1-9, onde Deus confunde as línguas dos homens para evitar que construam uma torre até o céu.`
  },
  {
    id: 113,
    question: 'Qual era a profissão de Pedro antes de seguir Jesus?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Publicano', isCorrect: false },
      { checked: false, option: 'B', text: 'Pescador', isCorrect: true },
      { checked: false, option: 'C', text: 'Pedreiro', isCorrect: false },
      { checked: false, option: 'D', text: 'Pastor', isCorrect: false }
    ],
    context: `Pedro era pescador antes de seguir Jesus, conforme Mateus 4:18-19, quando Jesus o chamou para ser "pescador de homens".`
  },
  {
    id: 114,
    question: 'Qual desses personagens também era romano?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Paulo', isCorrect: true },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'João', isCorrect: false },
      { checked: false, option: 'D', text: 'Lucas', isCorrect: false }
    ],
    context: `Paulo era cidadão romano por nascimento, conforme Atos 22:25-28, o que lhe concedia certos direitos dentro do Império Romano.`
  },
  {
    id: 115,
    question: 'Quem apareceu no monte da transfiguração junto com Jesus?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Abraão e Moisés', isCorrect: false },
      { checked: false, option: 'B', text: 'Moisés e Elias', isCorrect: true },
      { checked: false, option: 'C', text: 'Elias e Eliseu', isCorrect: false },
      { checked: false, option: 'D', text: 'Pedro e Tiago', isCorrect: false }
    ],
    context: `No monte da transfiguração, Jesus foi acompanhado por Moisés e Elias, conforme Mateus 17:1-3.`
  },
  {
    id: 116,
    question: 'Quem era o pai de Salomão?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Saul', isCorrect: false },
      { checked: false, option: 'B', text: 'Davi', isCorrect: true },
      { checked: false, option: 'C', text: 'Jônatas', isCorrect: false },
      { checked: false, option: 'D', text: 'Samuel', isCorrect: false }
    ],
    context: `Salomão era filho de Davi, conforme 1 Reis 1:28-30.`
  },
  {
    id: 117,
    question: 'Qual o nome da mãe de João Batista?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Sara', isCorrect: false },
      { checked: false, option: 'B', text: 'Maria', isCorrect: false },
      { checked: false, option: 'C', text: 'Isabel', isCorrect: true },
      { checked: false, option: 'D', text: 'Ana', isCorrect: false }
    ],
    context: `O nome da mãe de João Batista era Isabel, conforme Lucas 1:57-60.`
  },
  {
    id: 118,
    question: 'Qual era o nome da comida que "caía do céu"?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Banquete', isCorrect: false },
      { checked: false, option: 'B', text: 'Iguaria', isCorrect: false },
      { checked: false, option: 'C', text: 'Maná', isCorrect: true },
      { checked: false, option: 'D', text: 'Pão celestial', isCorrect: false }
    ],
    context: `A comida que caía do céu e alimentava os israelitas no deserto era chamada de maná, conforme Êxodo 16:15.`
  },
  {
    id: 119,
    question: 'Qual o nome da esposa do rei Acabe?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Salomé', isCorrect: false },
      { checked: false, option: 'B', text: 'Jezabel', isCorrect: true },
      { checked: false, option: 'C', text: 'Dalila', isCorrect: false },
      { checked: false, option: 'D', text: 'Abigail', isCorrect: false }
    ],
    context: `A esposa do rei Acabe era Jezabel, conforme 1 Reis 16:31.`
  },
  {
    id: 120,
    question: 'Qual o nome do monte onde a arca de Noé repousou?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Oliveiras', isCorrect: false },
      { checked: false, option: 'B', text: 'Ararate', isCorrect: true },
      { checked: false, option: 'C', text: 'Sinai', isCorrect: false },
      { checked: false, option: 'D', text: 'Tabor', isCorrect: false }
    ],
    context: `A arca de Noé repousou no monte Ararate, conforme Gênesis 8:4.`
  },
  {
    id: 121,
    question: 'Lázaro foi ressuscitado depois de quantos dias?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '3 dias', isCorrect: false },
      { checked: false, option: 'B', text: '4 dias', isCorrect: true },
      { checked: false, option: 'C', text: '7 dias', isCorrect: false },
      { checked: false, option: 'D', text: '1 dia', isCorrect: false }
    ],
    context: `Lázaro foi ressuscitado por Jesus após estar morto por 4 dias, conforme João 11:39-44.`
  },
  {
    id: 122,
    question: 'Qual profeta fez o machado flutuar?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Eliseu', isCorrect: true },
      { checked: false, option: 'B', text: 'Elias', isCorrect: false },
      { checked: false, option: 'C', text: 'Jonas', isCorrect: false },
      { checked: false, option: 'D', text: 'Isaías', isCorrect: false }
    ],
    context: `O profeta Eliseu fez o machado flutuar, conforme 2 Reis 6:5-7.`
  },
  {
    id: 123,
    question: 'Quem foi lançado na cova dos leões?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Paulo', isCorrect: false },
      { checked: false, option: 'B', text: 'José', isCorrect: false },
      { checked: false, option: 'C', text: 'Daniel', isCorrect: true },
      { checked: false, option: 'D', text: 'Ezequiel', isCorrect: false }
    ],
    context: `Daniel foi lançado na cova dos leões, conforme Daniel 6:16-23.`
  },
  {
    id: 124,
    question: 'Quem foi o "assistente" do profeta Elias?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Amós', isCorrect: false },
      { checked: false, option: 'B', text: 'Enoque', isCorrect: false },
      { checked: false, option: 'C', text: 'Jonas', isCorrect: false },
      { checked: false, option: 'D', text: 'Eliseu', isCorrect: true }
    ],
    context: `Eliseu foi o "assistente" de Elias, conforme 1 Reis 19:19-21.`
  },
  {
    id: 125,
    question: 'Para quem Paulo disse "Creia no Senhor Jesus, e serão salvos, você e os de sua casa"?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Lídia', isCorrect: false },
      { checked: false, option: 'B', text: 'Jailson', isCorrect: false },
      { checked: false, option: 'C', text: 'Cármen', isCorrect: false },
      { checked: false, option: 'D', text: 'Carcereiro de Filipos', isCorrect: true }
    ],
    context: `Paulo disse essa frase ao carcereiro de Filipos, conforme Atos 16:31.`
  },
  {
    id: 126,
    question: 'Quem viu um arbusto em chamas que não se consumia?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Abraão', isCorrect: false },
      { checked: false, option: 'B', text: 'Isaque', isCorrect: false },
      { checked: false, option: 'C', text: 'Moisés', isCorrect: true },
      { checked: false, option: 'D', text: 'Noé', isCorrect: false }
    ],
    context: `Moisés viu o arbusto em chamas que não se consumia no Monte Horebe, conforme Êxodo 3:2-6.`
  },
  {
    id: 127,
    question: 'Quem foi o rei da Babilônia que enlouqueceu e viveu como um animal?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Belsazar', isCorrect: false },
      { checked: false, option: 'B', text: 'Dario', isCorrect: false },
      { checked: false, option: 'C', text: 'Nabucodonosor', isCorrect: true },
      { checked: false, option: 'D', text: 'Ciro', isCorrect: false }
    ],
    context: `Nabucodonosor foi o rei da Babilônia que enlouqueceu e viveu como um animal, conforme Daniel 4:33-34.`
  },
  {
    id: 128,
    question: 'Onde Moisés recebeu os Dez Mandamentos?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Monte Carmelo', isCorrect: false },
      { checked: false, option: 'B', text: 'Monte Sinai', isCorrect: true },
      { checked: false, option: 'C', text: 'Monte Horebe', isCorrect: false },
      { checked: false, option: 'D', text: 'Monte Nebo', isCorrect: false }
    ],
    context: `Moisés recebeu os Dez Mandamentos no Monte Sinai, conforme Êxodo 19:20 e Êxodo 34:1-4.`
  },
  {
    id: 129,
    question: 'Quem foi a primeira pessoa a morrer por causa do evangelho?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'Estevão', isCorrect: true },
      { checked: false, option: 'C', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'D', text: 'João', isCorrect: false }
    ],
    context: `Estevão foi a primeira pessoa a morrer por causa do evangelho, conforme Atos 7:54-60.`
  },
  {
    id: 130,
    question: 'Quem profetizou sobre o Vale dos Ossos Secos?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Isaías', isCorrect: false },
      { checked: false, option: 'B', text: 'Jeremias', isCorrect: false },
      { checked: false, option: 'C', text: 'Ezequiel', isCorrect: true },
      { checked: false, option: 'D', text: 'Daniel', isCorrect: false }
    ],
    context: `Ezequiel profetizou sobre o Vale dos Ossos Secos, conforme Ezequiel 37:1-14.`
  },
  {
    id: 131,
    question: 'Quem foi o filho que Jacó amava mais?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Levi', isCorrect: false },
      { checked: false, option: 'B', text: 'Judá', isCorrect: false },
      { checked: false, option: 'C', text: 'José', isCorrect: true },
      { checked: false, option: 'D', text: 'Benjamim', isCorrect: false }
    ],
    context: `Jacó amava mais José, conforme Gênesis 37:3, o que causou ciúmes em seus outros filhos.`
  },
  {
    id: 132,
    question: 'Quem sobreviveu a um naufrágio em Malta?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'B', text: 'Paulo', isCorrect: true },
      { checked: false, option: 'C', text: 'João', isCorrect: false },
      { checked: false, option: 'D', text: 'Barnabé', isCorrect: false }
    ],
    context: `Paulo sobreviveu a um naufrágio em Malta, conforme Atos 27:39-44 e Atos 28:1-10.`
  },
  {
    id: 133,
    question: 'Qual foi a última praga do Egito?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Rãs', isCorrect: false },
      { checked: false, option: 'B', text: 'Gafanhotos', isCorrect: false },
      { checked: false, option: 'C', text: 'Água em sangue', isCorrect: false },
      { checked: false, option: 'D', text: 'Morte dos primogênitos', isCorrect: true }
    ],
    context: `A última praga do Egito foi a morte dos primogênitos, conforme Êxodo 12:29-30.`
  },
  {
    id: 134,
    question: 'Quem foi o líder dos israelitas após a morte de Moisés?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Josué', isCorrect: true },
      { checked: false, option: 'B', text: 'Calebe', isCorrect: false },
      { checked: false, option: 'C', text: 'Arão', isCorrect: false },
      { checked: false, option: 'D', text: 'Elias', isCorrect: false }
    ],
    context: `Josué foi o líder dos israelitas após a morte de Moisés, conforme Josué 1:1-2.`
  },
  {
    id: 135,
    question: 'Quem cortou o cabelo de Sansão?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Dalila', isCorrect: false },
      { checked: false, option: 'B', text: 'Um homem', isCorrect: true },
      { checked: false, option: 'C', text: 'Jezabel', isCorrect: false },
      { checked: false, option: 'D', text: 'Mical', isCorrect: false }
    ],
    context: `Um homem não identificado cortou o cabelo de Sansão, conforme Juízes 16:19. Dalila, embora tenha sido quem o enganou, não cortou diretamente seu cabelo.`
  },
  {
    id: 136,
    question: 'Quem se tornou uma estátua de sal devido à sua desobediência?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Esposa de Ló', isCorrect: true },
      { checked: false, option: 'B', text: 'Esposa de Abraão', isCorrect: false },
      { checked: false, option: 'C', text: 'Esposa de Jacó', isCorrect: false },
      { checked: false, option: 'D', text: 'Esposa de Isaque', isCorrect: false }
    ],
    context: `A esposa de Ló se tornou uma estátua de sal devido à sua desobediência, conforme Gênesis 19:26.`
  },
  {
    id: 137,
    question: 'Quem teve um sonho de sete vacas gordas e sete vacas magras?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Jacó', isCorrect: false },
      { checked: false, option: 'B', text: 'Faraó', isCorrect: true },
      { checked: false, option: 'C', text: 'José', isCorrect: false },
      { checked: false, option: 'D', text: 'Nabucodonosor', isCorrect: false }
    ],
    context: `Faraó teve o sonho das sete vacas gordas e sete vacas magras, conforme Gênesis 41:1-7.`
  },
  {
    id: 138,
    question: 'Quem foi o Rei da Pérsia que permitiu o retorno dos judeus a Jerusalém?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Dario', isCorrect: false },
      { checked: false, option: 'B', text: 'Artaxerxes', isCorrect: false },
      { checked: false, option: 'C', text: 'Xerxes', isCorrect: false },
      { checked: false, option: 'D', text: 'Ciro', isCorrect: true }
    ],
    context: `Ciro, o Rei da Pérsia, permitiu o retorno dos judeus a Jerusalém, conforme Esdras 1:1-4.`
  },
  {
    id: 139,
    question: 'Quem foi colocado em um cesto no rio Nilo quando bebê?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Isaac', isCorrect: false },
      { checked: false, option: 'B', text: 'Moisés', isCorrect: true },
      { checked: false, option: 'C', text: 'Ismael', isCorrect: false },
      { checked: false, option: 'D', text: 'Samuel', isCorrect: false }
    ],
    context: `Moisés foi colocado em um cesto no rio Nilo quando bebê, conforme Êxodo 2:3-10.`
  },
  {
    id: 140,
    question: 'Quem era a rainha que salvou seu povo de um decreto de extermínio?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Ester', isCorrect: true },
      { checked: false, option: 'B', text: 'Jezabel', isCorrect: false },
      { checked: false, option: 'C', text: 'Rute', isCorrect: false },
      { checked: false, option: 'D', text: 'Débora', isCorrect: false }
    ],
    context: `A rainha Ester salvou seu povo de um decreto de extermínio, conforme o livro de Ester 4:14-16.`
  },
  {
    id: 141,
    question: 'Onde Paulo pregou sobre o ‘Deus desconhecido’?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Corinto', isCorrect: false },
      { checked: false, option: 'B', text: 'Atenas', isCorrect: true },
      { checked: false, option: 'C', text: 'Roma', isCorrect: false },
      { checked: false, option: 'D', text: 'Tessalônica', isCorrect: false }
    ],
    context: `Paulo pregou sobre o 'Deus desconhecido' em Atenas, conforme Atos 17:22-23.`
  },
  {
    id: 142,
    question: 'Quem batizou o Eunuco etíope?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'João Batista', isCorrect: false },
      { checked: false, option: 'B', text: 'Felipe', isCorrect: true },
      { checked: false, option: 'C', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'D', text: 'Tiago', isCorrect: false }
    ],
    context: `Felipe batizou o Eunuco etíope, conforme Atos 8:36-38.`
  },
  {
    id: 143,
    question: 'Quem foi chamado de “o amigo de Deus”?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Salomão', isCorrect: false },
      { checked: false, option: 'B', text: 'Abraão', isCorrect: true },
      { checked: false, option: 'C', text: 'Ezequias', isCorrect: false },
      { checked: false, option: 'D', text: 'Moisés', isCorrect: false }
    ],
    context: `Abraão foi chamado de “o amigo de Deus”, conforme Tiago 2:23.`
  },
  {
    id: 144,
    question: 'Salomão escreveu todo o Livro de Provérbios sozinho?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Sim', isCorrect: false },
      { checked: false, option: 'B', text: 'Não, outros sábios também contribuíram para o livro.', isCorrect: true },
      { checked: false, option: 'C', text: 'Não se sabe ao certo quem escreveu', isCorrect: false },
      { checked: false, option: 'D', text: 'Não foi Salomão quem escreveu', isCorrect: false }
    ],
    context: `O rei Salomão escreveu a maior parte do Livro de Provérbios, mas outros sábios também contribuíram para a obra: Agur escreveu o capítulo 30 (Provérbios 30:1), Lemuel escreveu o capítulo 31 (Provérbios 31:1), e Ezequias compilou e transcreveu os capítulos 25 e 29 (Provérbios 25:1; 29:1).`
  },
  {
    id: 145,
    question: 'Quem teve um sonho sobre sete vacas magras devorando sete vacas gordas?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Faraó', isCorrect: true },
      { checked: false, option: 'B', text: 'Abraão', isCorrect: false },
      { checked: false, option: 'C', text: 'Jacó', isCorrect: false },
      { checked: false, option: 'D', text: 'José', isCorrect: false }
    ],
    context: `Faraó teve o sonho das sete vacas magras devorando as sete vacas gordas, o que foi interpretado por José como um sinal de sete anos de abundância seguidos por sete anos de fome, conforme Gênesis 41:1-7.`
  },
  {
    id: 146,
    question: 'Em qual rio Jesus foi batizado por João Batista?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Tigre', isCorrect: false },
      { checked: false, option: 'B', text: 'Eufrates', isCorrect: false },
      { checked: false, option: 'C', text: 'Jordão', isCorrect: true },
      { checked: false, option: 'D', text: 'Mar da Galiléia', isCorrect: false }
    ],
    context: `Jesus foi batizado por João Batista no rio Jordão, conforme Mateus 3:13-17.`
  },
  {
    id: 147,
    question: 'Quem foi a rainha etíope que visitou o rei Salomão?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Atália', isCorrect: false },
      { checked: false, option: 'B', text: 'Jezabel', isCorrect: false },
      { checked: false, option: 'C', text: 'Rainha de Sabá', isCorrect: true },
      { checked: false, option: 'D', text: 'Bate-Seba', isCorrect: false }
    ],
    context: `A rainha de Sabá visitou o rei Salomão para testar sua sabedoria, conforme 1 Reis 10:1-13.`
  },
  {
    id: 148,
    question: 'Que profeta foi alimentado por corvos durante uma seca?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Elias', isCorrect: true },
      { checked: false, option: 'B', text: 'Eliseu', isCorrect: false },
      { checked: false, option: 'C', text: 'Amós', isCorrect: false },
      { checked: false, option: 'D', text: 'Isaías', isCorrect: false }
    ],
    context: `O profeta Elias foi alimentado por corvos durante uma seca, conforme 1 Reis 17:1-6.`
  },
  {
    id: 149,
    question: 'Qual era o trabalho de Zacarias, pai de João Batista?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Carpinteiro', isCorrect: false },
      { checked: false, option: 'B', text: 'Pescador', isCorrect: false },
      { checked: false, option: 'C', text: 'Sacerdote', isCorrect: true },
      { checked: false, option: 'D', text: 'Pastor', isCorrect: false }
    ],
    context: `Zacarias era sacerdote e servia no templo, conforme Lucas 1:5-25. Ele era o pai de João Batista, que seria o precursor de Jesus.`
  },
  {
    id: 150,
    question: 'Qual foi o pecado de Sodoma?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Pecados de ordem sexual', isCorrect: false },
      { checked: false, option: 'B', text: 'Arrogância, fartura e descaso com os pobres', isCorrect: true },
      { checked: false, option: 'C', text: 'Idolatria e feitiçaria', isCorrect: false },
      { checked: false, option: 'D', text: 'Orgulho e autossuficiência', isCorrect: false }
    ],
    context: `Ezequiel 16:49-50 descreve o pecado de Sodoma: 'Ora, este foi o pecado de sua irmã Sodoma: Ela e suas filhas eram arrogantes, tinham fartura de comida e viviam despreocupadas; não ajudavam os pobres e os necessitados.'`
  },
  {
    id: 151,
    question: 'Qual era o nome do sogro de Moisés?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Abimeleque', isCorrect: false },
      { checked: false, option: 'B', text: 'Labão', isCorrect: false },
      { checked: false, option: 'C', text: 'Jetro', isCorrect: true },
      { checked: false, option: 'D', text: 'Ló', isCorrect: false }
    ],
    context: `Jetro, o sogro de Moisés, era sacerdote de Midiã e ajudou Moisés a organizar o governo de Israel, conforme Êxodo 18:1-27.`
  },
  {
    id: 152,
    question: 'Quem disse: “Eis-me aqui, envia-me a mim”?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Amós', isCorrect: true },
      { checked: false, option: 'B', text: 'Samuel', isCorrect: false },
      { checked: false, option: 'C', text: 'Isaías', isCorrect: false },
      { checked: false, option: 'D', text: 'Jeremias', isCorrect: false }
    ],
    context: `Isaías disse: "Eis-me aqui, envia-me a mim" quando Deus o chamou para ser Seu mensageiro, conforme Isaías 6:8.`
  },
  {
    id: 153,
    question: 'Em qual livro da Bíblia encontramos a história de Ester?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Rute', isCorrect: false },
      { checked: false, option: 'B', text: 'Ester', isCorrect: true },
      { checked: false, option: 'C', text: 'Cânticos', isCorrect: false },
      { checked: false, option: 'D', text: 'Êxodo', isCorrect: false }
    ],
    context: `A história de Ester é encontrada no Livro de Ester, onde ela, uma jovem judia, se torna rainha da Pérsia e salva seu povo do extermínio. (Ester 1:1-10:3)`
  },
  {
    id: 154,
    question: 'Em qual livro da Bíblia encontramos a história de Rute?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Rute', isCorrect: true },
      { checked: false, option: 'B', text: 'Esdras', isCorrect: false },
      { checked: false, option: 'C', text: 'Juízes', isCorrect: false },
      { checked: false, option: 'D', text: 'Gênesis', isCorrect: false }
    ],
    context: `A história de Rute é encontrada no Livro de Rute, que narra a fidelidade de Rute, uma moabita, à sua sogra Noemi, e sua redenção através do casamento com Boaz (Rute 1:1-4:22).`
  },
  {
    id: 155,
    question: 'Quem foi o último dos Juízes de Israel?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Gideão', isCorrect: false },
      { checked: false, option: 'B', text: 'Eli', isCorrect: false },
      { checked: false, option: 'C', text: 'Samuel', isCorrect: true },
      { checked: false, option: 'D', text: 'Sansão', isCorrect: false }
    ],
    context: `Samuel foi o último juiz de Israel, conforme 1 Samuel 7:15-17, e também foi o profeta que ungiu o primeiro rei de Israel, Saul.`
  },
  {
    id: 156,
    question: 'Quem se casou com Raquel?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Esaú', isCorrect: false },
      { checked: false, option: 'B', text: 'Jacó', isCorrect: true },
      { checked: false, option: 'C', text: 'Labão', isCorrect: false },
      { checked: false, option: 'D', text: 'Abrão', isCorrect: false }
    ],
    context: `Jacó se casou com Raquel, filha de Labão, após um acordo de trabalho com seu sogro, conforme Gênesis 29:18-30.`
  },
  {
    id: 157,
    question: 'Quem era o pai de Jefté, o juiz de Israel?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Gileade', isCorrect: true },
      { checked: false, option: 'B', text: 'Manassés', isCorrect: false },
      { checked: false, option: 'C', text: 'Elcana', isCorrect: false },
      { checked: false, option: 'D', text: 'Efraim', isCorrect: false }
    ],
    context: `Jefté, o juiz de Israel, era filho de Gileade e foi chamado para liderar os israelitas em uma batalha contra os amonitas, conforme Juízes 11:1-11.`
  },
  {
    id: 158,
    question: 'Qual rei de Judá foi atingido com lepra até o dia de sua morte?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Acaz', isCorrect: false },
      { checked: false, option: 'B', text: 'Ozias (ou Uzias)', isCorrect: true },
      { checked: false, option: 'C', text: 'Ezequias', isCorrect: false },
      { checked: false, option: 'D', text: 'Manassés', isCorrect: false }
    ],
    context: `O rei Ozias de Judá foi atingido com lepra depois de oferecer incenso no templo, algo que era proibido para os reis. Ele viveu com lepra até a sua morte, conforme 2 Crônicas 26:16-21.`
  },
  {
    id: 159,
    question: 'A quem Deus disse: “Tira as sandálias dos pés, porque o lugar em que estás é terra santa”?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Josué', isCorrect: false },
      { checked: false, option: 'B', text: 'Moisés', isCorrect: true },
      { checked: false, option: 'C', text: 'Aarão', isCorrect: false },
      { checked: false, option: 'D', text: 'Elias', isCorrect: false }
    ],
    context: `Deus disse a Moisés para tirar as sandálias quando Ele apareceu na sarça ardente no Monte Horebe, conforme Êxodo 3:5.`
  },
  {
    id: 160,
    question: 'Em qual livro da Bíblia encontramos a descrição da armadura de Deus?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '1 Tessalonicenses', isCorrect: false },
      { checked: false, option: 'B', text: 'Hebreus', isCorrect: false },
      { checked: false, option: 'C', text: 'Efésios', isCorrect: true },
      { checked: false, option: 'D', text: 'Colossenses', isCorrect: false }
    ],
    context: `A descrição da armadura de Deus está em Efésios 6:10-18, onde o apóstolo Paulo orienta os cristãos a se revestirem de toda a armadura de Deus para resistirem às ciladas do diabo.`
  },
  {
    id: 161,
    question: 'Qual discípulo foi chamado de “Cefas” por Jesus?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'André', isCorrect: false },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: true },
      { checked: false, option: 'C', text: 'Tiago', isCorrect: false },
      { checked: false, option: 'D', text: 'João', isCorrect: false }
    ],
    context: `Jesus chamou Simão de "Cefas", que significa "pedra" ou "rocha", conforme João 1:42. Esse nome foi dado a Simão para simbolizar seu papel fundamental na fundação da Igreja.`
  },
  {
    id: 162,
    question: 'Em que cidade Paulo foi atacado e arrastado para fora, sendo dado como morto?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Listra', isCorrect: true },
      { checked: false, option: 'B', text: 'Derbe', isCorrect: false },
      { checked: false, option: 'C', text: 'Filipos', isCorrect: false },
      { checked: false, option: 'D', text: 'Éfeso', isCorrect: false }
    ],
    context: `Paulo foi atacado e arrastado para fora de Listra, sendo dado como morto, mas milagrosamente sobreviveu e continuou sua missão, conforme Atos 14:19-20.`
  },
  {
    id: 163,
    question: 'Quem foi a primeira mulher convertida na Europa durante a viagem missionária de Paulo?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Priscila', isCorrect: false },
      { checked: false, option: 'B', text: 'Lídia', isCorrect: true },
      { checked: false, option: 'C', text: 'Febe', isCorrect: false },
      { checked: false, option: 'D', text: 'Damaris', isCorrect: false }
    ],
    context: `Lídia, uma vendedora de púrpura, foi a primeira mulher convertida na Europa durante a viagem missionária de Paulo, conforme Atos 16:14-15.`
  },
  {
    id: 164,
    question: 'Quem era o sumo sacerdote que presidiu o julgamento de Jesus?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Nicodemos', isCorrect: false },
      { checked: false, option: 'B', text: 'Gamaliel', isCorrect: false },
      { checked: false, option: 'C', text: 'Caifás', isCorrect: true },
      { checked: false, option: 'D', text: 'Anás', isCorrect: false }
    ],
    context: `Caifás foi o sumo sacerdote que presidiu o julgamento de Jesus, conforme Mateus 26:57-68. Ele foi o responsável por interrogar Jesus antes da condenação.`
  },
  {
    id: 165,
    question: 'Que profeta enfrentou uma viúva em Sarepta e seu filho foi ressuscitado?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Elias', isCorrect: true },
      { checked: false, option: 'B', text: 'Eliseu', isCorrect: false },
      { checked: false, option: 'C', text: 'Isaías', isCorrect: false },
      { checked: false, option: 'D', text: 'Jeremias', isCorrect: false }
    ],
    context: `O profeta Elias enfrentou uma viúva em Sarepta, onde seu filho foi ressuscitado por ele, conforme 1 Reis 17:17-24.`
  },
  {
    id: 166,
    question: 'Quem disse: “Eu e a minha casa serviremos ao Senhor”?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Davi', isCorrect: false },
      { checked: false, option: 'B', text: 'Abraão', isCorrect: false },
      { checked: false, option: 'C', text: 'Josué', isCorrect: true },
      { checked: false, option: 'D', text: 'Moisés', isCorrect: false }
    ],
    context: `Josué fez essa declaração de compromisso com Deus em Josué 24:15, reafirmando sua decisão de servir ao Senhor juntamente com sua casa, apesar das dificuldades que o povo de Israel enfrentava.`
  },
  {
    id: 167,
    question: 'Qual rei consultou uma feiticeira em Endor?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Saul', isCorrect: true },
      { checked: false, option: 'B', text: 'Roboão', isCorrect: false },
      { checked: false, option: 'C', text: 'Jeroboão', isCorrect: false },
      { checked: false, option: 'D', text: 'Ezequias', isCorrect: false }
    ],
    context: `O rei Saul consultou uma feiticeira em Endor, como relatado em 1 Samuel 28:7-20, quando buscou orientação sobre a batalha contra os filisteus após Deus ter se afastado dele.`
  },
  {
    id: 168,
    question: 'Quem teve um sonho no qual o sol, a lua e onze estrelas se inclinavam diante dele?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'José', isCorrect: true },
      { checked: false, option: 'B', text: 'Faraó', isCorrect: false },
      { checked: false, option: 'C', text: 'Jacó', isCorrect: false },
      { checked: false, option: 'D', text: 'Moises', isCorrect: false }
    ],
    context: `José teve esse sonho, conforme relatado em Gênesis 37:9, que simbolizava sua futura autoridade sobre seus irmãos e até sobre seus pais. Esse sonho causou ciúmes em seus irmãos.`
  },
  {
    id: 169,
    question: 'Jesus entrou em Jerusalém montado em um jumento. Isso aconteceu para cumprir o que foi dito por qual profeta?',
    difficulty: 'hard',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Isaías', isCorrect: false },
      { checked: false, option: 'B', text: 'Miqueias', isCorrect: false },
      { checked: false, option: 'C', text: 'Zacarias', isCorrect: true },
      { checked: false, option: 'D', text: 'Jeremias', isCorrect: false }
    ],
    context: `O evento de Jesus entrando em Jerusalém montado em um jumento cumpriu a profecia de Zacarias 9:9, que dizia que o rei viria humilde, montado em um jumento, trazendo salvação ao seu povo.`
  },
  {
    id: 170,
    question: 'Em que livro da Bíblia encontra-se: "Posso todas as coisas naquele que me fortalece"?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Filipenses', isCorrect: true },
      { checked: false, option: 'B', text: 'Efésios', isCorrect: false },
      { checked: false, option: 'C', text: 'Colossenses', isCorrect: false },
      { checked: false, option: 'D', text: 'Romanos', isCorrect: false }
    ],
    context: `A frase "Posso todas as coisas naquele que me fortalece" está em Filipenses 4:13. O apóstolo Paulo expressa confiança no poder de Deus para superar qualquer situação, através de Cristo que o fortalece.`
  },
  {
    id: 171,
    question: 'Quem disse "Posso todas as coisas naquele que me fortalece"?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Paulo', isCorrect: true },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'João', isCorrect: false },
      { checked: false, option: 'D', text: 'Tiago', isCorrect: false }
    ],
    context: `A frase "Posso todas as coisas naquele que me fortalece" foi dita por Paulo em Filipenses 4:13. Ele expressa confiança no poder de Cristo para ajudá-lo a superar todas as dificuldades.`
  },
  {
    id: 172,
    question: 'Paulo escreve a Carta a Filemom "e intercede em favor de:"',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Onésimo', isCorrect: true },
      { checked: false, option: 'B', text: 'Tito', isCorrect: false },
      { checked: false, option: 'C', text: 'Timóteo', isCorrect: false },
      { checked: false, option: 'D', text: 'Barnabé', isCorrect: false }
    ],
    context: `Paulo escreve a Carta a Filemom para interceder em favor de Onésimo, um escravo fugitivo que se converteu ao cristianismo e se tornou útil para Paulo. A carta encontra-se no livro de Filemom, onde Paulo pede a Filemom que receba Onésimo de volta, não mais como escravo, mas como irmão em Cristo (Filemom 1:10-16).`
  },
  {
    id: 173,
    question: 'Antes de Jesus ser crucificado, o vestiram com uma capa:',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Roxa', isCorrect: false },
      { checked: false, option: 'B', text: 'Vermelha', isCorrect: true },
      { checked: false, option: 'C', text: 'Branca', isCorrect: false },
      { checked: false, option: 'D', text: 'Azul', isCorrect: false }
    ],
    context: `Antes de ser crucificado, Jesus foi zombado pelos soldados romanos. Eles o vestiram com um manto vermelho, colocaram uma coroa de espinhos em sua cabeça, e deram-lhe uma vara, zombando dele como "Rei dos Judeus". Este ato de zombaria é descrito em Mateus 27:28-29.`
  },
  {
    id: 174,
    question: 'Quem perguntou a Jesus: "Qual é o mandamento mais importante?"',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Nicodemus', isCorrect: true },
      { checked: false, option: 'B', text: 'Um escriba', isCorrect: false },
      { checked: false, option: 'C', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'D', text: 'João', isCorrect: false }
    ],
    context: `Em Marcos 12:28-34, um dos escribas, ao ouvir a discussão de Jesus com os saduceus, perguntou a Ele qual era o mandamento mais importante. Jesus respondeu com o mandamento de amar a Deus e o próximo como a si mesmo, resumindo a Lei e os Profetas em dois grandes mandamentos.`
  },
  {
    id: 175,
    question: 'Quantos escritores a Bíblia possui?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: '66', isCorrect: false },
      { checked: false, option: 'B', text: '12', isCorrect: false },
      { checked: false, option: 'C', text: '40', isCorrect: true },
      { checked: false, option: 'D', text: '70', isCorrect: false }
    ],
    context: `A Bíblia foi escrita por cerca de 40 escritores, inspirados por Deus, ao longo de aproximadamente 1.500 anos. Esses escritores tinham diferentes ocupações e contextos, mas suas obras formam uma mensagem unificada e coerente.`
  },
  {
    id: 176,
    question: 'Quem disse a Filipe: "De Nazaré? Pode vir alguma coisa boa de Nazaré?"',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Natanael', isCorrect: true },
      { checked: false, option: 'B', text: 'Pedro', isCorrect: false },
      { checked: false, option: 'C', text: 'André', isCorrect: false },
      { checked: false, option: 'D', text: 'Tomé', isCorrect: false }
    ],
    context: `O comentário foi feito por Natanael a Filipe em João 1:46, quando Filipe falava sobre Jesus como o Messias prometido.`
  },
  {
    id: 177,
    question: 'Qual foi o sinal que João viu sobre Jesus, que indicava que Ele era o Filho de Deus?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Uma pomba descendo sobre Ele', isCorrect: true },
      { checked: false, option: 'B', text: 'Uma luz brilhante ao redor Dele', isCorrect: false },
      { checked: false, option: 'C', text: 'Vozes dos céus cantando louvores', isCorrect: false },
      { checked: false, option: 'D', text: 'Um anjo anunciando a Sua divindade', isCorrect: false }
    ],
    context: `João Batista viu o Espírito Santo descer do céu como uma pomba e permanecer sobre Jesus, indicando que Ele era o Filho de Deus, conforme registrado em João 1:32-34.`
  },
  {
    id: 178,
    question: 'Qual foi o animal que Eva conversou no Jardim do Éden?',
    difficulty: 'easy',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Cobra', isCorrect: false },
      { checked: false, option: 'B', text: 'Dragão', isCorrect: false },
      { checked: false, option: 'C', text: 'Serpente', isCorrect: true },
      { checked: false, option: 'D', text: 'Lagarto', isCorrect: false }
    ],
    context: `A Bíblia menciona que Eva conversou com uma serpente (Gênesis 3:1). O termo "cobra" é uma interpretação moderna, mas a palavra usada originalmente é "serpente", que pode ter um significado mais amplo.`
  },
  {
    id: 179,
    question: 'É verdade que a Bíblia diz: “Esforça-te que eu te ajudarei”?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Sim, em Isaías', isCorrect: false },
      { checked: false, option: 'B', text: 'Sim, em Josué', isCorrect: false },
      { checked: false, option: 'C', text: 'Não, isso não está na Bíblia', isCorrect: true },
      { checked: false, option: 'D', text: 'Sim, em Provérbios', isCorrect: false }
    ],
    context: `A frase "Esforça-te que eu te ajudarei" não aparece na Bíblia. É uma expressão popular, mas não há versículo que contenha exatamente essa citação. Embora a Bíblia incentive o esforço e a fé (como em Josué 1:9), essas palavras específicas não estão registradas nas Escrituras.`
  },
  {
    id: 180,
    question: 'É verdade que a Bíblia diz: “Quem não vem pelo amor, vem pela dor”?',
    difficulty: 'special',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Sim, em Provérbios', isCorrect: false },
      { checked: false, option: 'B', text: 'Sim, em Salmos', isCorrect: false },
      { checked: false, option: 'C', text: 'Sim, em Apocalipse', isCorrect: false },
      { checked: false, option: 'D', text: 'Não, isso não está na Bíblia', isCorrect: true }
    ],
    context: `A frase "Quem não vem pelo amor, vem pela dor" não é encontrada na Bíblia. Essa expressão é frequentemente usada no contexto cristão para ensinar lições sobre obediência e aprendizado através de experiências, mas não está registrada como versículo bíblico.`
  },
  {
    id: 181,
    question: 'É verdade que a Bíblia diz: “O dinheiro é a raiz de todo o mal”?',
    difficulty: 'medium',
    type: 'multiple_choice',
    choices: [
      { checked: false, option: 'A', text: 'Sim, em 1 Timóteo', isCorrect: true },
      { checked: false, option: 'B', text: 'Não, a Bíblia diz que o amor ao dinheiro é a raiz de todo mal', isCorrect: false },
      { checked: false, option: 'C', text: 'Sim, em Mateus', isCorrect: false },
      { checked: false, option: 'D', text: 'Sim, em Lucas', isCorrect: false }
    ],
    context: `O versículo correto é 1 Timóteo 6:10, que diz: “Porque o amor ao dinheiro é a raiz de todos os males”. A Bíblia não diz que o dinheiro em si é a raiz do mal, mas o amor excessivo por ele.`
  }
];

export default questions;