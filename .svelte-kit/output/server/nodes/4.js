

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/administration/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.40babb2c.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js"];
export const stylesheets = [];
export const fonts = [];
