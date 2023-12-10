import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const heroImage = "/_app/immutable/assets/vaghero.a5e267f0.jpeg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dptr.svelte-1hfqkvg{font-family:'Dancing Script', cursive;font-size:3rem;color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container my-5" data-svelte-h="svelte-i796rr"><div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"><div class="col-lg-7 p-3 p-lg-5 pt-lg-3"><h2 class="display-4 fw-bold lh-1 text-body-emphasis">Highlights of the college</h2> <ul class="lead"><li>VAGDEVI JUNIOR COLLEGE &amp; IIT- NEET ACADEMY IS LOCATED AT
                        NEWTOWN, MAHABUBNAGAR, TELANGANA.</li> <li>SINCE ITS INCEPTION, IT HAS PRODUCED MANY STATE AND ALL
                        INDIA RANKS IN NEET, IIT-JEE MAINS, EAMCET AND INTERMEDIATE.</li> <li>STRIVING BEST FOR THE SUCCESS OF STUDENTS &amp; REACHING THE
                        EXPECTATIONS OF PARENTS.</li> <li>ONE OF OUR STUDENTS ACHIEVED WONDER BOOK OF RECORDS.</li> <li>EDUCATION ALONG WITH MORAL VALUES - ETHICS IS OUR MOTTO.</li></ul></div> <div class="col-lg-4"><img class="rounded-lg-3"${add_attribute("src", heroImage, 0)} alt="vagdevi-brouchure" width="100%"></div></div></div> <div class="container my-5" data-svelte-h="svelte-ry1h4y"><div class="p-5 text-center bg-body-tertiary rounded-3"><h1 class="dptr svelte-1hfqkvg">Facilities</h1> <hr style="color: red"> <p class="lead">We are a growing institution working towards maintaining standards in quality education</p></div> </div>`;
});
export {
  Page as default
};
