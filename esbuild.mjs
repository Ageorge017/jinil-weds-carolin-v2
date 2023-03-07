import { build } from 'esbuild';

const NODE_VERSION = 'node16.14';
// add watch
const baseConfig = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: 'build',
};

const localConfig = {
  ...baseConfig,
  watch: true,
};
await build(baseConfig);
