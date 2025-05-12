import { unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, L as Lines, c as _sfc_main$1, d as _sfc_main$1$2 } from './Navbar-n5gMC83v.mjs';
import { _ as _sfc_main$6, a as _sfc_main$5, b as _sfc_main$4$1, c as _sfc_main$1$1, W as Whatclient, d as _sfc_main$2$1, C as Cta } from './Cta-DuXL1INW.mjs';
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
import './03-CIpYUKkf.mjs';
import './2-B5M6ihKl.mjs';
import './02-BzXfAmJ_.mjs';
import './arrow-right-DdsZf22P.mjs';
import './services-CaX8d8z1.mjs';
import 'swiper/vue';
import 'swiper';
import './3-DhIJ5tXN.mjs';
import './author-CSfv5ApG.mjs';
import './works3-KLNJAUg2.mjs';
import './2-B9WyV2Z1.mjs';
import 'vue-router';
import '@unhead/schema-org/vue';

const _sfc_main = {
  __name: "website-development",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Creative Enhancement | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Whatclient), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Cta), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$2), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/tech-transformation/website-development.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=website-development-BPqmvSJ4.mjs.map
