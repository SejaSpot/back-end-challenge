"use strict";

const { Op } = require("sequelize");

const countAll = async Model => {
  return await Model.count({});
};

const lastOfAll = async Model => {
  const options = {
    order: [["id", "ASC"]],
    limit: 1
  };

  return await Model.findOne(options);
};

const firstOfAll = async Model => {
  const options = {
    order: [["id", "DESC"]],
    limit: 1
  };

  return await Model.findOne(options);
};

const cursorify = row => {
  return { cursor: row.id, node: row };
};

// Relay-compliant cursor-based pagination
const pagination = async (Model, cursor, adjust) => {
  const since = cursor.after;
  const until = cursor.before;

  let limit = cursor.first || cursor.last;

  // limit in [ 1 ... 100 ], defaults to 50
  limit = limit || 50;
  limit = Math.max(1, Math.min(limit, 100));

  let options = {
    order: [["id", cursor.first ? "DESC" : "ASC"]],
    limit
  };

  if (since || until) {
    options.where = {
      id: cursor.first ? { [Op.lt]: since } : { [Op.gt]: until }
    };
  }

  if (adjust !== undefined && adjust !== null) {
    options = adjust(options);
  }

  const total = await countAll(Model);
  const first = await firstOfAll(Model);
  let rows = await Model.findAll(options);
  const last = await lastOfAll(Model);

  rows = cursor.first ? rows : rows.reverse();

  const hasNextPage = () => {
    const lastEntry = rows[rows.length - 1];

    if (lastEntry === null || lastEntry === undefined) {
      return false;
    } else {
      return lastEntry.id !== last.id;
    }
  };

  const hasPreviousPage = () => {
    const firstEntry = rows[0];

    if (firstEntry === null || firstEntry === undefined) {
      return false;
    } else {
      return firstEntry.id !== first.id;
    }
  };

  const startCursor = () => {
    const cursor = rows[0];

    if (cursor === null || cursor === undefined) {
      return null;
    } else {
      return cursor.id;
    }
  };

  const endCursor = () => {
    const cursor = rows[rows.length - 1];

    if (cursor === null || cursor === undefined) {
      return null;
    } else {
      return cursor.id;
    }
  };

  return {
    totalCount: total,
    edges: rows.map(cursorify),
    nodes: rows,
    pageInfo: {
      hasNextPage: hasNextPage(),
      hasPreviousPage: hasPreviousPage(),
      startCursor: startCursor(),
      endCursor: endCursor()
    }
  };
};

module.exports.pagination = pagination;
