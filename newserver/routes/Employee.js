const express = require('express');
const router = express.Router();
const employee = require('../services/Employee');


router.get('/getAllEmployee', async function(req, res, next) {
    try {
      res.json(await employee.getAllEmployee());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});
router.post('/getEmployee', async function(req, res, next) {
    try {
      res.json(await employee.employee(req.body));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});
router.post('/insertEmployee', async function(req, res, next) {
    try {
      res.json(await employee.insertEmployee(req.body));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});
router.post('/updateAdress', async function(req, res, next) {
  try {
    res.json(await employee.updateAdress(req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;