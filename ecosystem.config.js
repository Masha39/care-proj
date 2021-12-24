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
      max_memory_restart: '500M',
    },
  ],

  deploy: {
    staging: {
      user: 'marvin',
      host: 'api.42.works',
      key: 'deploy.key',
      ref: 'origin/dev',
      repo: 'git@gitlab.com:42.works/yourcareplus/frontend.git',
      ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
      fetch: '--all',
      path: '/home/marvin/yourcareplus/frontend',
      'post-deploy':
        'git checkout dev && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
