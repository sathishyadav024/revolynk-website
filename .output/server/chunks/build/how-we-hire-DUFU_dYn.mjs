import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$5, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './3-BLNWhZWB.mjs';
import { _ as _imports_3, a as _imports_4 } from './5-es6iWoKc.mjs';
import { _ as _imports_0$1, a as _imports_2$1, b as _imports_3$1, c as _imports_4$1 } from './6-BYvyqOuc.mjs';
import { _ as _imports_0$2 } from './arrow-right-DdsZf22P.mjs';
import { d as useHead } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '@unhead/schema-org/vue';

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-project6 pt-140 pb-80" }, _attrs))}><div class="container"><div class="info d-flex align-items-center mb-10"><div><span class="category">Apps</span><span class="category">Design</span></div><div class="date">August 7, 2023</div></div><h1 class="fz-80">TH3 Web Design</h1></div></header>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/how-we-hire/Intro.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "Process",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-tab crev pb-50",
        "data-scroll-index": "3"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><a href="/dark/portfolio-outline" class="go-more"><span class="text">View all Works</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6 content"><div class="cluom mb-30 current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Iridescent Wallpapers</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project6"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Proof Template</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project5"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Ledge Phone</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project4"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Frame Sans</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project3"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Modern Minimalist</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project2"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div><div class="col-lg-5 offset-lg-1 d-flex align-items-center justify-content-center"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/dark/assets/imgs/works/1/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/5.jpg"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/how-we-hire/Process.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Faqs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faqs pt-50 pb-80 position-re" }, _attrs))}><div class="container"><div class="sec-head"><h6 class="sub-title main-color mb-25">Our Process</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600"> Business <span class="fw-200">Development</span></h2><div class="ml-auto"><a href="/dark/page-about2" class="go-more"><span class="text">View More</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row justify-content-between"><div class="col-lg-12"><div class="list-serv"><div class="accordion bord"><div class="item mb-15 wow fadeInUp" data-wow-delay=".1s"><div class="title"><h6>Designing Content With AI Power</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div><div class="item active mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6>Talented, Professional &amp; Expert Team</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class="mb-30"> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p><p class="mb-10"> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div><div class="item mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6>Talented, Professional &amp; Expert Team</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6>We Build and Activate Brands</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6>We Build and Activate Brands</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div></div></div></div></div></div><div class="line-overlay up opacity-7"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/how-we-hire/Faqs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "process pt-30 pb-100" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Process</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600"> Business <span class="fw-200">Development</span></h2><div class="ml-auto"><a href="/dark/page-about2" class="go-more"><span class="text">View More</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row md-marg"><div class="col-lg-3 col-md-6 item md-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><h5 class="mb-15">Research</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item md-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><h5 class="mb-15">Concept</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item sm-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_3$1)} alt=""></div><h5 class="mb-15">Implement</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_4$1)} alt=""></div><h5 class="mb-15">Handover</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="icon-img-20 ml-5"></a></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/how-we-hire/Jobsp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Jobsp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "how-we-hire",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "How we hire | Revolynk Techs Pvt. Ltd.",
      meta: [
        {
          name: "description",
          content: "Learn how Revolynk Techs Private Limited collects, uses, protects, and manages your data. Our Privacy Policy ensures complete transparency and safeguards your personal and business information"
        }
      ]
      // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(Intro), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Jobsp), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers/how-we-hire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=how-we-hire-DUFU_dYn.mjs.map
