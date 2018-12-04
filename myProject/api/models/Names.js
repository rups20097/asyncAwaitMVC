/**
 * Create.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
let moment = require('moment');
module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    }

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },
  // customToJSON: function() {
  //   // Return a shallow copy of this record with the password and ssn removed.
  //   createdAt = _.pick(this, ['createdAt'])
  //   return moment(createdAt).format()
  // },

  add: async (data) => {
    try {
      console.log('yes im here');
      let result = await Names.create(data).fetch();
      result.createdAt = moment(result.createdAt).format();
      result.updatedAt = moment(result.updatedAt).format();
      return result;
    } catch (err) {
      return err;
    }
  },

  finding: async (data) => {
    try {
      console.log('yes im here');
      let result = await Names.findOne(data.id);
      result.createdAt = moment(result.createdAt).format();
      result.updatedAt = moment(result.updatedAt).format();
      return result;
    } catch (err) {
      return err;
    }
  },

  findingAll: async (data) => {
    try {
      console.log('yes im here');
      let result = await Names.find();
      if (!result) {
        result = 'No data found'
      }
      else {
        result = result.map((res)=> {
          res.createdAt = moment(res.createdAt).format();
          res.updatedAt = moment(res.updatedAt).format();
          return res;
        });
      }
      return result;
    } catch (err) {
      return err;
    }
  },

  updating: async (id, name) => {
    try {
      console.log('yes im here');
      let result = await Names.update(id, { name: name }).fetch();
      result.createdAt = moment(result.createdAt).format();
      result.updatedAt = moment(result.updatedAt).format();
      return result;
    } catch (err) {
      return err;
    }
  },

  deleting: async (id) => {
    try {
      console.log('yes im here');
      let result = await Names.destroy(id).fetch();
      result.createdAt = moment(result.createdAt).format();
      result.updatedAt = moment(result.updatedAt).format();
      return result;
    } catch (err) {
      return err;
    }
  },

};
