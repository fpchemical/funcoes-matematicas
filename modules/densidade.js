var densidade = function (m,v) {
  return (m/v)
}
console.log('densidade', densidade(2,5))


Refatorando

const densidade = (mass, volume) => mass / volume
