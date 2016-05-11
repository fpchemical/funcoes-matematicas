module.exports = function() {


  const grandezas = {
    g: {
      nome: 'Aceleração padrão da gravidade', 
      valor: '9.807', 
      unidade: ['m/s^2']
    },
    P0: {
      nome: 'Atmosfera padrão', 
      valor: '1.013*10^5', 
      unidade: ['Pa']
    },
    e: {
      nome: 'Carga elementar', 
      valor: '1.602*10^-19', 
      unidade: ['C']
    },
    k: {
      nome: 'Constante de Boltzmann', 
      valor: '1.381*10^-23', 
      unidade: ['J/K']
    },
    F: {
      nome: 'Constante de Faraday', 
      valor: '9.648*10^4', 
      unidade: ['C/mol']
    },
    h: {
      nome: 'Constante de Planck', 
      valor: '6.626*10^-34', 
      unidade: ['J*s']
    },
    m: {
      nome: 'Massa em repouso do elétron', 
      valor: '9.110*10^-31', 
      unidade: ['Kg']
    },
    NA: {
      nome: 'Número de avogadro', 
      valor: '6.022*10^23', 
      unidade: ['mol']
    },
    c: {
      nome: 'Velocidade da luz no vácuo', 
      valor: '299792458', 
      unidade: ['m/s']
    },
    Vmol: {
      nome: 'Volume molar padrão dos gases ideais', 
      valor: '22.41*10^-3', 
      unidade: ['L/mol']
    },
    T0: {
      nome: 'Zero da escala Celsius', 
      valor: '273.15', 
      unidade: ['K']
    }

  };
  const procuraConstantePorSimbolo = (simbolo) => {
    if(simbolo in grandezas){ return  grandezas[simbolo] }
     
  };
  return procuraConstantePorSimbolo;
};

