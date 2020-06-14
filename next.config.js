module.exports = {
  webpack: (config, { isServer }) => {
    const conf = config
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      conf.node = {
        fs: 'empty',
      }
    }

    return conf
  },
}
