import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$7, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _imports_0 } from './arrow-right-DdsZf22P.mjs';
import { d as data } from './works1-CNkPVlaQ.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { _ as _imports_0$1, a as _imports_1, b as _imports_2 } from './3-BLNWhZWB.mjs';
import { _ as _imports_3$1, a as _imports_4$1 } from './5-es6iWoKc.mjs';
import { _ as _imports_0$2, a as _imports_1$1, b as _imports_2$1 } from './q7-BZl7l961.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _imports_0$3, a as _imports_2$2, b as _imports_3$2, c as _imports_4$2 } from './6-BYvyqOuc.mjs';
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

const _sfc_main$6 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header header-project4 bg-img d-flex align-items-end",
        "data-background": "/dark/assets/imgs/works/projects/1/1.jpg",
        "data-overlay-dark": "5"
      }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="caption text-center"><h1>The Luxury BMW 8</h1></div></div></div><div class="info mt-80 pt-50 bord-thin-top"><div class="row"><div class="col"><div class="item text-center mb-30"><span class="opacity-8 mb-5">Category </span><h6>Photography</h6></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/careers-main/Intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Departments",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-carsouel section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Our featured <span class="fw-200">projects</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="work-swiper-auto">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-work",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><div class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"${_scopeId2}><div${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.title)}</h5><p${_scopeId2}>${ssrInterpolate(item.subTitle)}</p></div><div class="ml-auto"${_scopeId2}><a${ssrRenderAttr("href", item.link)} class="rmore"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon-img-20"${_scopeId2}></a></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: item.img,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom" }, [
                          createVNode("div", null, [
                            createVNode("h5", null, toDisplayString(item.title), 1),
                            createVNode("p", null, toDisplayString(item.subTitle), 1)
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
                            createVNode("a", {
                              href: item.link,
                              class: "rmore"
                            }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "",
                                class: "icon-img-20"
                              })
                            ], 8, ["href"])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom" }, [
                        createVNode("div", null, [
                          createVNode("h5", null, toDisplayString(item.title), 1),
                          createVNode("p", null, toDisplayString(item.subTitle), 1)
                        ]),
                        createVNode("div", { class: "ml-auto" }, [
                          createVNode("a", {
                            href: item.link,
                            class: "rmore"
                          }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "icon-img-20"
                            })
                          ], 8, ["href"])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/careers-main/Departments.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Whereur",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-tab crev pb-50 pt-50",
        "data-scroll-index": "3"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><a href="/dark/portfolio-outline" class="go-more"><span class="text">View all Works</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6 content"><div class="cluom mb-30 current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Iridescent Wallpapers</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project6"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Proof Template</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project5"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Ledge Phone</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project4"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Frame Sans</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_3$1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project3"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Modern Minimalist</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4$1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project2"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div><div class="col-lg-5 offset-lg-1 d-flex align-items-center justify-content-center"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/dark/assets/imgs/works/1/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/5.jpg"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/careers-main/Whereur.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_3 = "" + buildAssetsURL("q8.DT8I-5SL.jpg");
const _imports_4 = "" + buildAssetsURL("q9.BvAinzDh.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><section class="about" data-scroll-index="2"><div class="container pb-50 pt-50 bord-thin-top"><div class="row md-marg"><div class="col-lg-6"><div class="cont md-mb50"><h6 class="sub-title main-color mb-15">Who We Are</h6><h3> Our team consists ofnpractitioners who have years of experience in launching &amp; managing projects. </h3></div></div><div class="col-lg-6"><div class="d-flex align-items-end mt-100"><div><a href="/dark/page-about3" class="d-flex align-items-end"><span class="sub-title nowrap">About Us</span><span class="fz-70 line-height-45 ti-arrow-top-right"></span></a></div><div class="ml-80"><p> With our low code solution you can model your process automation by yourself. This will increase your productivity in real time and bring all-around flexibility and best-in-class quality. </p></div></div></div></div></div></section><section class="work-asymetic pb-100"><div class="container"><div class="row"><div class="col-lg-4 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/dark/project5">Branding Design</a></h6></div></div></div><div class="col-lg-6 offset-lg-2"><div class="row lg-marg"><div class="col-lg-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/dark/project6">Branding Design</a></h6></div></div></div><div class="col-lg-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/dark/project1">Branding Design</a></h6></div></div></div></div></div><div class="col-lg-4 items d-flex align-items-end"><div class="item full-width"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="cont d-flex align-items-center mt-30"><h6><a href="/dark/project2">Branding Design</a></h6><span class="opacity-7 text-u fz-13 ls1 ml-auto"> August 2020 </span></div></div></div><div class="col-lg-7 offset-lg-1 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="cont d-flex align-items-center mt-30"><h6><a href="/dark/project3">Branding Design</a></h6><span class="opacity-7 text-u fz-13 ls1 ml-auto"> August 2020 </span></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/careers-main/Benifits.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Benifits = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "numbers pb-80" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">52</h2><span class="sub-title opacity-7 ml-30"> Projects <br> Completed </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">34</h2><span class="sub-title opacity-7 ml-30"> Team <br> Members </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center"><h2 class="fz-80 line-height-1">6k<span class="fz-50">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center"><h2 class="fz-80 line-height-1">6k<span class="fz-50">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/careers-main/Numbers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Numbers = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "process pt-30 pb-100" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Process</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600"> Business <span class="fw-200">Development</span></h2><div class="ml-auto"><a href="/dark/page-about2" class="go-more"><span class="text">View More</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row md-marg"><div class="col-lg-3 col-md-6 item md-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></div><h5 class="mb-15">Research</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item md-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_2$2)} alt=""></div><h5 class="mb-15">Concept</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item sm-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_3$2)} alt=""></div><h5 class="mb-15">Implement</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_4$2)} alt=""></div><h5 class="mb-15">Handover</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon-img-20 ml-5"></a></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/careers-main/Jobsp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Jobsp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "careers-main",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Careers | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Benifits), null, null, _parent));
      _push(ssrRenderComponent(unref(Numbers), null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers/careers-main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=careers-main-CTcFMMvs.mjs.map
