import compression from "vite-plugin-compression";

import {
  splitVendorChunkPlugin,
  BuildOptions,
  ConfigEnv,
  defineConfig,
  HttpProxy,
  ProxyOptions,
  ServerOptions,
  UserConfig,
} from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";

const plugins = [vue(), compression(), splitVendorChunkPlugin()];
const root = process.cwd();
const rootDir = resolve(root, "src");
const outDir = resolve(root, "dist");
const Pages = {
  Style: rootDir + "/style/style.scss",
  Main: rootDir + "/main.ts",
};

const currentBuild = (command: string, mode: string): BuildOptions => {
  console.log(mode, command);
  const hash = false ? "-[hash]" : "";
  // const minify = mode == 'production'
  // const minfile = minify ? ".min" : "";
  const minify: boolean | "terser" | "esbuild" = "esbuild";
  const minfile = "";

  const GetFileNames = (assetInfo: { name?: string }) => {
    let name = assetInfo.name || "";
    if (/CPIcoMoon/i.test(name)) {
      return `fonts/[name]${hash}[extname]`;
    } else if (/.css/i.test(name)) {
      return `Css/[name]${hash}${minfile}[extname]`;
    } else if (/.png|.jpe?g|.svg|.gif|.tiff|.bmp|.ico/i.test(name)) {
      return `imgs/[name]${hash}[extname]`;
    } else if (/.html/i.test(name)) {
      return `html/[name][extname]`;
    } else {
      return `js/[name]${hash}${minfile}.js`;
    }
  };

  return {
    emptyOutDir: true,
    outDir,
    minify,
    cssCodeSplit: true,
    assetsDir: resolve(rootDir, "Assets"),
    assetsInlineLimit: 0,
    rollupOptions: {
      input: Pages,
      output: [
        {
          dir: outDir,
          format: "esm",
          assetFileNames: GetFileNames,
          chunkFileNames: GetFileNames,
          entryFileNames: GetFileNames,
        },
      ],
    },
  };
};

function defineCssConfig() {
  // https://vitejs.dev/config/
  return defineConfig((env: ConfigEnv): UserConfig => {
    return {
      optimizeDeps: {
        include: ["vue"],
      },
      appType: "mpa",
      plugins,
      build: currentBuild(env.command, env.mode),
      resolve: {
        alias: {
          "@": rootDir,
        },
      },
    };
  });
}

function GetServer(page: string): ServerOptions {
  function configure(proxy: HttpProxy.Server, _options: ProxyOptions): void {
    proxy.on("error", (err, _req, _res) => {
      console.error("=>");
      console.error("Proxy-Error-------------------");
      console.error(err);
      console.error();
    });
    proxy.on("proxyReq", (proxyReq, req, _res) => {
      // console.log("Sending Request:")
      // console.log(req.method)
      // console.log(req.url)
      console.log("=>");
      console.log("Proxy-Request------------------");
      console.log("method  -> ", proxyReq.method);
      console.log("protocol-> ", proxyReq.protocol);
      console.log("host    -> ", proxyReq.host);
      console.log("path    -> ", proxyReq.path);
      console.log("Proxy-Header->");
      console.log(proxyReq.getHeaders());
      console.log();
    });
    proxy.on("proxyRes", (proxyRes, req, _res) => {
      console.log("=>");
      console.log("Proxy-Response-----------------");
      console.log("statusCode-> ", proxyRes.statusCode);
      console.log("url       -> ", req.url);
      console.log("Proxy-Header->");
      console.log(proxyRes.headers);
      console.log();
    });
  }

  return {
    port: 54880,
    proxy: {
      "/api": {
        target: "http://localhost:5555",
        changeOrigin: true,
        headers: {
          Connection: "keep-alive",
          "Cache-Control": "no-cache",
        },
        configure,
      },
    },
  };
}

// export { defineCssConfig };

function defineCssConfig() {
  // https://vitejs.dev/config/
  return defineConfig((env: ConfigEnv): UserConfig => {
    return {
      optimizeDeps: {
        include: ["vue"],
      },
      appType: "mpa",
      plugins,
      build: currentBuild(env.command, env.mode),
      resolve: {
        alias: {
          "@": rootDir,
        },
      },
    };
  });
}

function GetServer(page: string): ServerOptions {
  function configure(proxy: HttpProxy.Server, _options: ProxyOptions): void {
    proxy.on("error", (err, _req, _res) => {
      console.error("=>");
      console.error("Proxy-Error-------------------");
      console.error(err);
      console.error();
    });
    proxy.on("proxyReq", (proxyReq, req, _res) => {
      // console.log("Sending Request:")
      // console.log(req.method)
      // console.log(req.url)
      console.log("=>");
      console.log("Proxy-Request------------------");
      console.log("method  -> ", proxyReq.method);
      console.log("protocol-> ", proxyReq.protocol);
      console.log("host    -> ", proxyReq.host);
      console.log("path    -> ", proxyReq.path);
      console.log("Proxy-Header->");
      console.log(proxyReq.getHeaders());
      console.log();
    });
    proxy.on("proxyRes", (proxyRes, req, _res) => {
      console.log("=>");
      console.log("Proxy-Response-----------------");
      console.log("statusCode-> ", proxyRes.statusCode);
      console.log("url       -> ", req.url);
      console.log("Proxy-Header->");
      console.log(proxyRes.headers);
      console.log();
    });
  }

  return {
    port: 54880,
    proxy: {
      "/api": {
        target: "http://localhost:5555",
        changeOrigin: true,
        headers: {
          Connection: "keep-alive",
          "Cache-Control": "no-cache",
        },
        configure,
      },
    },
  };
}

export default defineCssConfig();
