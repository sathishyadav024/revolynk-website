import { unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$7, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './3-BLNWhZWB.mjs';
import { _ as _imports_3, a as _imports_4 } from './5-es6iWoKc.mjs';
import { _ as _imports_0$1, a as _imports_1$1, b as _imports_2$1, c as _imports_3$1, d as _imports_4$1 } from './b6-B1HaaXO1.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _imports_0$2, a as _imports_2$2 } from './3-DhIJ5tXN.mjs';
import { _ as _imports_1$2 } from './author-CSfv5ApG.mjs';
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

const _sfc_main$6 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/b5.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-100 text-u">Services.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/all-services/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-tab crev pb-100 pt-50",
        "data-scroll-index": "3"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><a href="/dark/portfolio-outline" class="go-more"><span class="text">View all Works</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-5 d-flex align-items-center justify-content-center"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/dark/assets/imgs/works/1/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/5.jpg"></div></div></div><div class="col-lg-6 offset-lg-1 content"><div class="cluom mb-30 current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Iridescent Wallpapers</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project6"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Proof Template</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project5"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Ledge Phone</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project4"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Frame Sans</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project3"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Modern Minimalist</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project2"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/all-services/Services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Partners",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      speed: 500,
      loop: true,
      breakpoints: {
        // when window width is >= 640px
        500: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        // when window width is >= 768px
        700: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1e3: {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 30,
          centeredSlides: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "clients-carso pt-0" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><a href="/dark/portfolio-outline" class="go-more"><span class="text">View all Works</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="swiper5" data-carousel="swiper" data-items="5" data-loop="true" data-space="40">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-clients",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_1$1,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_2$1,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_3$1,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_4$1,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_1$1,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_2$1,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_3$1,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_4$1,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="sec-bottom mt-80 mb-80"><div class="main-bg d-flex align-items-center"><h6 class="fz-14 fw-400"> More than <span class="fw-600">200+ companies</span> trusted us worldwide </h6></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/all-services/Partners.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Industries",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-tab crev pb-100",
        "data-scroll-index": "3"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><a href="/dark/portfolio-outline" class="go-more"><span class="text">View all Works</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-5 d-flex align-items-center justify-content-center"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/dark/assets/imgs/works/1/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/5.jpg"></div></div></div><div class="col-lg-6 offset-lg-1 content"><div class="cluom mb-30 current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Iridescent Wallpapers</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project6"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Proof Template</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project5"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Ledge Phone</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project4"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Frame Sans</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project3"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Modern Minimalist</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project2"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/all-services/Industries.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "blog-list-half pt-50 sub-bg",
    "data-scroll-index": "5"
  }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/dark/blog-list2" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6"><div class="item main-bg md-mb50"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a></div><h5><a href="/dark/blog-details"> Free advertising for your online business. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div><div class="col-lg-6"><div class="item main-bg"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_2$2)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a><a href="/dark/blog-list">Design</a></div><h5><a href="/dark/blog-details"> Business meeting 2023 in San Francisco. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/all-services/Clientstories.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Clientstories = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Recognisation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-crev pt-100 pb-50 sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/dark/blog-list" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="item sub-bg2 wow fadeInUp" data-wow-delay=".1s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> The Highly Creative UI/UX Workflow from a Silicon Valley. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog1.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div><div class="item wow fadeInUp" data-wow-delay=".3s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> Creativo J\xF3venes: a Lead Designer&#39;s UI/UX Core Checklist. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog2.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div><div class="item sub-bg2 wow fadeInUp" data-wow-delay=".5s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> Definitive Guide to Make a Daily More Productive Working Flow. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog4.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/all-services/Recognisation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "what-we-are-offering",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Our Services | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(Clientstories), null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/what-we-are-offering.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=what-we-are-offering-Ci6owI6P.mjs.map
