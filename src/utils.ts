import { resolve } from "path";
// @ts-expect-error
import $T from "./transform";

export function transforms(
  source: string,
  includes: string[] | undefined,
  externalValue: string[] | undefined
) {
  let consolesArr: string[] = [];
  if (includes) {
    includes.map(type => {
      consolesArr.push(`console.${type}()`);
    });
  } else {
    consolesArr = [`console.log()`];
  }

  const findSource = $T(source, {
    parseOptions: { sourceType: "module" }
  }).find(consolesArr);

  if (externalValue) {
    return findSource
      .each((r: any) => {
        let eValueString = r.value.arguments
          .map((e: { value: string }) => e.value)
          .join();

        const pattern = new RegExp(`(${externalValue.join("|")})`, "g");
        if (!pattern.test(eValueString)) return r.remove();
      })
      .root()
      .generate();
  }
  return findSource.remove().generate();
}

export function getAbsolutePath(list: Array<string>): Array<string> {
  return list.map(str => {
    return pathFormat(resolve(process.cwd(), str));
  });
}

export function pathFormat(path: string) {
  const translate = /^\\\\\?\\/.test(path);
  const hasAscii = /[^\u0000-\u0080]+/.test(path);

  if (translate || hasAscii) {
    return path;
  }

  return path.replace(/\\/g, "/");
}
