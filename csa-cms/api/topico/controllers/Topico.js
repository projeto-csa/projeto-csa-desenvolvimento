'use strict';

/**
 * Topico.js controller
 *
 * @description: A set of functions called "actions" for managing `Topico`.
 */

module.exports = {

  /**
   * Retrieve topico records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.topico.search(ctx.query);
    } else {
      return strapi.services.topico.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a topico record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.topico.fetch(ctx.params);
  },

  /**
   * Count topico records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.topico.count(ctx.query);
  },

  /**
   * Create a/an topico record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.topico.add(ctx.request.body);
  },

  /**
   * Update a/an topico record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.topico.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an topico record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.topico.remove(ctx.params);
  }
};
