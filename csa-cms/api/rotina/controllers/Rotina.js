'use strict';

/**
 * Rotina.js controller
 *
 * @description: A set of functions called "actions" for managing `Rotina`.
 */

module.exports = {

  /**
   * Retrieve rotina records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.rotina.search(ctx.query);
    } else {
      return strapi.services.rotina.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a rotina record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.rotina.fetch(ctx.params);
  },

  /**
   * Count rotina records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.rotina.count(ctx.query);
  },

  /**
   * Create a/an rotina record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.rotina.add(ctx.request.body);
  },

  /**
   * Update a/an rotina record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.rotina.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an rotina record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.rotina.remove(ctx.params);
  }
};
