import { defineConfig, loadEnv } from '@rsbuild/core';

import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const { publicVars, rawPublicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig({
  plugins: [
    pluginReact({
      reactRefreshOptions: {
        forceEnable: true,
      },
    }),
    pluginSvgr({ mixedImport: true }),
    pluginSass(),
  ],
  dev: {
    hmr: true,
  },
  source: {
    define: {
      ...publicVars,
      'process.env': JSON.stringify(rawPublicVars),
    },
  },
  output: {
    distPath: {
      root: 'build',
    },
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.resolve ||= {};
      config.resolve.alias ||= {};
      config.output ||= {};

      config.output.publicPath = 'auto';

      const plugins = [
        new NodePolyfillPlugin({
          additionalAliases: ['process'],
        }),
      ];

      appendPlugins(plugins);
    },
  },
});
