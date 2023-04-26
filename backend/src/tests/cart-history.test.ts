import * as mocha from 'mocha';
import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
// @ts-ignore
import chaiHttp = require('chai-http');
import { cartItems } from './mocks/cart-history.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota /cart-history/:id', () => {
  it('Testa se retorna status 200 e a lista de compras', async () => {
    const response = await chai.request(app).get('/cart-history/1');
      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal(cartItems);
  });
})