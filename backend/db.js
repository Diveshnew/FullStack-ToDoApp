// mongodb+srv://firstUser:HSKSAYN6fPErCe6t@cluster0.zp3hkgj.mongodb.net/

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://firstUser:HSKSAYN6fPErCe6t@cluster0.zp3hkgj.mongodb.net/todos'
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo,
};
