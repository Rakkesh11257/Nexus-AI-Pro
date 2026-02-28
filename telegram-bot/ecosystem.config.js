module.exports = {
  apps: [{
    name: 'nexus-telegram-bot',
    script: 'bot.js',
    cwd: '/root/app/telegram-bot',
    env: {
      NODE_ENV: 'production',
    },
    restart_delay: 10000,
    max_restarts: 50,
    autorestart: true,
    watch: false,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    error_file: '/root/app/telegram-bot/error.log',
    out_file: '/root/app/telegram-bot/out.log',
  }],
};
