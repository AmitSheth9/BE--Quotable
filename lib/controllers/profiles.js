const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  try {
    console.log(req.body);
    const profile = await ProfileService.create(req.body);
    res.send(profile);
  }catch(err){
    next(err);
  }


});
