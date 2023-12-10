import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const bootstrap_min = "";
const banner3 = "/_app/immutable/assets/banner3.5bba47d4.png";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image.svelte-hwy9ai{width:100%;height:100%;object-fit:cover}.nav-bck.svelte-hwy9ai{background-color:#194e48;border-radius:0.25rem;margin:0.5rem;padding:0.5rem 1rem;font-size:1.3rem}.font.svelte-hwy9ai{color:#F6E399}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a class="nav-link active" aria-current="page" href="/" data-svelte-h="svelte-6yiptm"><img class="image svelte-hwy9ai"${add_attribute("src", banner3, 0)} alt="" sizes="" srcset=""></a> <nav class="navbar navbar-expand-lg nav-bck svelte-hwy9ai" aria-label="navbar " data-svelte-h="svelte-11gy7xd"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link font svelte-hwy9ai" aria-current="page" href="/">Home</a></li> <li class="nav-item"><a class="nav-link font svelte-hwy9ai" href="/about">About</a></li> <li class="nav-item dropdown"><a class="nav-link dropdown-toggle font svelte-hwy9ai" href="#" data-bs-toggle="dropdown" aria-expanded="false">Administration</a> <ul class="dropdown-menu"><li><a class="dropdown-item" href="/administration#correspondent">Correspondent</a></li> <li><a class="dropdown-item" href="/administration#principal">Principal</a></li> <li><a class="dropdown-item" href="/administration#vprincipal">Vice Principal</a></li></ul></li> <li class="nav-item dropdown font svelte-hwy9ai"><a class="nav-link dropdown-toggle font svelte-hwy9ai" href="#" data-bs-toggle="dropdown" aria-expanded="false">Academics</a> <ul class="dropdown-menu"><li><a class="dropdown-item" href="/courses">Courses Offered</a></li></ul></li> <li class="nav-item dropdown"><a class="nav-link dropdown-toggle font svelte-hwy9ai" href="#" data-bs-toggle="dropdown" aria-expanded="false">Gallery</a> <ul class="dropdown-menu"><li><a class="dropdown-item " href="/gallery">College Gallery</a></li></ul></li></ul></div></div></nav> <div class="container px-4 py-5" id="featured-3">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
