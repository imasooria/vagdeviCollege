

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.1c1d3276.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js"];
export const stylesheets = [];
export const fonts = [];
