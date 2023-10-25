import { Options } from "./types";
import type { PluginOption } from "vite";
import { transforms, getAbsolutePath } from "./utils";

export default function removeConsole(
  options: Partial<Options> = {}
): PluginOption {
  /** external：代表某些文件不进行删除指定 console 类型的操作，
   *  includes：指定需要删除的 console 类型
   *  externalValue：保留某些 console 语句
   */
  const { external, includes, externalValue } = options || {};
  return {
    name: "vite:remove-console",
    apply: "build",
    enforce: "post",
    transform(_source: string, id: string) {
      if (/node_modules/.test(id))
        return {
          code: _source,
          map: null
        };
      /** 匹配vue,svelte,jsx,tsx */
      let reg = /(\.vue|\.svelte|\.[jt]sx?)$/.test(id);
      if (
        external &&
        external.length > 0 &&
        getAbsolutePath(external).includes(id) &&
        reg
      ) {
        return {
          code: _source,
          map: null
        };
      } else {
        return {
          code: transforms(_source, includes, externalValue),
          map: null
        };
      }
    }
  };
}

export type { PluginOption };
