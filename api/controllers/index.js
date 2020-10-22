module.exports = {
  friendlyName: 'Index',
  description: 'Index something.',
  inputs: {
    name: {
      type: 'string',
      defaultsTo: 'world'
    }
  },
  exits: { },

  fn: async function ({ name }) {
    return { hello: name }
  }
}
