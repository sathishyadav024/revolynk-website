import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3, b as _sfc_main$4, L as Lines, c as _sfc_main$5, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-project1" }, _attrs))}><div class="container pt-100"><div class="row align-items-end"><div class="col-lg-8 md-mb50"><div><h1 class="fz-70"> Revolynk techs<br> sitemap<span class="color-brand-sec">.</span></h1></div></div><div class="col-lg-4"><div class="info"><div class="row"><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Category :</span><h6>Legal</h6></div></div><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Author :</span><h6>Team Voyagers</h6></div></div><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Published Date :</span><h6>03 September 2024</h6></div></div><div class="col-md-6"><div class="item"><span class="opacity-8 mb-5">Latest Updated On :</span><h6>19 April 2025</h6></div></div></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sitemap/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding bord-thin-bottom" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-7"><div class="text"><p class="fz-18 mb-30 fw-400 before-dot"><a href="/">Main home</a></p></div><div class="text"><h2 class="mb-50">Insights</h2><p class="fz-18 mb-20 fw-400 before-dot"><a href="/insights/casestudies">Casestudies</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/insights/blogs">Blogs</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/insights/podcasts">Podcasts</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/insights/live-interviews">Live interviews</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/insights/news">News</a></p></div><div class="text"><h2 class="mb-50">What we do</h2><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/what-we-are-offering">Our services</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/clous-solutions">Cloud</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/cyber-security">Cyber security</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/data-and-artificial-intelligence">Data and AI</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/technology-transformation">Technology transformation</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/marketing-and-experience">Marketing and Experienece</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/digital-engneering">Digital engineering</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/vfx-and-production">VFX and Production</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/services/talent-acquisition">Talent Acquisition</a></p></div><div class="text"><h2 class="mb-50">Industries</h2><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/automotive">Automotive</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/banking-and-finance">Banking and Finance</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/real-estate">Real estate</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/media-and-communication">Media and Communication</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/consumer-goods">Consumer goods</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/healthcare">Healthcare</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/chemical">Chemical</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/education">Education</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/industrial">Industrial</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/travel">Travel</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/industries/beauty-and-cosmetics">Beauty and Cosmetics</a></p></div><div class="text"><h2 class="mb-50">Viewpoint</h2><p class="fz-18 mb-20 fw-400 before-dot"><a href="/viewpoint/perspectives">Perspectives</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/viewpoint/research-reports">Research reports</a></p></div><div class="text"><h2 class="mb-50">Careers</h2><p class="fz-18 mb-20 fw-400 before-dot"><a href="/careers/careers-main">Carees main</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/careers/job-openings">Job openings</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/careers/how-we-hire">How we hire</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/careers/work-environment">Environment</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/legal/work-policy">Work policy</a></p></div><div class="text"><h2 class="mb-50">About us</h2><p class="fz-18 mb-20 fw-400 before-dot"><a href="/about-us/company-info">Company info</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/about-us/leaders">Leaders</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/about-us/our-voyagers">Our voyagers</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/about-us/locations">Locations</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/about-us/contact-us">Contact us</a></p></div><div class="text"><h2 class="mb-50">Legal</h2><p class="fz-18 mb-20 fw-400 before-dot"><a href="/legal/terms-and-conditions">Terms of use</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/legal/privacy-policy">Privacy policy</a></p><p class="fz-18 mb-20 fw-400 before-dot"><a href="/legal/sitemap">Sitemap</a></p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sitemap/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Content = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "sitemap",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Sitemap | Revolynk Techs Pvt. Ltd.",
      meta: [
        {
          name: "description",
          content: "Easily navigate the Revolynk Techs Private Limited website with our comprehensive sitemap. Explore all service pages, blogs, contact info, and resources in one place."
        }
      ]
      // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Content), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/sitemap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sitemap-DJP4W32X.mjs.map
