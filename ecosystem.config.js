module.exports = {
  apps: [
    {
      name: 'yourcareplus-frontend',
      script: 'npm',
      args: 'run start -- -p 3008'
    }
  ],

  deploy: {
    staging: {
      user: 'marvin',
      host: 'api.42.works',
      key: 'deploy.key',
      ref: 'origin/feature/ci-cd',
      repo: 'git@gitlab.com:your-care-plus/frontend.git',
      ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
      fetch: '--all',
      path: '/home/marvin/yourcareplus/frontend',
      'post-deploy':
        'git checkout feature/ci-cd && npm install --no-optional && npm run build && pm2 reload ecosystem.config.js --env staging'
    }
  }
}
