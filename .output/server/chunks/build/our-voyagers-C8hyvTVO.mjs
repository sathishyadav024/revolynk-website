import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$6, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _imports_0$1 } from './03-CIpYUKkf.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _imports_3, a as _imports_4, b as _imports_5 } from './c3-DhSoMQWW.mjs';
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
import 'vue-router';
import '@unhead/schema-org/vue';

const _sfc_main$5 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-100 text-u">Team Voyagers.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Our Team</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-voyagers/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const data = [
  {
    img: "/dark/assets/imgs/team/1.jpg",
    name: "Robert De Niro",
    subName: "Web Designer"
  },
  {
    img: "/dark/assets/imgs/team/2.jpg",
    name: "Brendan Fraser",
    subName: "Web Designer"
  },
  {
    img: "/dark/assets/imgs/team/3.jpg",
    name: "Ahmed Khaled",
    subName: "Web Designer"
  },
  {
    img: "/dark/assets/imgs/team/3.jpg",
    name: "Ahmed Khaled",
    subName: "Web Designer"
  },
  {
    img: "/dark/assets/imgs/team/3.jpg",
    name: "Ahmed Khaled",
    subName: "Web Designer"
  },
  {
    img: "/dark/assets/imgs/team/3.jpg",
    name: "Ahmed Khaled",
    subName: "Web Designer"
  }
];
const _sfc_main$4 = {
  __name: "Leaders",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team pt-50 pb-60" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-lg-4"><div class="item mb-80"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="info"><span class="fz-12">${ssrInterpolate(item.subName)}</span><h6 class="fz-18">${ssrInterpolate(item.name)}</h6></div></div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-voyagers/Leaders.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Advisoryboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-crev pb-100 position-re" }, _attrs))}><div class="container"><div class="row lg-marg"><div class="col-lg-6"><div class="left-block mt-100 md-mb50"><div class="d-flex align-items-center"><div><div class="info"><h6> Sam <br> Peterson </h6><p class="nowrap">Ceo Manager</p></div></div><div><div class="img fit-img radius-30"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div></div><div class="mz-shap"><svg height="100%" viewBox="0 0 610 547" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z" fill="#1d1d1d"></path></svg></div></div></div><div class="col-lg-6 valign"><div class="content full-width"><div class="sec-head mb-30"><h6 class="sub-title mb-15 main-color">Our Skills</h6><h2>The ultmiate guide to marketing success.</h2></div><div class="row justify-content-end"><div class="col-lg-11"><div class="text"><p> We shifted our talents to frontier science because we wanted our work to have tangible, human-positive impact. Also, we get front row seats to the future. </p></div><div class="mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="sub-title mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="sub-title mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div></div></div></div><div class="line-overlay opacity-7"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-voyagers/Advisoryboard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("shape1.uqDklxOo.png");
const _imports_1 = "" + buildAssetsURL("shape03.BJkq2uJg.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "price-hr pb-0" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 valign"><div class="cont full-width md-mb50"><div><h6 class="sub-title main-color mb-15 wow fadeIn"> Over 150.000+ Clients </h6><h3 class="d-slideup wow"><span class="sideup-text"><span class="up-text">Affordable pricing.</span></span><span class="sideup-text"><span class="up-text">Easy scaling.</span></span></h3><div class="text mt-20"><p> We grow your brands through bold service we\u2019re providing fusce vulputate eleifend sapien. Etiam sollicitudin, ipsum. </p></div><ul class="rest list-arrow mt-30 pt-30 bord-thin-top"><li><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#9504E8"></path></svg></span><h6 class="inline fw-400">Amazing communication.</h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#9504E8"></path></svg></span><h6 class="inline fw-400"> Best trendinf designing experience. </h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#9504E8"></path></svg></span><h6 class="inline fw-400">Email &amp; Live chat.</h6></li></ul></div></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="full-width"><div class="item sub-bg radius-10 d-flex align-items-center mb-30"><div class="type"><div class="icon-img-60 mb-10"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><h5 class="fw-600">Advanced</h5></div><div class="cont ml-50"><ul class="dot-list rest"><li class="mb-10">Guarenteed quality control</li><li class="mb-10">Top quality service</li><li class="mb-10">Best experts at your lease</li><li>7 days free</li></ul></div><div class="mount ml-auto text-center"><h3 class="numb-font"><span class="fz-20">$</span> 19</h3><div><a href="/dark/page-contact" class="butn butn-md butn-bord radius-30"><span class="fz-13">Sign Up</span></a></div></div></div><div class="item main-colorbg radius-10 text-dark d-flex align-items-center"><div class="type"><div class="icon-img-60 mb-10"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><h5 class="fw-600">Enterprise</h5></div><div class="cont ml-50"><ul class="dot-list rest"><li class="mb-10">Guarenteed quality control</li><li class="mb-10">Top quality service</li><li class="mb-10">Best experts at your lease</li><li>7 days free</li></ul></div><div class="mount ml-auto text-center"><h3 class="numb-font"><span class="fz-20">$</span> 49</h3><div><a href="/dark/page-contact" class="butn butn-md butn-bord text-dark radius-30"><span class="fz-13">Sign Up</span></a></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-voyagers/Joinus.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Joinus = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-crev section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="#0" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-4"><div class="item sub-bg md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""><div class="tag sub-bg"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/dark/blog-post">30 august 2021</a></div><h5><a href="/dark/blog-post"> Creative advertising in our life became a info noise </a></h5></div></div></div><div class="col-lg-4"><div class="item sub-bg md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""><div class="tag sub-bg"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/dark/blog-post">30 august 2021</a></div><h5><a href="/dark/blog-post"> Creative advertising in our life became a info noise </a></h5></div></div></div><div class="col-lg-4"><div class="item sub-bg"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""><div class="tag sub-bg"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/dark/blog-post">30 august 2021</a></div><h5><a href="/dark/blog-post"> We create some things for your success in growth </a></h5></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-voyagers/Teamstories.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Teamstories = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "our-voyagers",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Our Voyagers | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Joinus), null, null, _parent));
      _push(ssrRenderComponent(unref(Teamstories), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/our-voyagers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=our-voyagers-C8hyvTVO.mjs.map
