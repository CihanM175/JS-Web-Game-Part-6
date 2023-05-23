function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)
    
    let stopTimeout;

function walkEast(time) {
  return new Promise((resolve) => {
    direction = 'east';
    element.src = './assets/red-character/east.gif';

    setTimeout(() => {
      resolve();
    }, time);
  }).then(() => {
    stop();
  });
}

function walkNorth(time) {
  return new Promise((resolve) => {
    direction = 'north';
    element.src = './assets/red-character/north.gif';

    stopTimeout = setTimeout(() => {
      direction = 'stop';
      element.src = './assets/red-character/static.gif';
    });

    setTimeout(() => {
      clearTimeout(stopTimeout);
      resolve();
    }, time);
  }).then(() => {
    stop();
  });
}

function walkSouth(time) {
  return new Promise((resolve) => {
    direction = 'south';
    element.src = './assets/red-character/south.gif';

    stopTimeout = setTimeout(() => {
      direction = 'stop';
      element.src = './assets/red-character/static.gif';
    });

    setTimeout(() => {
      clearTimeout(stopTimeout);
      resolve();
    }, time);
  }).then(() => {
    stop();
  });
}

function walkWest(time) {
  return new Promise((resolve) => {
    direction = 'west';
    element.src = './assets/red-character/west.gif';

    stopTimeout = setTimeout(() => {
      direction = 'stop';
      element.src = './assets/red-character/static.gif';
    });

    setTimeout(() => {
      clearTimeout(stopTimeout);
      resolve();
    }, time);
  }).then(() => {
    stop();
  });
}

function stop() {
  direction = null;
  element.src = './assets/red-character/static.gif';
}

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}