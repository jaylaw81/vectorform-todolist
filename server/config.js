const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/vectorform-todo',
  port: process.env.PORT || 8080,
};

export default config;
