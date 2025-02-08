const { model } = require('mongoose');

const { UsersSchema } = require('../schemas/UsersSchema');

const UsersModel = new model('user', UsersSchema);

module.exports = { UsersModel };