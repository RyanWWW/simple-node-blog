module.exports = {
  port: 3000,
  session: {
    secret: 'ryanwangblog',
    key: 'ryanwangblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/test'
};