

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/courses/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.300e61ec.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.4d21fe7b.js"];
export const stylesheets = [];
export const fonts = [];
