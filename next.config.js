const sitemap = require('nextjs-sitemap-generator');  
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

sitemap({  
  baseUrl: 'https://prototype-tkclean.herokuapp.com',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'public/static/'  
});

module.exports = withImages(
  withSass({
      exportPathMap: function () {
        return {
          '/': { page: '/' },
        }
      },
      compress: false,
      generateEtags: false,
      onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 2,
      },
    })
);