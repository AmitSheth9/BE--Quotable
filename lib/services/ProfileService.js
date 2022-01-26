const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!
    const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const json = await response.json();
    const { quote } = json[0];
    return await Profile.insert({ name, quote });

  }
};
