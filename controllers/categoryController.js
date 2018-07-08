const Category = require('../models/category');

const get = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const models = await Category.find().skip(limit * (page - 1)).limit(Number(limit));
    res.send(models);
  } catch (err) {
    res.send(err);
  }
};

const getById = async (req, res) => {
  try {
    const model = await Category.findOne({ _id: req.params.id });
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const post = async (req, res) => {
  try {
    const model = await Category.create(req.body);
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const put = async (req, res) => {
  try {
    await Category.findByIdAndUpdate({_id: req.params.id}, req.body);
    const model = await Category.findOne({ _id: req.params.id });
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const remove = async (req, res) => {
  const model = await Category.findByIdAndRemove({ _id: req.params.id });
  res.send(model);
};

module.exports = {
  get,
  getById,
  post,
  put,
  remove
};