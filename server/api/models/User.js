/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    firstname : { type: 'string' },

    lastname : { type: 'string' },

    siret : { type: 'string' },

    email : { type: 'string' },

    tel : { type: 'string' },

    company : { type: 'str' },
    
    store : { 
      collection: 'store',
      via: 'owner' 
    }
  }
};

