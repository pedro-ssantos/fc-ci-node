'use strict'

const assert = require('assert')
const soma = require('../main.js')

describe('soma', () => {
    it('Deve somar dois numeros', () => {
        assert.equal(soma(10, 10), 20)
    })
})