const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newArray = [...drivers, name];
  return newArray;
}

function prependDriver(name) {
  const newArray = [name, ...drivers];
  return newArray;
}

function removeLastDriver() {
  return drivers.slice(-1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
