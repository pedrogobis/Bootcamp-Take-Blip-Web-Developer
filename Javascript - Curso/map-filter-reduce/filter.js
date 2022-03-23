const carros = ['fiat strada', 'fiat uno', 'fiat palio', 'fiat pulse', 'vw gol', 'vw saveiro', 'vw fusca', 'vw nivus', 'gm corsa pickup', 'gm corsa sedan', 'gm corsa hatch', 'gm tracker']

console.log(carros)

console.log(carros.filter((fiat) => fiat.includes('fiat')));
console.log(carros.filter((vw) => vw.includes('vw')));
console.log(carros.filter((gm) => gm.includes('gm')));