'use strict';

/**
 * Resposta.js controller
 *
 * @description: A set of functions called "actions" for managing `Resposta`.
 */

module.exports = {

  /**
   * Retrieve resposta records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.resposta.search(ctx.query);
    } else {
      return strapi.services.resposta.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a resposta record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.resposta.fetch(ctx.params);
  },

  /**
   * Count resposta records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.resposta.count(ctx.query);
  },

  /**
   * Create a/an resposta record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.resposta.add(ctx.request.body);
  },

  /**
   * Update a/an resposta record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.resposta.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an resposta record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.resposta.remove(ctx.params);
  }
};
