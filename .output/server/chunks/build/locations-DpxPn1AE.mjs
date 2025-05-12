import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, L as Lines, c as _sfc_main$5, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { d as useHead } from './server.mjs';
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

const _imports_0 = "" + buildAssetsURL("1.CpYmF-1f.jpg");
const _imports_1 = "" + buildAssetsURL("2.BoOacwU0.jpg");
const _imports_2 = "" + buildAssetsURL("3.R9_sPOrw.jpg");
const _imports_3 = "" + buildAssetsURL("4.gdi6NdJU.jpg");
const _imports_4 = "" + buildAssetsURL("5.aum_8Dhs.jpg");
const _sfc_main$1 = {
  __name: "Locations",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inter-links-center vertical d-flex align-items-end section-padding pb-80" }, _attrs))}><div class="container-xxl"><div class="row"><div class="col-12 d-flex align-items-center justify-content-center"><div class="links-text"><ul class="rest"><li data-tab="tab-1"><h2><span class="num">01.</span><a href="/dark/project1"><span class="text f-bold">Retouch Photo</span></a></h2></li><li data-tab="tab-2"><h2><span class="num">02.</span><a href="/dark/project2"><span class="text f-bold">Earthmade Aroma</span></a></h2></li><li data-tab="tab-3"><h2><span class="num">03.</span><a href="/dark/project3"><span class="text f-bold">Bank Rebranding</span></a></h2></li><li data-tab="tab-4"><h2><span class="num">04.</span><a href="/dark/project4"><span class="text f-bold">The joy of music</span></a></h2></li><li data-tab="tab-5"><h2><span class="num">05.</span><a href="/dark/project5"><span class="text f-bold">Blue Adobe MAX</span></a></h2></li></ul></div></div></div></div><div class="links-img"><div class="img" id="tab-1" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="img" id="tab-2" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="img" id="tab-3" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="img" id="tab-4" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="img" id="tab-5" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_4)} alt=""></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/locations/Locations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "locations",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Our Locations | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/locations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=locations-DpxPn1AE.mjs.map
