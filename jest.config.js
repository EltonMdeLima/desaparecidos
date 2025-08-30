module.exports = {
  // Indica que você está utilizando o ambiente de testes do Node.js
  testEnvironment: 'jsdom',

  // Mapeia os arquivos de teste que devem ser executados
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)' // Busca arquivos com sufixo `.test.js` ou `.spec.js`
  ],

  // Transpila o código para garantir que o Jest consiga rodar o código moderno
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  // Incluir ou excluir arquivos para testes, pode ser útil para ignorar arquivos como node_modules
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/",
  ],

  // Diretórios onde o Jest procura os módulos
  moduleDirectories: ['node_modules', '<rootDir>'],

  // Configura o uso do Babel para compilar o código, se necessário
  transformIgnorePatterns: [
    '/node_modules/', // Ignore as dependências externas durante a transformação
  ],

  // Permite a utilização de mocks automáticos em arquivos específicos
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Encontra os mocks automáticos para o Next.js, se necessário
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // Caso use tipos com TypeScript
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },

  // Casos de cobertura de testes (cobertura de 100% pode ser ajustada)
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',  // Ajuste conforme a estrutura do seu código
    '!src/**/*.d.ts',             // Ignora arquivos de definição de tipo
  ],

  // Reporta os resultados dos testes com diferentes formatos
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports/junit', outputName: 'jest.xml' }],
  ],

  // Sabe como lidar com os arquivos de imagem e outros recursos estáticos
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
