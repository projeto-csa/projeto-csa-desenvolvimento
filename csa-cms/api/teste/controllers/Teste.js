'use strict';

/**
 * Teste.js controller
 *
 * @description: A set of functions called "actions" for managing `Teste`.
 */

module.exports = {

  /**
   * Retrieve teste records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.teste.search(ctx.query);
    } else {
      return strapi.services.teste.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a teste record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.teste.fetch(ctx.params);
  },

  /**
   * Count teste records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.teste.count(ctx.query);
  },

  /**
   * Create a/an teste record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.teste.add(ctx.request.body);
  },

  /**
   * Update a/an teste record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.teste.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an teste record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.teste.remove(ctx.params);
  }
};
