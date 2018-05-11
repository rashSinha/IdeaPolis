if(process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://<rashmil>:<rash>@ds119800.mlab.com:19800/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}