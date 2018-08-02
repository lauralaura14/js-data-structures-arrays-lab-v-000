const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
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
  drivers.slice(-1);
  return drivers;
}

function removeFirstDriver() {
  drivers.slice(1);
  return drivers;
}
