/**
 * Created by haojiachen on 2016/12/7.
 */
const baseRouter = require('../utils/baseRouter');
const router = require('express').Router();
const db = require('../model');

module.exports = baseRouter(router, 'Menu');
