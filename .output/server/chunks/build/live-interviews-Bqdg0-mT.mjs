import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3, b as _sfc_main$4, L as Lines, c as _sfc_main$5, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { d as data } from './workstand-7NQURqQe.mjs';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';
import '@unhead/schema-org/vue';

const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Portfolio Gallery.</h1><div class="mt-15"><a href="#0">Home</a><span class="padding-rl-20">|</span><span class="main-color">Portfolio</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/live-interviews/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Liveinterviews",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-minimal section-padding sub-bg" }, _attrs))}><div class="container-xxl"><div class="row"><div class="filtering col-12 mb-50 text-center"><div class="filter"><span class="text">Filter By :</span><span data-filter="*" class="active"> Show All </span><span data-filter=".art">Art</span><span data-filter=".Branding">Branding</span><span data-filter=".design">Design</span><span data-filter=".marketing">Marketing</span></div></div></div><div class="gallery row stand-marg"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="${ssrRenderClass(["col-lg-4", "col-md-6", "items", item.subTitle])}"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="cont d-flex align-items-center"><div><h5 class="fz-22"><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.title)}</a></h5><p><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.subTitle.split(" ")[0])}</a></p></div><div class="ml-auto"><a${ssrRenderAttr("href", item.link)} class="ti-arrow-top-right"></a></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/live-interviews/Liveinterviews.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "live-interviews",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Live Interviews | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/insights/live-interviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=live-interviews-Bqdg0-mT.mjs.map
