const { spawn } = require('child_process');

const port = process.env.PORT || 8080;
const host = '0.0.0.0';

// Start the serve process
const serve = spawn('npx', ['serve', '-s', 'dist', '-l', `${host}:${port}`], {
  stdio: 'inherit'
});

serve.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

serve.on('exit', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  serve.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  serve.kill('SIGINT');
});