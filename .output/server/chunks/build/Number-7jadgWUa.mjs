import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "numbers pt-50 pb-80" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">52</h2><span class="sub-title opacity-7 ml-30"> Projects <br> Completed </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">34</h2><span class="sub-title opacity-7 ml-30"> Team <br> Members </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center"><h2 class="fz-80 line-height-1">6k<span class="fz-50">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center"><h2 class="fz-80 line-height-1">6k<span class="fz-50">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Number.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Number = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Number as N };
//# sourceMappingURL=Number-7jadgWUa.mjs.map
