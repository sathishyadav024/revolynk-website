import { unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$8, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _imports_0 } from './arrow-right-DdsZf22P.mjs';
import { d as data } from './services-CaX8d8z1.mjs';
import { _ as _imports_0$1, a as _imports_1, b as _imports_2 } from './3-BLNWhZWB.mjs';
import { _ as _imports_3, a as _imports_4 } from './5-es6iWoKc.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { d as data$1 } from './works3-KLNJAUg2.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { _ as _imports_0$2, a as _imports_1$1, b as _imports_2$1, c as _imports_3$1, d as _imports_4$1 } from './b6-B1HaaXO1.mjs';
import { _ as _imports_0$3 } from './2-B9WyV2Z1.mjs';
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

const _sfc_main$7 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header header-project3 bg-img d-flex align-items-end",
        "data-background": "/dark/assets/imgs/works/projects/3/1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="caption"><h1>Technology Process</h1></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/banking-and-finance/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Servicesin",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services pb-0" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> What We <span class="fw-200">Offer</span></h2><div class="ml-auto"><a href="/dark/page-services2" class="go-more"><span class="text">View all services</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-md-6"><div class="item-box2 mb-30"><div class="icon mb-40"><img${ssrRenderAttr("src", item.img)} alt=""></div><h5 class="mb-15">${ssrInterpolate(item.title)}</h5><p>${ssrInterpolate(item.desc)}</p><a${ssrRenderAttr("href", item.link)} class="rmore"><div class="arrow"><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon-img-20"></div><div class="shap-left-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></a></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/banking-and-finance/Servicesin.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Segments",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-tab crev pt-80 pb-100",
        "data-scroll-index": "3"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><a href="/dark/portfolio-outline" class="go-more"><span class="text">View all Works</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-5 d-flex align-items-center justify-content-center"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/dark/assets/imgs/works/1/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/5.jpg"></div></div></div><div class="col-lg-6 offset-lg-1 content"><div class="cluom mb-30 current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Iridescent Wallpapers</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project6"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Proof Template</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project5"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Ledge Phone</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project4"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Frame Sans</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project3"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Modern Minimalist</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/project2"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/banking-and-finance/Segments.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "numbers pt-50 pb-80" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">52</h2><span class="sub-title opacity-7 ml-30"> Projects <br> Completed </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">34</h2><span class="sub-title opacity-7 ml-30"> Team <br> Members </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center"><h2 class="fz-80 line-height-1">6k<span class="fz-50">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div><div class="col-lg-3 col-md-4"><div class="item d-flex align-items-center justify-content-center"><h2 class="fz-80 line-height-1">6k<span class="fz-50">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/banking-and-finance/Number.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Number = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "Casestudies",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      speed: 600,
      slidesPerView: 5,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      },
      breakpoints: {
        640: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        768: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        },
        1e3: {
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true
          // slidesPerView: 5,
          // centeredSlides: false,
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-carsouel pt-0 pb-80 position-re o-hidden" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div></div><div class="container-fluid rest"><div class="row"><div class="col-12"><div class="work-crus work-crus5 out">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({ id: "content-carousel-container-unq-w" }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$1), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}><div class="cont"${_scopeId2}><span class="mb-5"${_scopeId2}>${ssrInterpolate(item.title)}</span><h6 class="fz-18"${_scopeId2}>${ssrInterpolate(item.subTitle)}</h6></div><a${ssrRenderAttr("href", item.link)} class="plink"${_scopeId2}></a></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: item.img,
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "cont" }, [
                            createVNode("span", { class: "mb-5" }, toDisplayString(item.title), 1),
                            createVNode("h6", { class: "fz-18" }, toDisplayString(item.subTitle), 1)
                          ]),
                          createVNode("a", {
                            href: item.link,
                            class: "plink"
                          }, null, 8, ["href"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$1), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "cont" }, [
                          createVNode("span", { class: "mb-5" }, toDisplayString(item.title), 1),
                          createVNode("h6", { class: "fz-18" }, toDisplayString(item.subTitle), 1)
                        ]),
                        createVNode("a", {
                          href: item.link,
                          class: "plink"
                        }, null, 8, ["href"])
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
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/banking-and-finance/Casestudies.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
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
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$2)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_0$2,
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
                        src: _imports_0$2,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/banking-and-finance/Partners.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "img-scale" }, _attrs))}><div class="image" data-overlay-dark="4"><div class="img"><img id="grow"${ssrRenderAttr("src", _imports_0$3)} data-speed="0.2" data-lag="0" alt=""></div><div class="text-u text-center ontop"><h2 class="fz-70 fw-600"> Boost Your <span class="fw-300">Business</span> Up <br><span class="fw-300">Ranking </span> High Lavel </h2></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/banking-and-finance/Cta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Cta = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "banking-and-finance",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Automobie Industry | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Number), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Cta), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/industries/banking-and-finance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=banking-and-finance-B86HmCex.mjs.map
