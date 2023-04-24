import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import LoginService from '../database/services/LoginService';
import { invalidEmail, invalidPassword, missingFields, validLogin } from './mocks/login.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
  afterEach(() => {
    sinon.restore();
  })

  describe('Testa os erros caso falte campos preenchidos', () => {
    it('Testa se retorna status 400 e a mensagem de erro caso falte password na requisição', async () => {
      const response = await chai.request(app).post('/login').send({ email: 'email@email.com'});
      expect(response).to.have.status(400);
      expect(response.body).to.deep.equal(missingFields);
    })
    it('Testa se retorna status 400 a mensagem de erro caso falte email na requisição', async () => {
      const response = await chai.request(app).post('/login').send({ password: '123456'});
      expect(response).to.have.status(400);
      expect(response.body).to.deep.equal(missingFields);
    })
  })

  describe('Testa os erros caso email ou senha sejam inválidos', () => {
    it('Testa se retorna status 401 e mensagem de erro caso o email esteja errado', async () => {
      const response = await chai.request(app).post('/login').send({ email: 'email@email.com', password: '1234'});
      expect(response).to.have.status(401);
      expect(response.body).to.deep.equal(invalidEmail);
    })
    it('Testa se retorna status 401 e mensagem de erro caso o email esteja errado', async () => {
      const response = await chai.request(app).post('/login').send({ email: 'don@gmail.com', password: '123456'});
      expect(response).to.have.status(401);
      expect(response.body).to.deep.equal(invalidPassword);
    })
  })

  describe('Testa se faz a requisição corretamente', () => {
    it('Testa se retorna um token válido caso o email e a senha sejam corretos', async () => {
      const response = await chai.request(app).post('/login').send(validLogin);
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('token');
      const token = response.body.token;
      expect(token).to.be.a('string');
      expect(token.split('.').length).to.equal(3);
    })
  })
})