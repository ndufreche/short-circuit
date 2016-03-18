/**
 * Store.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    category : { type: 'string' },

    bio : { type: 'boolean' },

    tour : { type: 'boolean' },

    opening : { type: 'string' },

    closing : { type: 'string' },

    lat : { type: 'string' },

    lng : { type: 'string' },

    presentation : { type: 'string' },

    website : { type: 'string' },

    picture : { type: 'string' },

    avaragevote : { type: 'float' },
    
    owner : {
      model: 'producer',
      unique: true
    },
    
    votes : {
      collection: 'vote',
      via: 'store'
    }
  }
};

