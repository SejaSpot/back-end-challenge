const Author = require('../models/author');

const get = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const models = await Author.find().skip(limit * (page - 1)).limit(Number(limit));
    res.send(models);
  } catch (err) {
    res.send(err);
  }
};

const getById = async (req, res) => {
  try {
    const model = await Author.findOne({ _id: req.params.id });
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const post = async (req, res) => {
  try {
    const model = await Author.create(req.body);
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const put = async (req, res) => {
  try {
    await Author.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const model = await Author.findOne({ _id: req.params.id });
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const remove = async (req, res) => {
  try {
    const model = await Author.findByIdAndRemove({ _id: req.params.id });
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  get,
  getById,
  post,
  put,
  remove
};