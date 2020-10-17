const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'deploy',
    },
    () => {
        console.log('Deploy Complete!')
    }
)
