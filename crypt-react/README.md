# cryptatlas frontend

## Deploying through Netlify

Since the React app is in an embedded folder it's simpler just to deploy on the command line IMO.
`$ npm install netlify-cli -g`
`$ npm run build`
`$ netlify deploy`
`$ ./build`
`$ netlify deploy --prod`
`$ ./build`

### address rewriting

Navigating directly to a route: `https://cryptatlas.netlify.com/<route>` will result in a 404 unless you create a <em>\_redirects</em> file in /public:
`$ echo "/* /index.html 200" >> _redirects`

### `.env` is King

The "Add Environmental Variables" section in Netlify is **useless** since it's deployed from the command line and not by importing a repository. This makes everything go through <em>.env</em>. (make sure to change <em>.env</em> addresses to local when working locally)
