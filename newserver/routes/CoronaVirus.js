const express = require('express');
const router = express.Router();
const corona = require('../services/CoronaVirus');


router.get('/getAllSicks', async function(req, res, next) {
    try {
      res.json(await corona.getAllSicks());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});
router.get('/getAllHealers', async function(req, res, next) {
    try {
      res.json(await corona.getAllHealers());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});
router.get('/getAllVaccinated4', async function(req, res, next) {
    try {
      res.json(await corona.getAllVaccinated4());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});
router.get('/getAllVaccinated3', async function(req, res, next) {
  try {
    res.json(await corona.getAllVaccinated3());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.get('/getAllVaccinated2', async function(req, res, next) {
  try {
    res.json(await corona.getAllVaccinated2());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.get('/getAllVaccinated1', async function(req, res, next) {
  try {
    res.json(await corona.getAllVaccinated1());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.get('/getAllsameManufacturer', async function(req, res, next) {
    try {
      res.json(await corona.getAllsameManufacturer());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
});
router.post('/updateVaccinationDate1', async function(req, res, next) {
  try {
    console.log(req.body);
    res.json(await corona.updateVaccinationDate1(req.body));
  }
  catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.post('/updateVaccinationDate2', async function(req, res, next) {
  try {
    res.json(await corona.updateVaccinationDate2(req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.post('/updateVaccinationDate3', async function(req, res, next) {
  try {
    res.json(await corona.updateVaccinationDate3(req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.post('/updateVaccinationDate4', async function(req, res, next) {
  try {
    res.json(await corona.updateVaccinationDate4(req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.post('/updatePositive', async function(req, res, next) {
  try {
    res.json(await corona.updatePositive(req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.post('/updateRecovery', async function(req, res, next) {
  try {
    res.json(await corona.updateRecovery(req.body));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.get('/notVaccinated', async function(req, res, next) {
  try {
    res.json(await corona.notVaccinated());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
module.exports = router;