const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const hostname = 'localhost'
const port = parseInt(process.env.PORT as string, 10) || 3000
const dev = false
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req: any, res: any) =>
    handle(req, res, parse(req.url, true).pathname)
  ).listen(port, hostname);
  const appurl = `http://${hostname}:${port}`;
  console.log(`started server on ${hostname}:${app.port}, url: ${appurl}`)
});
