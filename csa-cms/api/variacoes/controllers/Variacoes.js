'use strict';

/**
 * Variacoes.js controller
 *
 * @description: A set of functions called "actions" for managing `Variacoes`.
 */

module.exports = {

  /**
   * Retrieve variacoes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.variacoes.search(ctx.query);
    } else {
      return strapi.services.variacoes.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a variacoes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.variacoes.fetch(ctx.params);
  },

  /**
   * Count variacoes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.variacoes.count(ctx.query);
  },

  /**
   * Create a/an variacoes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.variacoes.add(ctx.request.body);
  },

  /**
   * Update a/an variacoes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.variacoes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an variacoes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.variacoes.remove(ctx.params);
  }
};
