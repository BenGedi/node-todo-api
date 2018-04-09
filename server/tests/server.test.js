const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{text: 'First test doto'}, {text: 'Second test doto'}];

beforeEach((done) => {
  // empty the DB before every request
  Todo.remove({}).then(() => {
    // add mock todos
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    const text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          // return will stop the function execution (everything down below is not gonna run)
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          // we are always empty the DB so, todos length should always be 1
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch(err => done(err));
      });
  });

  it('should not create todo with invalid data', (done) => {
    request(app)
    .post('/todos')
    .send({ })
    .expect(400)
    .end((err, res) => {
      if (err) {
        // return will stop the function execution (everything down below is not gonna run)
        return done(err);
      }

      Todo.find().then((todos) => {
        // we are always empty the DB so, todos length should always be 1
        expect(todos.length).toBe(2);
        done();
      }).catch(err => done(err));
    });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});