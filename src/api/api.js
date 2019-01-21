module.exports.handler = (ev, ctx, done) => {
  done(null, {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello' }),
  });
};
