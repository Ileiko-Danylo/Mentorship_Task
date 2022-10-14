const server = require('../../src/app');
const request = require('supertest');

describe('Projects router', () => {
  afterAll((done) => {
    server.close();
    done();
  });
  it('should test login page', async () => {
    await request(server).get('/login').expect(200);
  });
  it('should get projects', async () => {
    await request(server)
      .get('/projects/allProjects')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),

              description: expect.any(String),

              name: expect.any(String),
            }),
          ])
        );
      });
  });

  it('should get single project ', async () => {
    await request(server)
      .get('/projects/23781207/')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),

            description: expect.any(String),
            path: expect.any(String),
            name: expect.any(String),
          })
        );
      });
  });
  it('should get single project commits', async () => {
    await request(server)
      .get('/projects/23781207/commits')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              short_id: expect.any(String),
              title: expect.any(String),
              message: expect.any(String),
              author_name: expect.any(String),
              author_email: expect.any(String),
            }),
          ])
        );
      });
  });
  it('should get commit', async () => {
    await request(server)
      .get('/projects/40226095/commits/0dc463dc6d05d5386959b6d66821a62f50e6930e')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            short_id: expect.any(String),
            title: expect.any(String),
            message: expect.any(String),
            author_name: expect.any(String),
            author_email: expect.any(String),
          })
        );
      });
  });
});
