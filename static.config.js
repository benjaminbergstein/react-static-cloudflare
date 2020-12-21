import path from 'path'
import getRoutes from './getRoutes'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes,
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-preact',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
