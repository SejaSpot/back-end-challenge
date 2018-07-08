const Post = require('../models/post');

const get = async (req, res) => {
  try {
    const { page, limit, author, categories } = req.query;
    const models = await Post.find({ author, categories }).skip(limit * (page - 1)).limit(Number(limit));
    res.send(models);
  } catch (err) {
    res.send(err);
  }
};

const getById = async (req, res) => {
  try {
    const model = await Post.findOne({ _id: req.params.id });
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const post = async (req, res) => {
  try {
    const model = await Post.create(req.body);
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const put = async (req, res) => {
  try {
    await Post.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const model = await Post.findOne({ _id: req.params.id });
    res.send(model);
  } catch (err) {
    res.send(err);
  }
};

const remove = async (req, res) => {
  try {
    const model = await Post.findByIdAndRemove({ _id: req.params.id });
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