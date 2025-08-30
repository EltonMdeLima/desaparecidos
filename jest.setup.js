// jest.setup.js

// Configuração do Enzyme (se estiver utilizando React)
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';  // ou a versão correspondente ao seu projeto
configure({ adapter: new Adapter() });

// Configuração do Mock de API Global, se necessário
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mocked data' })
  })
);

// Mock de objetos globais, como `localStorage`, `sessionStorage`, etc.
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

// Configuração de variáveis de ambiente para os testes
process.env.REACT_APP_API_URL = 'http://localhost:3000'; // exemplo para React

// Configuração do teste para simular ou manipular funções de tempo
jest.useFakeTimers();

// Outros mocks globais ou configurações, dependendo do que seu projeto precisa

// Se você estiver usando qualquer outra biblioteca para facilitar os testes, pode ser necessário configurá-la aqui também
