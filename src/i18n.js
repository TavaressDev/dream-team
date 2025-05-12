import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "chooseLanguage": "Choose your language",
      "portuguese": "Portuguese",
      "english": "English",
      
      "modalTitle": "Your Complete Dream Team!",
      "modalSubtitle": "Click and relive the moments!",
      "restartButton": "Restart",
      
      "modal": {
        "close": "×",
        "choosePlayer": "Choose the {{position}}",
        "playerPlaceholder": "Player name",
        "submit": "Submit",
        "start": "START",
        "instructions": "Instructions"
      },
      "game": {
        "completeTeam": "Your team is complete!",
        "playersSelected": "{{count}}/11 players selected"
      },
      "instructions": {
        "welcome": "Welcome to Dream Team",
        "description": "select 11 football players that you consider the greatest in history"
      },
      
      "positions": {
        "gk": "Goalkeeper",
        "def": "Defender",
        "mid": "Midfielder",
        "fw": "Forward",
        "gk1": "Goalkeeper 1",
        "def1": "Defender 1",
        "def2": "Defender 2",
        "def3": "Defender 3",
        "def4": "Defender 4",
        "mid1": "Midfielder 1",
        "mid2": "Midfielder 2",
        "mid3": "Midfielder 3",
        "fw1": "Forward 1",
        "fw2": "Forward 2",
        "fw3": "Forward 3"
      }
    }
  },
  pt: {
    translation: {
      "chooseLanguage": "Escolha o seu idioma",
      "portuguese": "Português",
      "english": "Inglês",
      
      "modalTitle": "Seu Dream Team Completo!",
      "modalSubtitle": "Clique e reveja momentos!",
      "restartButton": "Recomeçar",
      
      "modal": {
        "close": "×",
        "choosePlayer": "Escolha o {{position}}",
        "playerPlaceholder": "Nome do jogador",
        "submit": "Enviar",
        "start": "COMEÇAR",
        "instructions": "Instruções"
      },
      "game": {
        "completeTeam": "Seu time está completo!",
        "playersSelected": "{{count}}/11 jogadores selecionados"
      },"instructions": {
        "welcome": "Bem vindo ao Dream Team",
        "description": "Selecione 11 jogadores de futebol que você considera os maiores da história"
      },
      
      "positions": {
        "gk": "Goleiro",
        "def": "Defensor",
        "mid": "Meio-campista",
        "fw": "Atacante",
        "gk1": "Goleiro 1",
        "def1": "Defensor 1",
        "def2": "Defensor 2",
        "def3": "Defensor 3",
        "def4": "Defensor 4",
        "mid1": "Meio-campista 1",
        "mid2": "Meio-campista 2",
        "mid3": "Meio-campista 3",
        "fw1": "Atacante 1",
        "fw2": "Atacante 2",
        "fw3": "Atacante 3"
      }
    }
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;