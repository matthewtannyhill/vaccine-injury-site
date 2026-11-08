const extensioned = /\.(?:[cm]?js|json|ts|tsx|mjs|cjs)$/;

function withTsExtension(specifier) {
  if (extensioned.test(specifier.split("?")[0] ?? specifier)) return null;
  return `${specifier}.ts`;
}

export async function resolve(specifier, context, nextResolve) {
  let target = specifier;
  if (target.startsWith("@/")) {
    target = new URL(`../src/${target.slice(2)}`, import.meta.url).href;
  }

  try {
    return await nextResolve(target, context);
  } catch (error) {
    const code = error && typeof error === "object" && "code" in error ? error.code : "";
    const fallback = code === "ERR_MODULE_NOT_FOUND" ? withTsExtension(target) : null;
    if (!fallback) throw error;
    return nextResolve(fallback, context);
  }
}
