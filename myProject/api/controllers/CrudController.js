/**
 * CrudController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  add: async (req, res) => {
    try {
      if (!req.body.name) {
        return res.badRequest('Provide a name!');
      }
      let result = await Names.add(req.body);
      console.log('HERE________>>>>', result);
      return res.json(result);
    } catch (err) {
      return res.serverError(err);
    }
  },

  find1: async (req, res) => {
    try {
      if (!req.body.id) {
        return res.badRequest('Provide a id for the name!')
      }
      let result = await Names.finding(req.body);
      console.log('HERE________>>>>', result);
      return res.json(result);
    } catch (err) {

    }
  },

  findAll: async (req, res) => {
    try {
      let result = await Names.findingAll(req.body);
      console.log('HERE________>>>>', result);
      return res.json(result);
    } catch (err) {

    }
  },

  update: async (req, res) => {
    try {
      if (!req.body.id) {
        return res.badRequest('Provide a id for the name!')
      }
      if (!req.body.name) {
        return res.badRequest('Provide a name to change!')
      }
      let result = await Names.updating(req.body.id, req.body.name);
      console.log('HERE________>>>>', result);
      return res.json(result);
    } catch (err) {

    }
  },

  delete: async (req, res) => {
    try {
      if (!req.body.id) {
        return res.badRequest('Provide a id to delete!')
      }
      let result = await Names.deleting(req.body.id);
      console.log('HERE________>>>>', result);
      return res.json(result);
    } catch (err) {

    }
  }

};
