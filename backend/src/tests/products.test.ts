import * as mocha from 'mocha';
import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import { products } from './mocks/products.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /products', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Testa se retorna status 200 e a lista de produtos', async () => {
    const response = await chai.request(app).get('/products');
    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(products);
  })
})