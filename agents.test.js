const agents = require('./agents.js');
const fs = require('fs');

test('has 11 scenes defined', () => {
  expect(Object.keys(agents).length).toBe(11);
});

test('each agent has onEnter and onExit', () => {
  for (const key of Object.keys(agents)) {
    expect(typeof agents[key].onEnter).toBe('function');
    expect(typeof agents[key].onExit).toBe('function');
  }
});

test('index.html has 11 scene sections', () => {
  const html = fs.readFileSync('./index.html', 'utf8');
  const matches = html.match(/<section id="scene\d+"/g) || [];
  expect(matches.length).toBe(11);
});
