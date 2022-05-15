module.exports = {
  apps: [{
    name: "Main App",
    script: 'index.js',
    watch: '.',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: '192.168.0.163',
      ref: 'origin/master',
      repo: 'https://github.com/matthewlyons/test-pm2.git',
      path: '/var/www/test-pm2',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
