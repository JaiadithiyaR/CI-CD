function logger(req, res, next) {
  const startedAt = process.hrtime.bigint();

  res.on('finish', () => {
    const durationInMs = Number(process.hrtime.bigint() - startedAt) / 1_000_000;
    const timestamp = new Date().toISOString();
    const isError = res.statusCode >= 400;
    const color = isError ? '\u001b[31m' : '\u001b[32m';
    const reset = '\u001b[0m';
    const method = '\u001b[36m';
    const route = '\u001b[37m';
    const status = isError ? '\u001b[31m' : '\u001b[32m';
    console.log(
      `${color}${timestamp}${reset} ${method}${req.method}${reset} ${route}${req.originalUrl}${reset} ${status}${res.statusCode}${reset} ${Math.round(durationInMs)}ms`
    );
  });

  next();
}

module.exports = logger;