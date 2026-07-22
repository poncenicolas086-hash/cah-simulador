import { useState, useEffect } from 'react';

// Base de datos de temporadas icónicas de Huracán
const huracanSeasons = [
  {
    season: 'Huracán 2009',
    players: [
      { name: 'Gastón Monzón', pos: 'ARQ', rating: 85 },
      { name: 'Carlos Araujo', pos: 'DEF', rating: 83 },
      { name: 'Paolo Goltz', pos: 'DEF', rating: 84 },
      { name: 'Eduardo Domínguez', pos: 'DEF', rating: 82 },
      { name: 'Carlos Arano', pos: 'DEF', rating: 80 },
      { name: 'Leandro Benítez', pos: 'MED', rating: 81 },
      { name: 'Mario Bolatti', pos: 'MED', rating: 89 },
      { name: 'Javier Pastore', pos: 'MED', rating: 92 },
      { name: 'Matías De Federico', pos: 'DEL', rating: 88 },
      { name: 'César González', pos: 'DEL', rating: 83 },
      { name: 'Federico Nieto', pos: 'DEL', rating: 85 },
    ],
  },
  {
    season: 'Huracán 2014',
    players: [
      { name: 'Marcos Díaz', pos: 'ARQ', rating: 88 },
      { name: 'Federico Mancinelli', pos: 'DEF', rating: 82 },
      { name: 'Ezequiel Filipetto', pos: 'DEF', rating: 79 },
      { name: 'Eduardo Domínguez', pos: 'DEF', rating: 83 },
      { name: 'Lucas Villarruel', pos: 'DEF', rating: 80 },
      { name: 'Patricio Toranzo', pos: 'MED', rating: 86 },
      { name: 'Iván Moreno y Fabianesi', pos: 'MED', rating: 81 },
      { name: 'Gonzalo Martínez', pos: 'MED', rating: 90 },
      { name: 'Cristian Espinoza', pos: 'DEL', rating: 85 },
      { name: 'Ramón Ábila', pos: 'DEL', rating: 91 },
      { name: 'Agustín Torassa', pos: 'DEL', rating: 78 },
    ],
  },
  {
    season: 'Huracán 2015',
    players: [
      { name: 'Marcos Díaz', pos: 'ARQ', rating: 90 },
      { name: 'José San Román', pos: 'DEF', rating: 82 },
      { name: 'Martín Nervo', pos: 'DEF', rating: 85 },
      { name: 'Federico Mancinelli', pos: 'DEF', rating: 84 },
      { name: 'Luciano Balbi', pos: 'DEF', rating: 80 },
      { name: 'Javier Bogado', pos: 'MED', rating: 79 },
      { name: 'Mauro Bogado', pos: 'MED', rating: 83 },
      { name: 'Patricio Toranzo', pos: 'MED', rating: 87 },
      { name: 'Cristian Espinoza', pos: 'DEL', rating: 86 },
      { name: 'Ramón Ábila', pos: 'DEL', rating: 92 },
      { name: 'Agustín Vuletich', pos: 'DEL', rating: 77 },
    ],
  },
  {
    season: 'Huracán 2025',
    players: [
      { name: 'Hernán Galíndez', pos: 'ARQ', rating: 84 },
      { name: 'Tomás Guidara', pos: 'DEF', rating: 78 },
      { name: 'Martín Nervo', pos: 'DEF', rating: 83 },
      { name: 'Fabio Pereyra', pos: 'DEF', rating: 80 },
      { name: 'César Ibáñez', pos: 'DEF', rating: 78 },
      { name: 'Leonardo Gil', pos: 'MED', rating: 81 },
      { name: 'Matko Miljevic', pos: 'MED', rating: 82 },
      { name: 'Emmanuel Ojeda', pos: 'MED', rating: 79 },
      { name: 'Walter Mazzantti', pos: 'DEL', rating: 85 },
      { name: 'Ramón Ábila', pos: 'DEL', rating: 84 },
      { name: 'Rodrigo Cabral', pos: 'DEL', rating: 79 },
    ],
  },
  {
    season: 'Huracán 2011',
    players: [
      { name: 'Gastón Monzón', pos: 'ARQ', rating: 81 },
      { name: 'Facundo Quiroga', pos: 'DEF', rating: 78 },
      { name: 'Ezequiel Filippetto', pos: 'DEF', rating: 77 },
      { name: 'Carlos Quintana', pos: 'DEF', rating: 77 },
      { name: 'Lautaro Formica', pos: 'DEF', rating: 79 },
      { name: 'Rodrigo Battaglia', pos: 'MED', rating: 83 },
      { name: 'Gastón Machín', pos: 'MED', rating: 79 },
      { name: 'César Montiglio', pos: 'MED', rating: 78 },
      { name: 'Cristian Maidana', pos: 'MED', rating: 80 },
      { name: 'Javier Cámpora', pos: 'DEL', rating: 85 },
      { name: 'Rolando Zárate', pos: 'DEL', rating: 80 },
    ],
  },
  {
    season: 'Huracán 1973',
    players: [
      { name: 'Héctor Roganti', pos: 'ARQ', rating: 85 },
      { name: 'Nelson Chabay', pos: 'DEF', rating: 83 },
      { name: 'Daniel Buglione', pos: 'DEF', rating: 82 },
      { name: 'Alfio Basile', pos: 'DEF', rating: 88 },
      { name: 'Jorge Carrascosa', pos: 'DEF', rating: 89 },
      { name: 'Miguel Ángel Brindisi', pos: 'MED', rating: 94 },
      { name: 'Francisco Russo', pos: 'MED', rating: 83 },
      { name: 'Carlos Babington', pos: 'MED', rating: 95 },
      { name: 'René Houseman', pos: 'DEL', rating: 96 },
      { name: 'Roque Avallay', pos: 'DEL', rating: 86 },
      { name: 'Omar Larrosa', pos: 'DEL', rating: 87 },
    ],
  },
  {
    season: 'Huracán 1994',
    players: [
      { name: 'Marcos Gutiérrez', pos: 'ARQ', rating: 82 },
      { name: 'Humberto Vattimos', pos: 'DEF', rating: 78 },
      { name: 'Gabriel Rinaldi', pos: 'DEF', rating: 79 },
      { name: 'César Couceiro', pos: 'DEF', rating: 84 },
      { name: 'Mauricio Pineda', pos: 'DEF', rating: 85 },
      { name: 'Claudio Marini', pos: 'MED', rating: 81 },
      { name: 'Hugo Morales', pos: 'MED', rating: 88 },
      { name: 'Víctor Hugo Delgado', pos: 'MED', rating: 80 },
      { name: 'Walter Pelletti', pos: 'DEL', rating: 82 },
      { name: 'Antonio Barijho', pos: 'DEL', rating: 83 },
      { name: 'Gastón Casas', pos: 'DEL', rating: 78 },
    ],
  },
  {
    season: 'Huracán 2007 (Ascenso)',
    players: [
      { name: 'Leonardo Díaz', pos: 'ARQ', rating: 79 },
      { name: 'Christian Cellay', pos: 'DEF', rating: 77 },
      { name: 'Paolo Goltz', pos: 'DEF', rating: 76 },
      { name: 'Claudio Úbeda', pos: 'DEF', rating: 80 },
      { name: 'Cristian Díaz', pos: 'DEF', rating: 77 },
      { name: 'Walter Coyette', pos: 'MED', rating: 78 },
      { name: 'Hugo Barrientos', pos: 'MED', rating: 78 },
      { name: 'Federico Poggi', pos: 'MED', rating: 79 },
      { name: 'Cristian Sánchez Prette', pos: 'MED', rating: 80 },
      { name: 'Mauro Milano', pos: 'DEL', rating: 78 },
      { name: 'Joaquín Larrivey', pos: 'DEL', rating: 81 },
    ],
  },
];

const allTeams = [
  { name: 'Aldosivi', rating: 71, tier: 'low', logo: '/aldosivi.png' },
  { name: 'Argentinos Juniors', rating: 77, tier: 'mid', logo: '/argentinos.png' },
  { name: 'Atlético Tucumán', rating: 74, tier: 'mid', logo: '/atleticotucuman.png' },
  { name: 'Banfield', rating: 75, tier: 'mid', logo: '/banfield.png' },
  { name: 'Barracas Central', rating: 72, tier: 'low', logo: '/barracas.png' },
  { name: 'Belgrano', rating: 76, tier: 'mid', logo: '/belgrano.png' },
  { name: 'Boca Juniors', rating: 85, tier: 'high', logo: '/boca.png' },
  { name: 'Central Córdoba', rating: 71, tier: 'low', logo: '/centralcordoba.png' },
  { name: 'Defensa y Justicia', rating: 78, tier: 'mid', logo: '/defensa.png' },
  { name: 'Estudiantes de La Plata', rating: 82, tier: 'high', logo: '/estudiantes.png' },
  { name: 'Estudiantes de Río Cuarto', rating: 68, tier: 'low', logo: '/estudiantesrc.png' },
  { name: 'Gimnasia y Esgrima La Plata', rating: 74, tier: 'mid', logo: '/gimnasia.png' },
  { name: 'Gimnasia de Mendoza', rating: 68, tier: 'low', logo: '/gimnasiamendoza.png' },
  { name: 'Independiente', rating: 79, tier: 'mid', logo: '/independiente.png' },
  { name: 'Independiente Rivadavia', rating: 72, tier: 'low', logo: '/independienteriv.png' },
  { name: 'Instituto', rating: 73, tier: 'mid', logo: '/instituto.png' },
  { name: 'Lanús', rating: 76, tier: 'mid', logo: '/lanus.png' },
  { name: "Newell's Old Boys", rating: 76, tier: 'mid', logo: '/newells.png' },
  { name: 'Platense', rating: 74, tier: 'mid', logo: '/platense.png' },
  { name: 'Racing Club', rating: 84, tier: 'high', logo: '/racing.png' },
  { name: 'Deportivo Riestra', rating: 70, tier: 'low', logo: '/riestra.png' },
  { name: 'River Plate', rating: 86, tier: 'high', logo: '/river.png' },
  { name: 'Rosario Central', rating: 79, tier: 'mid', logo: '/rosariocentral.png' },
  { name: 'San Lorenzo', rating: 79, tier: 'mid', logo: '/sanlorenzo.png' },
  { name: 'Sarmiento', rating: 71, tier: 'low', logo: '/sarmiento.png' },
  { name: 'Talleres de Córdoba', rating: 81, tier: 'high', logo: '/talleres.png' },
  { name: 'Tigre', rating: 74, tier: 'mid', logo: '/tigre.png' },
  { name: 'Unión', rating: 74, tier: 'mid', logo: '/union.png' },
  { name: 'Vélez Sarsfield', rating: 80, tier: 'high', logo: '/velez.png' }
];

const cupStages = [
  { name: "32avos de Final" },
  { name: "16avos de Final" },
  { name: "Octavos de Final" },
  { name: "Cuartos de Final" },
  { name: "Semifinal" },
  { name: "Final" }
];

const getRandomRivalForStage = (stageIndex: number) => {
  const weightedTeams = allTeams.map(team => {
    let weight = 1;
    if (stageIndex === 0) { 
      if (team.tier === "mid") weight = 8;
      else if (team.tier === "high") weight = 2;
    } else if (stageIndex === 1 || stageIndex === 2) { 
      if (team.tier === "mid") weight = 6;
      else if (team.tier === "high") weight = 4;
    } else if (stageIndex === 3 || stageIndex === 4) { 
      if (team.tier === "mid") weight = 3;
      else if (team.tier === "high") weight = 7;
    } else { 
      if (team.tier === "mid") weight = 1;
      else if (team.tier === "high") weight = 10;
    }
    return { ...team, weight };
  });

  const totalWeight = weightedTeams.reduce((sum, t) => sum + t.weight, 0);
  let randomNum = Math.random() * totalWeight;

  for (const team of weightedTeams) {
    if (randomNum < team.weight) return team;
    randomNum -= team.weight;
  }
  return allTeams[0];
};

const formationsConfig: Record<string, { name: string; layout: any[][] }> = {
  '4-3-3-classic': {
    name: '4-3-3 (3 MC)',
    layout: [
      [
        { id: 'DEL1', category: 'DEL', label: 'EI' },
        { id: 'DEL2', category: 'DEL', label: 'DC' },
        { id: 'DEL3', category: 'DEL', label: 'ED' },
      ],
      [
        { id: 'MED1', category: 'MED', label: 'MC' },
        { id: 'MED2', category: 'MED', label: 'MC' },
        { id: 'MED3', category: 'MED', label: 'MC' },
      ],
      [
        { id: 'DEF1', category: 'DEF', label: 'LI' },
        { id: 'DEF2', category: 'DEF', label: 'DFC' },
        { id: 'DEF3', category: 'DEF', label: 'DFC' },
        { id: 'DEF4', category: 'DEF', label: 'LD' },
      ],
      [{ id: 'ARQ0', category: 'ARQ', label: 'ARQ' }],
    ],
  },
  '4-3-3-off': {
    name: '4-3-3 (Ofensiva MCO)',
    layout: [
      [
        { id: 'DEL1', category: 'DEL', label: 'EI' },
        { id: 'DEL2', category: 'DEL', label: 'DC' },
        { id: 'DEL3', category: 'DEL', label: 'ED' },
      ],
      [
        { id: 'MED1', category: 'MED', label: 'MC' },
        { id: 'MED2', category: 'MED', label: 'MCO' },
        { id: 'MED3', category: 'MED', label: 'MC' },
      ],
      [
        { id: 'DEF1', category: 'DEF', label: 'LI' },
        { id: 'DEF2', category: 'DEF', label: 'DFC' },
        { id: 'DEF3', category: 'DEF', label: 'DFC' },
        { id: 'DEF4', category: 'DEF', label: 'LD' },
      ],
      [{ id: 'ARQ0', category: 'ARQ', label: 'ARQ' }],
    ],
  },
  '3-4-3': {
    name: '3-4-3',
    layout: [
      [
        { id: 'DEL1', category: 'DEL', label: 'EI' },
        { id: 'DEL2', category: 'DEL', label: 'DC' },
        { id: 'DEL3', category: 'DEL', label: 'ED' },
      ],
      [
        { id: 'MED1', category: 'MED', label: 'MI' },
        { id: 'MED2', category: 'MED', label: 'MC' },
        { id: 'MED3', category: 'MED', label: 'MC' },
        { id: 'MED4', category: 'MED', label: 'MD' },
      ],
      [
        { id: 'DEF1', category: 'DEF', label: 'DFC' },
        { id: 'DEF2', category: 'DEF', label: 'DFC' },
        { id: 'DEF3', category: 'DEF', label: 'DFC' },
      ],
      [{ id: 'ARQ0', category: 'ARQ', label: 'ARQ' }],
    ],
  },
  '4-2-4': {
    name: '4-2-4',
    layout: [
      [
        { id: 'DEL1', category: 'DEL', label: 'EI' },
        { id: 'DEL2', category: 'DEL', label: 'DC' },
        { id: 'DEL3', category: 'DEL', label: 'DC' },
        { id: 'DEL4', category: 'DEL', label: 'ED' },
      ],
      [
        { id: 'MED1', category: 'MED', label: 'MC' },
        { id: 'MED2', category: 'MED', label: 'MC' },
      ],
      [
        { id: 'DEF1', category: 'DEF', label: 'LI' },
        { id: 'DEF2', category: 'DEF', label: 'DFC' },
        { id: 'DEF3', category: 'DEF', label: 'DFC' },
        { id: 'DEF4', category: 'DEF', label: 'LD' },
      ],
      [{ id: 'ARQ0', category: 'ARQ', label: 'ARQ' }],
    ],
  },
};

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showFormationModal, setShowFormationModal] = useState(false);
  const [inDraft, setInDraft] = useState(false);
  const [inMatch, setInMatch] = useState(false);

  // Estados del Modo Liga y Copa
  const [gameMode, setGameMode] = useState<'cup' | 'league'>('cup');
  const [showLeagueModal, setShowLeagueModal] = useState(false);
  const [leagueTableA, setLeagueTableA] = useState<any[]>([]);
  const [leagueTableB, setLeagueTableB] = useState<any[]>([]);
  const [currentLeagueFixture, setCurrentLeagueFixture] = useState<number>(0);
  const [leagueFixturesA, setLeagueFixturesA] = useState<any[]>([]);
  const [leagueFixturesB, setLeagueFixturesB] = useState<any[]>([]);
  const [inLeagueMatch, setInLeagueMatch] = useState(false);
  const [leagueMatchData, setLeagueMatchData] = useState<any>(null);
  const [leaguePhase, setLeaguePhase] = useState<'regular' | 'playoffs'>('regular');
  const [playoffRound, setPlayoffRound] = useState<number>(0); 
  const [playoffMatches, setPlayoffMatches] = useState<any[]>([]);
  const [currentPlayoffMatchIndex, setCurrentPlayoffMatchIndex] = useState<number>(0);
  const [playoffUserMatchResult, setPlayoffUserMatchResult] = useState<any>(null);

  const [selectedFormationKey, setSelectedFormationKey] = useState<string>('4-3-3-classic');
  const [currentSeason, setCurrentSeason] = useState<any>(null);
  const [positions, setPositions] = useState<any[]>([]);
  const [chosenNames, setChosenNames] = useState<string[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);

  const [currentStageIndex, setCurrentStageIndex] = useState(0); 
  const [cupStats, setCupStats] = useState({ wins: 0, losses: 0, gf: 0, gc: 0 });
  const [rivalTeam, setRivalTeam] = useState<any>(null);
  const [matchScore, setMatchScore] = useState({ huracan: 0, rival: 0 });
  const [matchEvents, setMatchEvents] = useState<string[]>([]);
  const [matchScorersSummary, setMatchScorersSummary] = useState<string[]>([]);
  const [matchMinute, setMatchMinute] = useState(0);
  const [matchEnded, setMatchEnded] = useState(false);
  const [matchScript, setMatchScript] = useState<any>({});
  const [isEliminated, setIsEliminated] = useState(false);
  const [isChampion, setIsChampion] = useState(false);

  // Estados interactivos para tanda de penales en vivo
  const [inPenaltyShootout, setInPenaltyShootout] = useState(false);
  const [penaltyStep, setPenaltyStep] = useState(0); 
  const [penaltyKicksLog, setPenaltyKicksLog] = useState<{ round: number; team: 'huracan' | 'rival'; text: string; scored: boolean }[]>([]);
  const [huracanPensCount, setHuracanPensCount] = useState(0);
  const [rivalPensCount, setRivalPensCount] = useState(0);

  const handleSelectFormation = (formKey: string, mode: 'cup' | 'league' = 'cup') => {
    setSelectedFormationKey(formKey);
    setGameMode(mode);
    const chosenConfig = formationsConfig[formKey];

    const flatPositions: any[] = [];
    chosenConfig.layout.forEach((row) => {
      row.forEach((pos) => {
        flatPositions.push({ ...pos, player: null });
      });
    });

    const randomSeason = huracanSeasons[Math.floor(Math.random() * huracanSeasons.length)];
    setCurrentSeason(randomSeason);
    setPositions(flatPositions);
    setChosenNames([]);
    setSelectedPlayer(null);
    setShowFormationModal(false);
    setShowLeagueModal(false);
    setShowMenu(false);
    setInDraft(true);
    setInMatch(false);
    setInLeagueMatch(false);
    setCurrentStageIndex(0);
    setCupStats({ wins: 0, losses: 0, gf: 0, gc: 0 });
    setIsEliminated(false);
    setIsChampion(false);
    setInPenaltyShootout(false);
  };

  const initLeagueTournament = () => {
    const shuffledRivals = [...allTeams].sort(() => 0.5 - Math.random());
    
    const teamsA = [
      { name: 'Huracán', rating: teamRating, logo: '/huracanpng.png', isUser: true },
      ...shuffledRivals.slice(0, 14).map(t => ({ ...t, isUser: false }))
    ];

    const teamsB = shuffledRivals.slice(14, 29).map(t => ({ ...t, isUser: false }));

    const createTable = (teams: any[]) => teams.map(t => ({
      name: t.name,
      rating: t.rating,
      logo: t.logo,
      isUser: t.isUser,
      pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0
    }));

    setLeagueTableA(createTable(teamsA));
    setLeagueTableB(createTable(teamsB));

    const generateFixtures = (teams: any[]) => {
      const fixtures: any[] = [];
      const numTeams = teams.length;
      const rounds = numTeams - 1;
      for (let round = 0; round < rounds; round++) {
        const roundMatches: any[] = [];
        for (let i = 0; i < numTeams / 2; i++) {
          const home = (round + i) % (numTeams - 1);
          let away = (numTeams - 1 - round + i) % (numTeams - 1);
          if (i === 0) away = numTeams - 1;
          roundMatches.push({ home: teams[home], away: teams[away] });
        }
        fixtures.push(roundMatches);
      }
      return fixtures;
    };

    setLeagueFixturesA(generateFixtures(teamsA));
    setLeagueFixturesB(generateFixtures(teamsB));
    setCurrentLeagueFixture(0);
    setLeaguePhase('regular');
    setInDraft(false);
    setInMatch(true);
    setInLeagueMatch(true);
    setLeagueMatchData(null);
  };

  const handleSelectPlayerFromList = (player: any) => {
    const hasAvailableSlots = positions.some((p) => p.category === player.pos && p.player === null);
    if (!hasAvailableSlots) {
      alert(`Ya no hay posiciones libres para la categoría [${player.pos}] en esta formación.`);
      return;
    }
    setSelectedPlayer(player);
  };

  const handlePlacePlayerInField = (index: number) => {
    if (!selectedPlayer) return;
    const targetPos = positions[index];

    if (targetPos.player !== null) return;
    if (targetPos.category !== selectedPlayer.pos) {
      alert(`Este casillero es para ${targetPos.category}, y el jugador es de tipo ${selectedPlayer.pos}`);
      return;
    }

    const updatedPositions = [...positions];
    updatedPositions[index].player = selectedPlayer;
    setPositions(updatedPositions);
    setChosenNames([...chosenNames, selectedPlayer.name]);
    setSelectedPlayer(null);

    const availableSeasons = huracanSeasons.filter((s) => s.season !== currentSeason?.season);
    const nextSeason = availableSeasons[Math.floor(Math.random() * availableSeasons.length)] || huracanSeasons[0];
    setCurrentSeason(nextSeason);
  };

  const handleAutoDraft = () => {
    const allPlayersPool: any[] = [];
    huracanSeasons.forEach((season) => {
      season.players.forEach((p) => allPlayersPool.push(p));
    });

    const updatedPositions = [...positions];
    const newChosenNames: string[] = [];

    updatedPositions.forEach((pos) => {
      if (pos.player === null) {
        const candidates = allPlayersPool.filter((p) => p.pos === pos.category && !newChosenNames.includes(p.name));
        if (candidates.length > 0) {
          const randomPlayer = candidates[Math.floor(Math.random() * candidates.length)];
          pos.player = randomPlayer;
          newChosenNames.push(randomPlayer.name);
        }
      } else {
        newChosenNames.push(pos.player.name);
      }
    });

    setPositions(updatedPositions);
    setChosenNames(newChosenNames);
    setSelectedPlayer(null);
  };

  const isTeamComplete = positions.every((p) => p.player !== null);
  const placedPlayers = positions.filter((p) => p.player !== null);
  const teamRating = placedPlayers.length > 0
    ? Math.round(placedPlayers.reduce((acc, curr) => acc + curr.player.rating, 0) / placedPlayers.length)
    : 0;

  const prepareMatchForCurrentStage = () => {
    if (gameMode === 'league') {
      initLeagueTournament();
      return;
    }

    const stage = cupStages[currentStageIndex];
    const randomRival = getRandomRivalForStage(currentStageIndex);
    
    setRivalTeam(randomRival);
    setMatchScore({ huracan: 0, rival: 0 });
    setMatchEvents([`⏱️ 0' - ¡Comienza el partido de ${stage.name} frente al duro equipo de ${randomRival.name}! El Globo va por la gloria.`]);
    setMatchScorersSummary([]);
    setMatchMinute(0);
    setMatchEnded(false);
    setInMatch(true);
    setInPenaltyShootout(false);

    const diff = teamRating - randomRival.rating;
    let hGoalsCount = 0;
    let rGoalsCount = 0;

    const baseChance = 0.20; 
    const ratingFactor = diff * 0.005;

    if (Math.random() < (baseChance + ratingFactor)) hGoalsCount += Math.random() < 0.6 ? 1 : 2; 
    if (Math.random() < (baseChance - ratingFactor * 1.5)) rGoalsCount += Math.random() < 0.6 ? 1 : 2;

    hGoalsCount = Math.min(hGoalsCount, 3);
    rGoalsCount = Math.min(rGoalsCount, 3);

    if (hGoalsCount === rGoalsCount) {
      if (teamRating >= randomRival.rating && Math.random() < 0.4) hGoalsCount += 1;
      else if (teamRating < randomRival.rating && Math.random() < 0.6) rGoalsCount += 1;
    }
    
    hGoalsCount = Math.min(hGoalsCount, 3);
    rGoalsCount = Math.min(rGoalsCount, 3);

    const scriptMap: any = {};
    const availableMinutes = Array.from({ length: 84 }, (_, i) => i + 4);
    const huracanSquadPlayers = positions.filter((p) => p.player !== null).map((p) => p.player);
    const rivalScorersPool = [`Delantero de ${randomRival.name}`, `Mediocampista de ${randomRival.name}`, `Figura de ${randomRival.name}`];

    for (let i = 0; i < hGoalsCount; i++) {
      if (availableMinutes.length === 0) break;
      const randIdx = Math.floor(Math.random() * availableMinutes.length);
      const min = availableMinutes.splice(randIdx, 1)[0];
      const randomScorer = huracanSquadPlayers.length > 0 ? huracanSquadPlayers[Math.floor(Math.random() * huracanSquadPlayers.length)].name : 'Jugador de Huracán';
      scriptMap[min] = { huracanGoal: true, rivalGoal: false, scorerName: randomScorer, text: `⚽ ¡GOOOOL DE HURACÁN! (${randomScorer}) Tremenda definición para desatar la locura en las tribunas.` };
    }

    for (let i = 0; i < rGoalsCount; i++) {
      if (availableMinutes.length === 0) break;
      const randIdx = Math.floor(Math.random() * availableMinutes.length);
      const min = availableMinutes.splice(randIdx, 1)[0];
      const randomRivalScorer = rivalScorersPool[Math.floor(Math.random() * rivalScorersPool.length)];
      scriptMap[min] = { huracanGoal: false, rivalGoal: true, scorerName: randomRivalScorer, text: `⚽ Gol de ${randomRival.name} (${randomRivalScorer}). Desatención defensiva que aprovecha el rival.` };
    }

    const neutralTexts = [
      'Remate desviado desde media distancia.',
      'Fuerte falta en mitad de cancha, el árbitro advierte al jugador.',
      'Buena jugada asociada de Huracán que termina en tiro de esquina.',
      'El arquero controla sin problemas un centro cruzado.',
      'Presiona alto el Globo buscando ahogar la salida rival.',
      'El partido se vuelve áspero y trabado en el mediocampo.',
    ];

    for (let i = 0; i < 4; i++) {
      if (availableMinutes.length === 0) break;
      const randIdx = Math.floor(Math.random() * availableMinutes.length);
      const min = availableMinutes.splice(randIdx, 1)[0];
      if (!scriptMap[min]) {
        const randomNeutral = neutralTexts[Math.floor(Math.random() * neutralTexts.length)];
        scriptMap[min] = { huracanGoal: false, rivalGoal: false, text: `🔍 ${randomNeutral}` };
      }
    }

    setMatchScript(scriptMap);
  };

  const startPenaltyShootoutSequence = (currentEvents: any[], currentScorers: any[]) => {
    setInPenaltyShootout(true);
    setPenaltyStep(0);
    setPenaltyKicksLog([]);
    setHuracanPensCount(0);
    setRivalPensCount(0);
    setMatchEvents([`⚖️ ¡Terminó en empate! Nos vamos a la tanda de penales en vivo.`, ...currentEvents]);
  };

  const handleNextPenaltyKick = () => {
    const round = Math.floor(penaltyStep / 2) + 1;
    const isHuracanTurn = penaltyStep % 2 === 0;

    let scored = false;
    let logText = '';

    if (isHuracanTurn) {
      scored = Math.random() < 0.78;
      const newHCount = huracanPensCount + (scored ? 1 : 0);
      setHuracanPensCount(newHCount);
      logText = scored 
        ? `Ronda ${round} - ⚽ ¡Huracán convierte el penal! (${newHCount}-${rivalPensCount})`
        : `Ronda ${round} - ❌ Huracán erra o ataja el arquero (${newHCount}-${rivalPensCount})`;
      
      setPenaltyKicksLog(prev => [...prev, { round, team: 'huracan', text: logText, scored }]);
      setMatchScorersSummary(prev => [...prev, `Penal R${round}: ${scored ? '⚽ Huracán Gol' : '❌ Huracán Erró'} (${newHCount}-${rivalPensCount})`]);
    } else {
      scored = Math.random() < 0.75;
      const newRCount = rivalPensCount + (scored ? 1 : 0);
      setRivalPensCount(newRCount);
      logText = scored 
        ? `Ronda ${round} - ⚽ ${rivalTeam?.name} convierte (${huracanPensCount}-${newRCount})`
        : `Ronda ${round} - ❌ ${rivalTeam?.name} erra o ataja nuestro arquero (${huracanPensCount}-${newRCount})`;
      
      setPenaltyKicksLog(prev => [...prev, { round, team: 'rival', text: logText, scored }]);
      setMatchScorersSummary(prev => [...prev, `Penal R${round}: ${scored ? `⚽ ${rivalTeam?.name} Gol` : `❌ ${rivalTeam?.name} Erró`} (${huracanPensCount}-${newRCount})`]);
    }

    const nextStep = penaltyStep + 1;
    setPenaltyStep(nextStep);

    const hScoredNow = isHuracanTurn ? (scored ? huracanPensCount + 1 : huracanPensCount) : huracanPensCount;
    const rScoredNow = !isHuracanTurn ? (scored ? rivalPensCount + 1 : rivalPensCount) : rivalPensCount;
    const kicksDone = nextStep;

    let shootoutFinished = false;
    let userWon = false;

    if (kicksDone >= 10 && kicksDone % 2 === 0) {
      if (hScoredNow !== rScoredNow) {
        shootoutFinished = true;
        userWon = hScoredNow > rScoredNow;
      }
    } else if (kicksDone < 10) {
      const roundsLeftH = Math.ceil((10 - kicksDone) / 2);
      const roundsLeftR = Math.floor((10 - kicksDone) / 2);
      if (hScoredNow > rScoredNow + roundsLeftR + (kicksDone % 2 !== 0 ? 1 : 0)) {
        shootoutFinished = true;
        userWon = true;
      } else if (rScoredNow > hScoredNow + roundsLeftH) {
        shootoutFinished = true;
        userWon = false;
      }
    } else if (kicksDone >= 10 && kicksDone % 2 === 0) {
      if (hScoredNow !== rScoredNow) {
        shootoutFinished = true;
        userWon = hScoredNow > rScoredNow;
      }
    }

    if (shootoutFinished) {
      setInPenaltyShootout(false);
      setMatchEnded(true);
      
      const finalMsg = userWon 
        ? `🎯 ¡HURACÁN se impone ${hScoredNow}-${rScoredNow} en los penales y clasifica!`
        : `🎯 ¡${rivalTeam?.name.toUpperCase()} nos elimina en los penales (${rScoredNow}-${hScoredNow})!`;
      
      setMatchEvents(prev => [finalMsg, ...prev]);

      if (gameMode === 'cup') {
        setCupStats(prev => ({
          wins: prev.wins + (userWon ? 1 : 0),
          losses: prev.losses + (userWon ? 0 : 1),
          gf: prev.gf,
          gc: prev.gc,
        }));

        if (userWon) {
          if (currentStageIndex >= cupStages.length - 1) {
            setIsChampion(true);
            setIsEliminated(false);
          } else {
            setIsChampion(false);
            setIsEliminated(false);
          }
        } else {
          setIsChampion(false);
          setIsEliminated(true);
        }
      }
    }
  };

  const finishMatchInstantly = () => {
    let userGoals = matchScore.huracan;
    let rivalGoals = matchScore.rival;
    const startMinute = matchMinute;
    const rivalRating = rivalTeam?.rating || 75;
    const ratingDiff = teamRating - rivalRating;
  
    const userGoalChance = Math.min(Math.max(0.10 + ratingDiff * 0.008, 0.04), 0.20);
    const rivalGoalChance = Math.min(Math.max(0.12 - ratingDiff * 0.008, 0.05), 0.25);
  
    const newEvents = [...matchEvents];
    const newScorersSummary = [...matchScorersSummary];
    const huracanSquadPlayers = positions.filter((p) => p.player !== null).map((p) => p.player);
  
    for (let min = startMinute; min <= 90; min += Math.floor(Math.random() * 8) + 6) {
      const rand = Math.random();
      if (userGoals + rivalGoals >= 5) break;
  
      if (rand < userGoalChance) {
        userGoals++;
        const scorer = huracanSquadPlayers.length > 0 ? huracanSquadPlayers[Math.floor(Math.random() * huracanSquadPlayers.length)].name : 'Jugador';
        newEvents.unshift(`⚽ Min ${min}': ¡GOL DE HURACÁN! (${scorer}) - (${userGoals} - ${rivalGoals})`);
        newScorersSummary.push(`${min}' - ${scorer} (${userGoals}-${rivalGoals})`);
      } else if (rand < userGoalChance + rivalGoalChance) {
        rivalGoals++;
        const rivalScorer = `Delantero de ${rivalTeam?.name}`;
        newEvents.unshift(`⚽ Min ${min}': ¡GOL DE ${rivalTeam?.name.toUpperCase()}! (${rivalScorer}) - (${userGoals} - ${rivalGoals})`);
        newScorersSummary.push(`${min}' - ${rivalScorer} (${userGoals}-${rivalGoals})`);
      }
    }
  
    setMatchScore({ huracan: userGoals, rival: rivalGoals });
    setMatchEvents(newEvents);
    setMatchScorersSummary(newScorersSummary);
    setMatchMinute(90);

    let userWon = userGoals > rivalGoals;
  
    if (userGoals === rivalGoals && gameMode === 'cup') {
      startPenaltyShootoutSequence(newEvents, newScorersSummary);
      return;
    }
  
    setMatchEnded(true);
  
    if (gameMode === 'cup') {
      setCupStats((prev) => ({
        wins: prev.wins + (userWon ? 1 : 0),
        losses: prev.losses + (userWon ? 0 : 1),
        gf: prev.gf + userGoals,
        gc: prev.gc + rivalGoals,
      }));
  
      if (userWon) {
        if (currentStageIndex >= cupStages.length - 1) {
          setIsChampion(true);
          setIsEliminated(false);
        } else {
          setIsChampion(false);
          setIsEliminated(false);
        }
      } else {
        setIsChampion(false);
        setIsEliminated(true);
      }
    }
  };

  useEffect(() => {
    if (!inMatch || matchEnded || inLeagueMatch || inPenaltyShootout) return;

    if (matchMinute >= 90) {
      let userGoals = matchScore.huracan;
      let rivalGoals = matchScore.rival;
      let newEvents = [...matchEvents];
      let newScorersSummary = [...matchScorersSummary];
      let userWon = userGoals > rivalGoals;

      if (userGoals === rivalGoals && gameMode === 'cup') {
        startPenaltyShootoutSequence(newEvents, newScorersSummary);
        return;
      }

      setMatchScore({ huracan: userGoals, rival: rivalGoals });
      setMatchEvents(newEvents);
      setMatchScorersSummary(newScorersSummary);
      setMatchEnded(true);

      setCupStats({
        wins: cupStats.wins + (userWon ? 1 : 0),
        losses: cupStats.losses + (userWon ? 0 : 1),
        gf: cupStats.gf + userGoals,
        gc: cupStats.gc + rivalGoals,
      });

      if (userWon) {
        if (currentStageIndex === cupStages.length - 1) {
          setIsChampion(true);
          setIsEliminated(false);
        } else {
          setIsEliminated(false);
        }
      } else {
        setIsEliminated(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      const nextMinute = matchMinute + 1;
      setMatchMinute(nextMinute);

      const eventData = matchScript[nextMinute];
      if (eventData) {
        const updatedHuracan = matchScore.huracan + (eventData.huracanGoal ? 1 : 0);
        const updatedRival = matchScore.rival + (eventData.rivalGoal ? 1 : 0);

        setMatchScore({ huracan: updatedHuracan, rival: updatedRival });

        if ((eventData.huracanGoal || eventData.rivalGoal) && eventData.scorerName) {
          setMatchScorersSummary((prev) => [...prev, `${nextMinute}' + ${eventData.scorerName} + (${updatedHuracan}-${updatedRival})`]);
        }

        setMatchEvents((prev) => [`⏱️ ${nextMinute}' - ${eventData.text}`, ...prev]);
      } else if (nextMinute === 45) {
        setMatchEvents((prev) => [`⏱️ 45' - Final del primer tiempo. Nos vamos al descanso.`, ...prev]);
      } else if (nextMinute === 46) {
        setMatchEvents((prev) => [`⏱️ 46' - Arranca el segundo tiempo.`, ...prev]);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [inMatch, matchMinute, matchEnded, matchScript, matchScore, inLeagueMatch, inPenaltyShootout]);

  const simulateRoundForTable = (fixtures: any[], table: any[], isZoneA: boolean) => {
    // CORRECCIÓN 1: Validar fecha 0 o fuera de rango de fixtures
    if (!fixtures || fixtures.length === 0 || currentLeagueFixture >= fixtures.length) {
      return { updatedTable: table, userMatchRes: null };
    }

    const currentMatches = fixtures[currentLeagueFixture];
    let userMatchRes: any = null;
    const updatedTable = [...table];
    const huracanSquadPlayers = positions.filter((p) => p.player !== null).map((p) => p.player);

    currentMatches.forEach((match: any) => {
      const homeIsUser = match.home.isUser;
      const awayIsUser = match.away.isUser;
      let homeGoals = 0;
      let awayGoals = 0;
      let homeScorers: string[] = [];
      let awayScorers: string[] = [];

      if (homeIsUser && isZoneA) {
        const diff = teamRating - match.away.rating;
        homeGoals = Math.max(0, Math.floor(Math.random() * 2) + (diff > 8 ? 1 : 0));
        awayGoals = Math.max(0, Math.floor(Math.random() * 2) + (diff < 0 ? 1 : 0));
        
        for (let i = 0; i < homeGoals; i++) {
          const sc = huracanSquadPlayers.length > 0 ? huracanSquadPlayers[Math.floor(Math.random() * huracanSquadPlayers.length)].name : 'Jugador';
          homeScorers.push(sc);
        }
        for (let i = 0; i < awayGoals; i++) {
          // CORRECCIÓN 3: Goleadores aislados correctamente al equipo visitante correspondiente
          awayScorers.push(`Delantero de ${match.away.name}`);
        }

        userMatchRes = { opponent: match.away, isHome: true, homeGoals, awayGoals, homeScorers, awayScorers };
      } else if (awayIsUser && isZoneA) {
        const diff = teamRating - match.home.rating;
        homeGoals = Math.max(0, Math.floor(Math.random() * 2) + (diff < 0 ? 1 : 0));
        awayGoals = Math.max(0, Math.floor(Math.random() * 2) + (diff > 8 ? 1 : 0));

        for (let i = 0; i < homeGoals; i++) {
          // CORRECCIÓN 3: Goleadores aislados correctamente al equipo local correspondiente
          homeScorers.push(`Delantero de ${match.home.name}`);
        }
        for (let i = 0; i < awayGoals; i++) {
          const sc = huracanSquadPlayers.length > 0 ? huracanSquadPlayers[Math.floor(Math.random() * huracanSquadPlayers.length)].name : 'Jugador';
          awayScorers.push(sc);
        }

        userMatchRes = { opponent: match.home, isHome: false, homeGoals, awayGoals, homeScorers, awayScorers };
      } else {
        const diff = match.home.rating - match.away.rating;
        homeGoals = Math.max(0, Math.floor(Math.random() * 3) + (diff > 5 ? 1 : 0));
        awayGoals = Math.max(0, Math.floor(Math.random() * 3) + (diff < -5 ? 1 : 0));
      }

      const homeRow = updatedTable.find(t => t.name === match.home.name);
      const awayRow = updatedTable.find(t => t.name === match.away.name);

      if (homeRow) {
        homeRow.pj += 1; homeRow.gf += homeGoals; homeRow.gc += awayGoals; homeRow.dg = homeRow.gf - homeRow.gc;
        if (homeGoals > awayGoals) { homeRow.g += 1; homeRow.pts += 3; }
        else if (homeGoals === awayGoals) { homeRow.e += 1; homeRow.pts += 1; }
        else { homeRow.p += 1; }
      }
      if (awayRow) {
        awayRow.pj += 1; awayRow.gf += awayGoals; awayRow.gc += homeGoals; awayRow.dg = awayRow.gf - awayRow.gc;
        if (awayGoals > homeGoals) { awayRow.g += 1; awayRow.pts += 3; }
        else if (awayGoals === homeGoals) { awayRow.e += 1; awayRow.pts += 1; }
        else { awayRow.p += 1; }
      }
    });

    updatedTable.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.dg !== a.dg) return b.dg - a.dg;
      return b.gf - a.gf;
    });

    return { updatedTable, userMatchRes };
  };

  const simulateLeagueRound = () => {
    // CORRECCIÓN 1: Evitar ejecución si no hay fixtures cargados o ya terminó
    if (!leagueFixturesA || leagueFixturesA.length === 0 || currentLeagueFixture >= leagueFixturesA.length) return;

    // CORRECCIÓN 5: Simulación simultánea paralela de Zona A y Zona B en cada fecha
    const resA = simulateRoundForTable(leagueFixturesA, leagueTableA, true);
    const resB = simulateRoundForTable(leagueFixturesB, leagueTableB, false);

    setLeagueTableA(resA.updatedTable);
    setLeagueTableB(resB.updatedTable);
    setLeagueMatchData(resA.userMatchRes);

    const nextFixture = currentLeagueFixture + 1;
    setCurrentLeagueFixture(nextFixture);

    // CORRECCIÓN 2: Validar fin de temporada regular antes de pasar a playoffs
    if (nextFixture >= leagueFixturesA.length) {
      setupPlayoffs(resA.updatedTable, resB.updatedTable);
    }
  };

  const setupPlayoffs = (tableA: any[], tableB: any[]) => {
    const top8A = tableA.slice(0, 8);
    const top8B = tableB.slice(0, 8);

    const octavosMatches = [
      { team1: top8A[0], team2: top8B[7], winner: null },
      { team1: top8A[1], team2: top8B[6], winner: null },
      { team1: top8A[2], team2: top8B[5], winner: null },
      { team1: top8A[3], team2: top8B[4], winner: null },
      { team1: top8B[0], team2: top8A[7], winner: null },
      { team1: top8B[1], team2: top8A[6], winner: null },
      { team1: top8B[2], team2: top8A[5], winner: null },
      { team1: top8B[3], team2: top8A[4], winner: null },
    ];

    setPlayoffMatches(octavosMatches);
    setLeaguePhase('playoffs');
    setPlayoffRound(0);
    setCurrentPlayoffMatchIndex(0);
  };

  const simulatePlayoffMatchUser = (match: any) => {
    const isTeam1User = match.team1.isUser;
    const userTeam = isTeam1User ? match.team1 : match.team2;
    const rivalObj = isTeam1User ? match.team2 : match.team1;

    const diff = teamRating - rivalObj.rating;
    let userGoals = Math.max(0, Math.floor(Math.random() * 2) + (diff > 5 ? 1 : 0));
    let rivalGoals = Math.max(0, Math.floor(Math.random() * 2) + (diff < 0 ? 1 : 0));

    if (userGoals === rivalGoals) {
      if (Math.random() > 0.5) userGoals++;
      else rivalGoals++;
    }

    const huracanSquadPlayers = positions.filter((p) => p.player !== null).map((p) => p.player);
    let userScorers: string[] = [];
    let rivalScorers: string[] = [];

    const actualUserGoals = isTeam1User ? userGoals : rivalGoals;
    const actualRivalGoals = isTeam1User ? rivalGoals : userGoals;

    for (let i = 0; i < actualUserGoals; i++) {
      const sc = huracanSquadPlayers.length > 0 ? huracanSquadPlayers[Math.floor(Math.random() * huracanSquadPlayers.length)].name : 'Jugador';
      userScorers.push(sc);
    }
    for (let i = 0; i < actualRivalGoals; i++) {
      rivalScorers.push(`Delantero de ${rivalObj.name}`);
    }

    const userWon = actualUserGoals > actualRivalGoals;
    
    setPlayoffUserMatchResult({
      userTeam: userTeam.name,
      rivalTeam: rivalObj.name,
      userGoals: actualUserGoals,
      rivalGoals: actualRivalGoals,
      userScorers,
      rivalScorers,
      userWon
    });
  };

  const advancePlayoffRound = () => {
    // CORRECCIÓN 4: Comportamiento estricto si el usuario fue eliminado
    if (!playoffUserMatchResult?.userWon) {
      setIsEliminated(true);
      return;
    }

    const updatedMatches = [...playoffMatches];
    const currentM = updatedMatches[currentPlayoffMatchIndex];
    currentM.winner = currentM.team1.isUser ? currentM.team1 : (currentM.team2.isUser ? currentM.team2 : currentM.team1);

    for (let i = 0; i < updatedMatches.length; i++) {
      if (!updatedMatches[i].winner) {
        const t1 = updatedMatches[i].team1;
        const t2 = updatedMatches[i].team2;
        updatedMatches[i].winner = t1.rating >= t2.rating ? t1 : t2;
      }
    }

    if (playoffRound === 3) {
      setIsChampion(true);
      return;
    }

    const nextRoundWinners = [];
    for (let i = 0; i < updatedMatches.length; i += 2) {
      nextRoundWinners.push({
        team1: updatedMatches[i].winner,
        team2: updatedMatches[i+1].winner,
        winner: null
      });
    }

    setPlayoffMatches(nextRoundWinners);
    setPlayoffRound(playoffRound + 1);
    setCurrentPlayoffMatchIndex(0);
    setPlayoffUserMatchResult(null);
  };

  return (
    <main className="min-h-screen w-full bg-[#080808] text-white overflow-x-hidden flex flex-col relative select-none">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-red-600 rounded-full blur-[180px] -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-red-700 rounded-full blur-[180px] bottom-[-200px] right-[-100px]" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 md:px-16 py-4 shrink-0">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setInDraft(false);
            setInMatch(false);
            setInLeagueMatch(false);
            setInPenaltyShootout(false);
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-black text-lg shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            H
          </div>
          <div>
            <h1 className="font-black tracking-tight text-base sm:text-lg">CAH SIMULADOR</h1>
            <p className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest">
              CAMPEÓN COPA ARGENTINA 2014
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <button 
            onClick={() => setShowLeagueModal(true)}
            className="hover:text-white transition cursor-pointer text-red-400 font-bold"
          >
            Modo Liga
          </button>
          <button 
            onClick={() => window.open('https://twitter.com/leviquemero', '_blank')}
            className="hover:text-white transition cursor-pointer"
          >
            X @leviquemero
          </button>
        </div>
      </nav>

      {!inDraft && !inMatch ? (
        <section className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 max-w-7xl mx-auto w-full my-auto py-8">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-red-500 font-bold tracking-[0.3em] text-xs sm:text-sm mb-4">
              CLUB ATLÉTICO HURACÁN
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
              ARMÁ
              <br />
              <span className="text-red-600">
                TU <span className="text-white">H</span>ISTORIA.
              </span>
            </h2>
            <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-gray-400 text-sm sm:text-base md:text-lg">
              Armá tu plantel histórico una sola vez y guíalo en la Copa Argentina o en el Modo Liga con dos zonas y Playoffs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setShowMenu(true)}
                className="group px-8 py-4 bg-red-600 hover:bg-red-700 transition-all rounded-xl font-black text-base shadow-[0_0_30px_rgba(220,38,38,0.35)] cursor-pointer"
              >
                COMENZAR A JUGAR
                <span className="ml-3 group-hover:translate-x-2 inline-block transition">→</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex relative items-center justify-center mt-10 lg:mt-0">
            <div className="absolute w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
            <div className="relative animate-orbit-glow cursor-pointer group">
              <img
                src="/huracanpng.png"
                alt="Escudo Huracán"
                className="w-80 h-80 object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </section>
      ) : inDraft && !inMatch ? (
        <section className="relative z-10 flex-1 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col justify-center py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-2 pb-2 border-b border-white/10 gap-2">
            <button
              onClick={() => setInDraft(false)}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/25 transition rounded-lg text-xs font-bold cursor-pointer"
            >
              ← SALIR
            </button>
            <div className="text-center">
              <h2 className="text-red-500 font-black text-2xl md:text-3xl tracking-wide uppercase">
                {currentSeason?.season}
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Táctica: <span className="text-white font-bold">{formationsConfig[selectedFormationKey].name}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              {!isTeamComplete && (
                <button
                  onClick={handleAutoDraft}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white transition rounded-lg text-xs font-black shadow-[0_0_15px_rgba(217,119,6,0.3)] cursor-pointer"
                >
                  ⚡ AUTO DRAFT
                </button>
              )}
              <div className="bg-red-600/20 border border-red-500/40 px-3 py-1 rounded-xl text-center shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <span className="block text-[9px] text-gray-400 uppercase font-bold">Valoración</span>
                <span className="text-sm font-black text-red-400">⭐ {teamRating || '--'}</span>
              </div>
            </div>
          </div>

          {selectedPlayer && (
            <div className="bg-red-600/90 border border-white text-white px-4 py-2 rounded-xl mb-2 text-center text-xs font-bold animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Seleccionaste a <span className="underline">{selectedPlayer.name} ({selectedPlayer.pos})</span>. ¡Hacé clic en una casilla iluminada de la cancha!
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 bg-[#111]/90 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md">
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                Plantel disponible (Seleccioná un jugador)
              </p>
              <div className="max-h-[350px] lg:max-h-[420px] overflow-y-auto pr-2 space-y-2">
                {currentSeason?.players.map((player: any, idx: number) => {
                  const isChosen = chosenNames.includes(player.name);
                  const hasSlots = positions.some((p) => p.category === player.pos && p.player === null);
                  const isDisabled = isChosen || !hasSlots;
                  const isSelected = selectedPlayer?.name === player.name;

                  return (
                    <div
                      key={idx}
                      onClick={() => !isDisabled && handleSelectPlayerFromList(player)}
                      className={`p-2.5 rounded-xl flex justify-between items-center border transition-all ${
                        isDisabled
                          ? 'bg-black/40 border-white/5 opacity-30 cursor-not-allowed'
                          : isSelected
                          ? 'bg-red-600/40 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] cursor-pointer'
                          : 'bg-white/5 border-white/10 hover:border-red-500 cursor-pointer hover:bg-white/10'
                      }`}
                    >
                      <span className="text-xs font-medium">
                        <strong className="text-red-500 mr-1.5">[{player.pos}]</strong> {player.name}
                        {!hasSlots && !isChosen && <span className="text-[10px] text-gray-500 ml-2">(Sin lugar)</span>}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-black ${isDisabled ? 'bg-white/5 text-gray-600' : 'bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.3)]'}`}>
                        ⭐ {player.rating}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 border border-emerald-500/30 rounded-2xl p-4 shadow-2xl relative overflow-x-auto overflow-y-hidden flex flex-col justify-between min-h-[420px]">
              <div className="absolute inset-0 border-2 border-white/10 m-3 rounded-xl pointer-events-none flex flex-col items-center justify-center">
                <div className="w-28 h-28 border border-white/10 rounded-full"></div>
                <div className="absolute top-0 w-36 h-14 border-b border-x border-white/10"></div>
                <div className="absolute bottom-0 w-36 h-14 border-t border-x border-white/10"></div>
              </div>

              <div className="relative z-10 text-center mb-1">
                <span className="bg-black/40 px-3 py-0.5 rounded-full text-[10px] tracking-widest font-black text-emerald-400 border border-emerald-500/20 uppercase">
                  {formationsConfig[selectedFormationKey].name} (Hacé clic en un casillero)
                </span>
              </div>

              <div className="relative z-10 flex flex-col justify-between py-2 h-full flex-1 min-w-[320px]">
                {(() => {
                  let globalIndexCounter = 0;
                  return formationsConfig[selectedFormationKey].layout.map((rowConfig, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center items-center gap-2 sm:gap-3 px-2">
                      {rowConfig.map((item) => {
                        const currentIndex = globalIndexCounter++;
                        const pos = positions[currentIndex] || { player: null, label: item.label };
                        const isAvailableToPlace = selectedPlayer && pos.player === null && pos.category === selectedPlayer.pos;

                        return (
                          <div
                            key={pos.id || currentIndex}
                            onClick={() => isAvailableToPlace && handlePlacePlayerInField(currentIndex)}
                            className={`w-24 sm:w-28 shrink-0 backdrop-blur-sm border rounded-xl py-2 px-1.5 sm:py-2.5 sm:px-2 text-center shadow-lg transition-all ${
                              isAvailableToPlace
                                ? 'border-white bg-red-600/60 animate-pulse cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.7)] text-white'
                                : selectedPlayer && pos.player === null
                                ? 'border-white/10 bg-black/60 opacity-40 cursor-not-allowed'
                                : 'border-white/20 bg-black/60 cursor-default'
                            }`}
                          >
                            <span className={`block text-[11px] sm:text-xs font-black truncate ${pos.player ? 'text-white' : isAvailableToPlace ? 'text-white font-extrabold' : 'text-emerald-300/70'}`}>
                              {pos.player ? pos.player.name : pos.label}
                            </span>
                            {pos.player && (
                              <span className="text-[10px] text-red-400 font-bold mt-0.5 block">⭐ {pos.player.rating}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>

          {isTeamComplete && (
            <div className="mt-3">
              <button
                onClick={prepareMatchForCurrentStage}
                className="w-full py-3 bg-green-600 hover:bg-green-700 transition font-black rounded-xl text-xs shadow-[0_0_20px_rgba(22,163,74,0.4)] cursor-pointer"
              >
                {gameMode === 'league' ? 'INICIAR MODO LIGA (ZONA A y B)' : `COMENZAR COPA ARGENTINA (${cupStages[currentStageIndex].name})`}
              </button>
            </div>
          )}
        </section>
      ) : inLeagueMatch ? (
        <section className="relative z-10 flex-1 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col justify-center py-6">
          <div className="bg-[#111]/90 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-red-500">MODO LIGA - {leaguePhase === 'regular' ? 'FASE REGULAR (ZONAS A Y B)' : 'PLAYOFFS'}</h2>
                <p className="text-xs text-gray-400">
                  {leaguePhase === 'regular' ? `Fecha ${currentLeagueFixture} de ${leagueFixturesA.length}` : `Ronda: ${playoffRound === 0 ? 'Octavos de Final' : playoffRound === 1 ? 'Cuartos de Final' : playoffRound === 2 ? 'Semifinal' : 'Gran Final'}`}
                </p>
              </div>
              <button
                onClick={() => {
                  setInMatch(false);
                  setInLeagueMatch(false);
                  setInDraft(false);
                }}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/25 transition rounded-lg text-xs font-bold cursor-pointer"
              >
                SALIR AL MENÚ
              </button>
            </div>

            {leaguePhase === 'regular' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6 overflow-x-auto bg-black/40 p-4 rounded-2xl border border-white/10">
                  <h3 className="font-black text-xs text-red-400 mb-2 uppercase">Zona A (Con Huracán)</h3>
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th className="py-2 px-1">#</th>
                        <th className="py-2 px-1">Equipo</th>
                        <th className="py-2 px-1 text-center">Pts</th>
                        <th className="py-2 px-1 text-center">PJ</th>
                        <th className="py-2 px-1 text-center">DG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leagueTableA.map((team, idx) => (
                        <tr key={idx} className={`border-b border-white/5 ${idx < 8 ? 'text-green-300' : 'text-gray-400'} ${team.isUser ? 'bg-red-600/30 font-bold text-white' : ''}`}>
                          <td className="py-1.5 px-1">{idx + 1}</td>
                          <td className="py-1.5 px-1 flex items-center gap-1.5 truncate max-w-[120px]">
                            <img src={team.logo} alt={team.name} className="w-4 h-4 object-contain" />
                            <span className="truncate">{team.name}</span>
                          </td>
                          <td className="py-1.5 px-1 text-center font-black">{team.pts}</td>
                          <td className="py-1.5 px-1 text-center">{team.pj}</td>
                          <td className="py-1.5 px-1 text-center">{team.dg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[10px] text-gray-500 mt-2">* Los primeros 8 clasifican a playoffs.</p>
                </div>

                <div className="lg:col-span-6 overflow-x-auto bg-black/40 p-4 rounded-2xl border border-white/10">
                  <h3 className="font-black text-xs text-amber-400 mb-2 uppercase">Zona B (Simultáneo)</h3>
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th className="py-2 px-1">#</th>
                        <th className="py-2 px-1">Equipo</th>
                        <th className="py-2 px-1 text-center">Pts</th>
                        <th className="py-2 px-1 text-center">PJ</th>
                        <th className="py-2 px-1 text-center">DG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leagueTableB.map((team, idx) => (
                        <tr key={idx} className={`border-b border-white/5 ${idx < 8 ? 'text-green-300' : 'text-gray-400'}`}>
                          <td className="py-1.5 px-1">{idx + 1}</td>
                          <td className="py-1.5 px-1 flex items-center gap-1.5 truncate max-w-[120px]">
                            <img src={team.logo} alt={team.name} className="w-4 h-4 object-contain" />
                            <span className="truncate">{team.name}</span>
                          </td>
                          <td className="py-1.5 px-1 text-center font-black">{team.pts}</td>
                          <td className="py-1.5 px-1 text-center">{team.pj}</td>
                          <td className="py-1.5 px-1 text-center">{team.dg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[10px] text-gray-500 mt-2">* Los primeros 8 clasifican a playoffs.</p>
                </div>

                <div className="lg:col-span-12 flex flex-col sm:flex-row justify-between items-center bg-black/60 border border-white/10 rounded-2xl p-4 gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-sm text-red-400 uppercase">Resultado del último partido:</h3>
                    {leagueMatchData ? (
                      <div className="text-xs text-white mt-1">
                        <p>{leagueMatchData.isHome ? 'Local' : 'Visitante'} vs {leagueMatchData.opponent.name}: <strong className="text-red-500 font-black text-base">{leagueMatchData.homeGoals} - {leagueMatchData.awayGoals}</strong></p>
                        <div className="mt-1 text-[11px] text-gray-300">
                          {leagueMatchData.homeScorers?.length > 0 && <p><span className="text-red-400 font-bold">Goles locales:</span> {leagueMatchData.homeScorers.join(', ')}</p>}
                          {leagueMatchData.awayScorers?.length > 0 && <p><span className="text-red-400 font-bold">Goles visitantes:</span> {leagueMatchData.awayScorers.join(', ')}</p>}
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400 italic">Simulá la primera fecha para ver los resultados.</p>
                    )}
                  </div>

                  <div>
                    {currentLeagueFixture < leagueFixturesA.length ? (
                      <button
                        onClick={simulateLeagueRound}
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 transition font-black rounded-xl text-xs shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer"
                      >
                        SIMULAR FECHA {currentLeagueFixture + 1} / {leagueFixturesA.length}
                      </button>
                    ) : (
                      <div className="text-center py-2 px-4 bg-amber-600/20 border border-amber-500/40 rounded-xl">
                        <p className="text-amber-400 font-bold text-xs">¡Fase Regular Finalizada! Cargando Playoffs...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-black/50 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-black text-amber-400 mb-2 uppercase text-center">
                  {playoffRound === 0 ? 'Octavos de Final' : playoffRound === 1 ? 'Cuartos de Final' : playoffRound === 2 ? 'Semifinal' : 'Gran Final'}
                </h3>
                <p className="text-xs text-gray-400 text-center mb-6">Recordá: Se cruzan el mejor clasificado de una zona contra el peor clasificado de la otra.</p>

                {isEliminated ? (
                  <div className="text-center py-8">
                    <p className="text-red-500 font-black text-2xl mb-4">¡FUISTE ELIMINADO EN ESTA FASE DE PLAYOFFS!</p>
                    <button
                      onClick={() => { setInMatch(false); setInLeagueMatch(false); setInDraft(false); setIsEliminated(false); }}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-xl font-bold text-xs"
                    >
                      VOLVER AL MENÚ
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {playoffMatches.map((m, idx) => {
                        const isUserInMatch = m.team1.isUser || m.team2.isUser;
                        return (
                          <div key={idx} className={`p-4 rounded-xl border flex flex-col justify-between ${isUserInMatch ? 'bg-red-600/20 border-red-500' : 'bg-white/5 border-white/10'}`}>
                            <div className="flex justify-between items-center text-xs font-bold mb-3">
                              <div className="flex items-center gap-2">
                                <img src={m.team1.logo} alt="" className="w-5 h-5 object-contain" />
                                <span>{m.team1.name} (⭐ {m.team1.rating})</span>
                              </div>
                              <span className="text-gray-500">vs</span>
                              <div className="flex items-center gap-2">
                                <span>{m.team2.name} (⭐ {m.team2.rating})</span>
                                <img src={m.team2.logo} alt="" className="w-5 h-5 object-contain" />
                              </div>
                            </div>

                            {m.winner ? (
                              <div className="text-center py-1 bg-green-600/20 rounded text-[11px] text-green-400 font-bold">
                                Ganador: {m.winner.name}
                              </div>
                            ) : isUserInMatch && !playoffUserMatchResult ? (
                              <button
                                onClick={() => simulatePlayoffMatchUser(m)}
                                className="w-full py-2 bg-red-600 hover:bg-red-700 transition rounded text-xs font-black cursor-pointer"
                              >
                                JUGAR PARTIDO DE PLAYOFF
                              </button>
                            ) : playoffUserMatchResult && isUserInMatch ? (
                              <div className="text-center py-2 bg-black/40 rounded text-xs">
                                Resultado: <strong className="text-white">{playoffUserMatchResult.userGoals} - {playoffUserMatchResult.rivalGoals}</strong>
                                <div className="mt-1 text-[11px] text-gray-300">
                                  {playoffUserMatchResult.userScorers?.length > 0 && <p><span className="text-red-400 font-bold">Goles nuestros:</span> {playoffUserMatchResult.userScorers.join(', ')}</p>}
                                  {playoffUserMatchResult.rivalScorers?.length > 0 && <p><span className="text-red-400 font-bold">Goles rivales:</span> {playoffUserMatchResult.rivalScorers.join(', ')}</p>}
                                </div>
                                <p className={playoffUserMatchResult.userWon ? 'text-green-400 font-bold mt-1' : 'text-red-500 font-bold mt-1'}>
                                  {playoffUserMatchResult.userWon ? '¡Ganaste y clasificás!' : 'Eliminado'}
                                </p>
                              </div>
                            ) : (
                              <div className="text-center text-[11px] text-gray-400 italic">Simulado automáticamente</div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {playoffUserMatchResult && (
                      <div className="text-center">
                        <button
                          onClick={advancePlayoffRound}
                          className="px-8 py-3 bg-green-600 hover:bg-green-700 transition font-black rounded-xl text-xs shadow-[0_0_20px_rgba(22,163,74,0.4)] cursor-pointer"
                        >
                          AVANZAR A LA SIGUIENTE FASE / RONDA →
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="relative z-10 flex-1 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto w-full flex flex-col justify-center py-6">
          <div className="bg-[#111]/90 border border-white/10 rounded-3xl p-4 sm:p-8 shadow-2xl backdrop-blur-md text-center">
            {matchEnded && (isChampion || isEliminated) ? (
              <div className="animate-fadeIn">
                <p className={`font-bold tracking-[0.2em] text-xs uppercase mb-1 ${isChampion ? 'text-amber-400' : 'text-red-500'}`}>
                  {isChampion ? '🏆 ¡CAMPEÓN DE LA COPA / LIGA!' : '❌ ELIMINADO'}
                </p>
                <h2 className="text-xl sm:text-3xl font-black mb-6">HURACÁN vs {rivalTeam?.name.toUpperCase()}</h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-black/50 border border-white/10 py-4 sm:py-6 px-4 sm:px-8 rounded-2xl mb-4 shadow-inner">
                  <div className="text-center sm:text-right flex-1 flex flex-col sm:flex-row items-center justify-end gap-3 w-full sm:w-auto">
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold text-gray-400">HURACÁN (⭐ {teamRating})</span>
                      <span className="text-4xl sm:text-5xl font-black text-red-500">{matchScore.huracan}</span>
                    </div>
                    <img src="/huracanpng.png" alt="Huracán" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
                  </div>

                  <span className="text-xl sm:text-2xl font-bold text-gray-500 hidden sm:inline">-</span>

                  <div className="text-center sm:text-left flex-1 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <img src={rivalTeam?.logo} alt={rivalTeam?.name} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold text-gray-400">{rivalTeam?.name} (⭐ {rivalTeam?.rating})</span>
                      <span className="text-4xl sm:text-5xl font-black text-white">{matchScore.rival}</span>
                    </div>
                  </div>
                </div>
                <div className="my-4 px-4 py-2 bg-black/40 rounded-xl max-w-xs mx-auto border border-white/10 text-left">
                  <p className="text-[11px] font-bold text-red-400 uppercase mb-1 tracking-wider text-center">Goleadores / Incidencias</p>
                  {matchScorersSummary && matchScorersSummary.length > 0 ? (
                    matchScorersSummary.map((scorerText, idx) => (
                      <p key={idx} className="text-xs text-gray-200 flex items-center justify-center gap-1">
                        ⚽ {scorerText}
                      </p>
                    ))
                  ) : (
                    <p className="text-xs text-gray-500 italic text-center">Sin goles registrados</p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => { setInMatch(false); setInDraft(false); }}
                    className="flex-1 py-3 bg-white/10 hover:bg-white/20 transition font-bold rounded-xl text-xs cursor-pointer"
                  >
                    VOLVER AL MENÚ
                  </button>
                  <button
                    onClick={() => handleSelectFormation(selectedFormationKey, gameMode)}
                    className="flex-1 py-3 bg-red-600 hover:bg-red-700 transition font-black rounded-xl text-xs shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer"
                  >
                    JUGAR NUEVO TORNEO
                  </button>
                </div>
              </div>
            ) : matchEnded ? (
              <div className="animate-fadeIn">
                <p className="text-green-400 font-bold tracking-[0.2em] text-xs uppercase mb-1">¡CLASIFICADO A LA SIGUIENTE FASE!</p>
                <h2 className="text-xl sm:text-3xl font-black mb-6">HURACÁN vs {rivalTeam?.name.toUpperCase()}</h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-black/50 border border-white/10 py-4 sm:py-6 px-4 sm:px-8 rounded-2xl mb-4 shadow-inner">
                  <div className="text-center sm:text-right flex-1 flex flex-col sm:flex-row items-center justify-end gap-3 w-full sm:w-auto">
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold text-gray-400">HURACÁN (⭐ {teamRating})</span>
                      <span className="text-4xl sm:text-5xl font-black text-red-500">{matchScore.huracan}</span>
                    </div>
                    <img src="/huracanpng.png" alt="Huracán" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
                  </div>

                  <span className="text-xl sm:text-2xl font-bold text-gray-500 hidden sm:inline">-</span>

                  <div className="text-center sm:text-left flex-1 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <img src={rivalTeam?.logo} alt={rivalTeam?.name} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold text-gray-400">{rivalTeam?.name} (⭐ {rivalTeam?.rating})</span>
                      <span className="text-4xl sm:text-5xl font-black text-white">{matchScore.rival}</span>
                    </div>
                  </div>
                </div>

                <div className="my-4 px-4 py-2 bg-black/40 rounded-xl max-w-xs mx-auto border border-white/10 text-left">
                  <p className="text-[11px] font-bold text-red-400 uppercase mb-1 tracking-wider text-center">Goleadores / Incidencias</p>
                  {matchScorersSummary && matchScorersSummary.length > 0 ? (
                    matchScorersSummary.map((scorerText, idx) => (
                      <p key={idx} className="text-xs text-gray-200 flex items-center justify-center gap-1">
                        ⚽ {scorerText}
                      </p>
                    ))
                  ) : (
                    <p className="text-xs text-gray-500 italic text-center">Sin goles registrados</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => { setInMatch(false); setInDraft(false); }}
                    className="flex-1 py-3 bg-white/10 hover:bg-white/20 transition font-bold rounded-xl text-xs shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
                  >
                    VOLVER AL MENÚ
                  </button>
                  <button
                    onClick={() => {
                      setCurrentStageIndex(currentStageIndex + 1);
                      prepareMatchForCurrentStage();
                      setInMatch(true);
                      setInPenaltyShootout(false);
                    }}
                    className="flex-1 py-3 bg-green-600 hover:bg-green-700 transition font-black rounded-xl text-xs shadow-[0_0_20px_rgba(22,163,74,0.4)] cursor-pointer"
                  >
                    SIGUIENTE PARTIDO ({cupStages[currentStageIndex + 1]?.name})
                    →
                  </button>
                </div>
              </div>
            ) : inPenaltyShootout ? (
              <div className="animate-fadeIn">
                <p className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase mb-2">Tanda de Penales en Vivo</p>
                <h2 className="text-xl sm:text-2xl font-black mb-4">HURACÁN ({huracanPensCount}) vs ({rivalPensCount}) {rivalTeam?.name.toUpperCase()}</h2>

                <div className="flex justify-center gap-6 mb-4">
                  <div className="bg-red-600/20 border border-red-500/40 p-3 rounded-xl min-w-[120px]">
                    <span className="text-[10px] text-gray-400 block uppercase font-bold">Huracán</span>
                    <span className="text-3xl font-black text-red-500">{huracanPensCount}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl min-w-[120px]">
                    <span className="text-[10px] text-gray-400 block uppercase font-bold">{rivalTeam?.name}</span>
                    <span className="text-3xl font-black text-white">{rivalPensCount}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left">
                  <div className="bg-black/50 border border-white/10 p-3 rounded-xl">
                    <p className="text-xs font-bold text-red-400 mb-2 uppercase border-b border-white/10 pb-1">Penales Huracán</p>
                    <div className="space-y-1 max-h-40 overflow-y-auto">
                      {penaltyKicksLog.filter(k => k.team === 'huracan').map((kick, i) => (
                        <div key={i} className="text-xs flex justify-between items-center bg-white/5 p-1.5 rounded">
                          <span>Ronda {kick.round}</span>
                          <span className={kick.scored ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                            {kick.scored ? '⚽ Gol' : '❌ Erró'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/50 border border-white/10 p-3 rounded-xl">
                    <p className="text-xs font-bold text-amber-400 mb-2 uppercase border-b border-white/10 pb-1">Penales {rivalTeam?.name}</p>
                    <div className="space-y-1 max-h-40 overflow-y-auto">
                      {penaltyKicksLog.filter(k => k.team === 'rival').map((kick, i) => (
                        <div key={i} className="text-xs flex justify-between items-center bg-white/5 p-1.5 rounded">
                          <span>Ronda {kick.round}</span>
                          <span className={kick.scored ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                            {kick.scored ? '⚽ Gol' : '❌ Erró'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNextPenaltyKick}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 transition font-black rounded-xl text-xs shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer animate-pulse"
                >
                  {penaltyStep % 2 === 0 ? 'PATEAR PENAL (HURACÁN)' : `TURNO DE ${rivalTeam?.name.toUpperCase()} (PATEAR PENAL)`} →
                </button>
              </div>
            ) : (
              <div>
                <p className="text-red-500 font-bold tracking-[0.2em] text-xs uppercase mb-2">Copa Argentina • {cupStages[currentStageIndex]?.name}</p>
                <h2 className="text-xl sm:text-3xl font-black mb-4">HURACÁN vs {rivalTeam?.name.toUpperCase()}</h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-black/50 border border-white/10 py-4 sm:py-6 px-4 sm:px-8 rounded-2xl mb-4 shadow-inner relative">
                  <div className="text-center sm:text-right flex-1 flex flex-col sm:flex-row items-center justify-end gap-3 w-full sm:w-auto">
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold text-gray-400">HURACÁN (⭐ {teamRating})</span>
                      <span className="text-4xl sm:text-5xl font-black text-red-500">{matchScore.huracan}</span>
                    </div>
                    <img src="/huracanpng.png" alt="Huracán" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-2 sm:py-0 border-y sm:border-y-0 sm:border-x border-white/10 w-full sm:w-auto">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping mb-1"></span>
                    <span className="text-lg font-black text-white tracking-widest">{matchMinute}'</span>
                    <span className="text-[9px] text-gray-400 uppercase">En Vivo</span>
                  </div>

                  <div className="text-center sm:text-left flex-1 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <img src={rivalTeam?.logo} alt={rivalTeam?.name} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold text-gray-400">{rivalTeam?.name} (⭐ {rivalTeam?.rating})</span>
                      <span className="text-4xl sm:text-5xl font-black text-white">{matchScore.rival}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mb-4">
                  <button
                    onClick={finishMatchInstantly}
                    className="w-full sm:w-auto px-4 py-1.5 bg-amber-600 hover:bg-amber-700 transition text-white rounded-xl text-xs font-black shadow-[0_0_15px_rgba(217,119,6,0.3)] cursor-pointer"
                  >
                    ⚡ SIMULAR RÁPIDO
                  </button>
                </div>

                <div className="bg-black/60 border border-white/10 rounded-2xl p-4 text-left h-36 overflow-y-auto mb-2 space-y-2 flex flex-col-reverse">
                  {matchEvents.map((ev, i) => (
                    <p key={i} className={`text-xs font-medium ${ev.includes('⚽') ? 'text-red-400 font-bold bg-red-950/40 p-2 rounded-lg border border-red-500/20' : 'text-gray-300'}`}>
                      {ev}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {showMenu && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-lg w-full shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">SELECCIONAR MODO DE JUEGO</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8">Elegí entre disputar la Copa Argentina o el Modo Liga con dos zonas y Playoffs.</p>
            <button
              onClick={() => { setGameMode('cup'); setShowMenu(false); setShowFormationModal(true); }}
              className="w-full text-left p-5 rounded-xl bg-red-600 hover:bg-red-700 transition mb-3 cursor-pointer shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              <b className="block text-lg">MODO COPA ARGENTINA</b>
              <span className="text-sm text-white/70">Camino eliminatorio desde 32avos hasta la final</span>
            </button>
            <button
              onClick={() => { setGameMode('league'); setShowMenu(false); setShowLeagueModal(true); }}
              className="w-full text-left p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition mb-3 cursor-pointer"
            >
              <b className="block text-lg text-red-400">MODO LIGA (DOS ZONAS + PLAYOFFS)</b>
              <span className="text-sm text-white/70">Fase regular simultánea y cruces definitorios</span>
            </button>
            <button
              onClick={() => setShowMenu(false)}
              className="w-full mt-4 py-3 text-gray-400 hover:text-white cursor-pointer font-semibold transition text-sm"
            >
              CANCELAR
            </button>
          </div>
        </div>
      )}

      {showFormationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-xl w-full shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">ELEGIR FORMACIÓN ({gameMode === 'league' ? 'LIGA' : 'COPA'})</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6">Seleccioná el esquema táctico para armar tu plantel.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {Object.entries(formationsConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => handleSelectFormation(key, gameMode)}
                  className="p-4 rounded-xl bg-white/5 hover:bg-red-600/30 border border-white/10 hover:border-red-500 transition text-left cursor-pointer group"
                >
                  <span className="block font-black text-base group-hover:text-red-400 transition">{config.name}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => { setShowFormationModal(false); setShowMenu(true); }}
              className="w-full py-3 text-gray-400 hover:text-white cursor-pointer font-semibold transition text-sm"
            >
              ← VOLVER
            </button>
          </div>
        </div>
      )}

      {showLeagueModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-xl w-full shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black mb-2 text-red-500">MODO LIGA</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Competí en la Zona A mientras se actualizan las posiciones de la Zona B en simultáneo. Los mejores 8 clasifican a los playoffs cruzados.
            </p>

            <button
              onClick={() => {
                setGameMode('league');
                setShowLeagueModal(false);
                setShowFormationModal(true);
              }}
              className="w-full text-left p-5 rounded-xl bg-red-600 hover:bg-red-700 transition mb-3 cursor-pointer shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              <b className="block text-lg">SELECCIONAR TÁCTICA Y ARMAR PLANTEL</b>
              <span className="text-sm text-white/70">Comenzar la aventura en la Liga</span>
            </button>

            <button
              onClick={() => setShowLeagueModal(false)}
              className="w-full mt-4 py-3 text-gray-400 hover:text-white cursor-pointer font-semibold transition text-sm"
            >
              CANCELAR
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
