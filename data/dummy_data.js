import Category from '../models/category';
import Equipo from '../models/equipo';

export const CATEGORIES = [
  new Category('c1', 'Premier League', '#3285a8'),
  new Category('c2', 'LaLiga', '#a86832'),
  new Category('c3', 'Bundesliga', '#a83232'),
  new Category('c4', 'Serie A', '#32a83a'),
  new Category('c5', 'Ligue 1', '#325ca8'),
];

export const EQUIPOS = [
  new Equipo(
    'm1',
    ['c1'],
    'Manchester United',
    'Clasico: Liverpool. Derby: Manchester City.', 
    'Estadio: Old Trafford', 
    'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/296px-Manchester_United_FC_crest.svg.png?20190211132414',
    20,
    [
      'JUGADORES HISTORICOS:',
      'Sir Bobby Charlton',
      'Ryan Giggs',
      'Eric Cantona',
      'Peter Schmeichel',
      'Paul Scholes',
      'Cristiano Ronaldo',
      'Chicharito Hernandez XD'
    ],
    [
      'Champions League: 3',
      'Premier Leagues: 20',
      'Fa Cups: 12',

    ],
    false,
    true,
    true,
    true
  ),

  new Equipo(
    'm2',
    ['c1'],
    'Liverpool FC',
    'Clasico: Manchester United. Derby: Everton FC.',
    'Estadio: Anfield',
    'https://upload.wikimedia.org/wikipedia/an/thumb/0/0c/Liverpool_FC.svg/370px-Liverpool_FC.svg.png?20120316214639',
    10,
    [
      'JUGADORES HISTORICOS:',
      'Kevin Keegan',
      'Steven McManaman',
      'Steven Gerrard',
      'Ian Rush',
      'Robbie Fowler',
      'Van Dijk',
      'Mohammed Salah'
    ],
    [
      'Champions: 6',
      'Premier League: 1',
      'Fa Cup: 7'
    ],
    false,
    false,
    false,
    false
  ),

  new Equipo(
    'm3',
    ['c2'],
    'Real Madrid',
    'Clasico: Barcelona. Derby: Atletico de Madrid.',
    'Estadio: Santiago Bernabeu',
    'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/262px-Real_Madrid_CF.svg.png?20220304135110',
    45,
    [
      'JUGADORES HISTORICOS:',
      'Ferenc Puskás',
      'Alfredo Di Stéfano',
      'Cristiano Ronaldo',
      'Zinedine Zidane',
      'Iker Casillas',
    ],
    [
      'Champions League: 15.',
      'LaLiga: 34.',
      'Copa del Rey: 19.',
    ],
    false,
    false,
    false,
    true
  ),

  new Equipo(
    'm4',
    ['c2'],
    'Barcelona',
    'Clasico: Real Madrid. Derby: Espaynol',
    'Estadio: Spotify Camp Nou',
    'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/142px-FC_Barcelona_%28crest%29.svg.png?20120407190948',
    60,
    [
      'JUGADORES HISTORICOS:',
      'Lionel Messi',
      'Xavi Hernandez',
      'Ronaldinho',
      'Carles Puyol',
      'Andrés Iniesta',
      'Johan Cruyff',
      'Pep Guardiola'
    ],
    [
      'Champions: 5',
      'LaLiga: 26.',
      'Copa del Rey: 31.',

    ],
    false,
    false,
    false,
    false
  ),

  new Equipo(
    'm5',
    ['c3'],
    'Bayern Munich',
    'Clasico: Borrusia Dortmund. Derby: TSV 1860 Munich.',
    'Estadio: Allianz Arena.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bayern_M%C3%BCnchen_Logo_%281996-2002%29.svg/440px-Bayern_M%C3%BCnchen_Logo_%281996-2002%29.svg.png',
    15,
    [
      'JUGADORES HISTORICOS:',
      "Franz Beckenbauer",
      'Gerd Müller',
      'Oliver Kahn',
      'Philipp Lahm',
      'Bastian Schweinsteiger'
    ],
    [
      'Champions League: 6.',
      'Bundesliga: 31.',
      'DFB-Pokal: 20.'
    ],
    true,
    false,
    true,
    true
  ),

  new Equipo(
    'm6',
    ['c3'],
    'Borrusia Dortmund',
    'Clasico: Bayern Munich. Derby: FC Schalke 04.',
    'Estadio: Signal Iduna Park.',
    'https://upload.wikimedia.org/wikipedia/commons/7/74/Borussia_Dortmund.png',
    240,
    [
      'JUGADORES HISTORICOS:',
      'Marco Reus.',
      'Jürgen Kohler',
      'Matt Hummels',
      'Karl-Heinz Riedle',
      'Michael Zorc'
    ],
    [
      'Champions League: 1.',
      'Bundesliga: 5.',
      'DFB-Pokal: 4.'
    ],
    true,
    false,
    true,
    false
  ),

  new Equipo(
    'm7',
    ['c4'],
    'A.C. Milan',
    'Clasico: Inter de Milan, Derby: Inter de Milan',
    'Estadio: Estadio de San Siro.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/361px-Logo_of_AC_Milan.svg.png',
    20,
    [
      'JUGADORES HISTORICOS:',
      'Paolo Maldini',
      'Franco Baresi',
      'Marco van Basten',
      'Ruud Gullit',
      'Andriy Shevchenko',
      'Clarence Seedorf'
    ],
    [
      'Champions League: 7.',
      'Serie A: 19.',
      'Coppa Italia: 5.',
    ],
    true,
    false,
    true,
    false
  ),

  new Equipo(
    'm8',
    ['c4'],
    'Juventus',
    'Clasico: Inter de Milan Derby: Torino FC',
    'Estadio: Juventus Stadium.',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png',
    35,
    [
      'JUGADORES HISTORICOS:',
      'Alessandro Del Piero',
      'Gianluigi Buffon',
      'Roberto Baggio',
      'Michel Platini',
      'Giampiero Boniperti'
    ],
    [
      'Champions League: 2.',
      'Seria A: 36.',
      'Coppa Italia: 14.',
    ],
    true,
    false,
    false,
    true
  ),

  new Equipo(
    'm9',
    ['c5'],
    'Paris Saint-Germain',
    'Clasico: Olympique de Marsella. Derby: Paris FC.',
    'Estadio: Parc des Princes.',
    'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/281px-Paris_Saint-Germain_F.C..svg.png?20181110201140',
    45,
    [
      'JUGADORES HISTORICOS:',
      'George Weah',
      'Kylian Mbappe',
      'Ronaldinho',
      'Zlatan Ibrahimović',
      'Neymar JR',
      'Lionel Messi'
    ],
    [
      'Champions League: 0',
      'Ligue 1: 10.',
      'Coupe de France de football: 14.',
   
    ],
    true,
    false,
    true,
    false
  ),
  new Equipo(
    'm10',
    ['c5'],
    'Olympique de Marsella',
    'Clasico: Paris Saint-Germain. Derby: AS Saint-Étienne.',
    'Estadio: Orange Vélodrome',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/153px-Olympique_Marseille_logo.svg.png',
    30,
    [
      'JUGADORES HISTORICOS:',
      'Didier Deschamps',
      'Jean-Pierre Papin',
      'Marcel Desailly',
      'Franck Ribéry'
    ],
    [
      'Champions League: 1.',
      'Ligue 1: 9.',
      'Coupe de France de football: 10.'
    ],
    true,
    true,
    true,
    true
  )
];