module.exports = {
  apps: [
    {
      name: 'yourcareplus-frontend',
      script: 'npm',
      args: 'run start',
      time: true,
      instances: 1,
      autorestart: true,
      max_restarts: 50,
      watch: false,
      max_memory_restart: '500M'
    }
  ],

  deploy: {
    staging: {
      user: 'marvin',
      host: 'api.42.works',
      key: 'deploy.key',
      ref: 'origin/develop',
      repo: 'git@gitlab.com:your-care-plus/frontend.git',
      ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
      fetch: '--all',
      path: '/home/marvin/yourcareplus/frontend',
      'post-deploy':
        'git checkout develop && npm install --no-optional && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
}
