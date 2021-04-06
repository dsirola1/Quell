// const request = require('supertest');
const server = 'http://localhost:3000';
const buildItem = require('../../../quell-server/src/helper/buildItem')
// console.log('quell is====>', quell)

describe('buildItem', () => {
  test('buildItem actually works', () => {

  expect(buildItem().toEqual({}))
  })
});

