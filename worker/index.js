import environment from './env'

const routes = [
  /\/dynamic/
]

const {
  Bucket,
  Env
} = environment


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// const DynamicRoute = /^(\/.+)\/:/
// const RouteLookup = routes.filter((rr) => DynamicRoute.test(rr))
//   .map((rr) => {
//     const match = rr.match(DynamicRoute)[1]
//     return [new RegExp(match), match]
//   })

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  try {
    const url = new URL(request.url)
    const isAsset = /static/.test(url.pathname)
    const originalPath = url.pathname

    if (!/^www\./.test(url.host)) {
      url.protocol = "https:"
      url.host = `www.${url.host}`
      return Response.redirect(url.toString(), 301)
    }

    if (Env === 'production' && url.protocol === "http:") {
      url.protocol = "https:"
      return Response.redirect(url.toString(), 301)
    }

    url.host = Bucket
    url.protocol = 'http'

    if (!isAsset && originalPath !== "/") {
      const routeMatch = routes.find((re) => {
        return re.test(url.pathname)
      })

      if (routeMatch) {
        url.pathname = "/"
      }
    }

    const app = await fetch(url.toString(), {
      cf: {
        cacheTtl: 120,
        cacheEverything: true,
      },
    })

    const response = new Response(app.body, app)
    response.headers.set("Cache-Control", "max-age=60")

    return response
  } catch (e) {
    return new Response("An error occurred")
  }
}
