import { unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$8, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _imports_0 } from './03-CIpYUKkf.mjs';
import { _ as _imports_1, a as _imports_3, b as _imports_4 } from './2-B5M6ihKl.mjs';
import { _ as _imports_2 } from './02-BzXfAmJ_.mjs';
import { _ as _imports_0$1 } from './arrow-right-DdsZf22P.mjs';
import { d as data } from './services-CaX8d8z1.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { _ as _imports_0$2, a as _imports_2$1 } from './3-DhIJ5tXN.mjs';
import { _ as _imports_1$1 } from './author-CSfv5ApG.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { d as data$1 } from './works3-KLNJAUg2.mjs';
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
        class: "blog-header bg-img section-padding pb-0",
        "data-background": "/dark/assets/imgs/header/bg1.jpg"
      }, _attrs))}><div class="container mt-80"><div class="row justify-content-center"><div class="col-lg-10"><div class="caption"><div class="sub-title fz-12"><a href="#0"><span>Design , </span></a><a href="#0"><span>Development</span></a></div><h1 class="fz-55 mt-30"> Network of wormholes colonies extraordinary claims require. </h1></div></div></div></div><div class="background bg-img mt-80" data-background="/dark/assets/imgs/blog/b1.jpg"></div></header>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/intelligent-marketing/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Whythis",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-tab section-padding" }, _attrs))}><div class="container"><div class="row lg-marg" id="tabs"><div class="col-lg-6 valign"><div class="serv-tab-cont md-mb80"><div class="tab-content current" id="tabs-1"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="text"><p> We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web. </p></div><a href="/dark/page-services" class="mt-30"><span class="mr-15">Read More</span><i class="fas fa-long-arrow-alt-right"></i></a></div></div></div><div class="tab-content" id="tabs-2"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="text"><p> We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web. </p></div><a href="/dark/page-services" class="mt-30"><span class="mr-15">Read More</span><i class="fas fa-long-arrow-alt-right"></i></a></div></div></div><div class="tab-content" id="tabs-3"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="text"><p> We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web. </p></div><a href="/dark/page-services" class="mt-30"><span class="mr-15">Read More</span><i class="fas fa-long-arrow-alt-right"></i></a></div></div></div><div class="tab-content" id="tabs-4"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="text"><p> We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web. </p></div><a href="/dark/page-services" class="mt-30"><span class="mr-15">Read More</span><i class="fas fa-long-arrow-alt-right"></i></a></div></div></div></div></div><div class="col-lg-6 valign"><div class="serv-tab-link tab-links full-width pt-40"><div class="sec-head mb-30"><h6 class="sub-title mb-15 main-color">Who we are?</h6><h2>The ultmiate guide to marketing success.</h2></div><div class="row justify-content-end"><div class="col-lg-11"><div class="text mb-50"><p> We shifted our talents to frontier science because we wanted our work to have tangible. we get front row seats to the future. </p></div><ul class="rest"><li class="item-link current mb-15" data-tab="tabs-1"><h3><span class="fz-18 opacity-7 mr-15">01</span> About Us </h3></li><li class="item-link mb-15" data-tab="tabs-2"><h3><span class="fz-18 opacity-7 mr-15">02</span> Our Mission </h3></li><li class="item-link mb-15" data-tab="tabs-3"><h3><span class="fz-18 opacity-7 mr-15">03</span> Our Vision </h3></li><li class="item-link" data-tab="tabs-4"><h3><span class="fz-18 opacity-7 mr-15">04</span> Achievements </h3></li></ul></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/intelligent-marketing/Whythis.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Whatwedo",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      speed: 600,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      },
      breakpoints: {
        // when window width is >= 640px
        640: {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false
        },
        // when window width is >= 768px
        768: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 50,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1e3: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 50,
          centeredSlides: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services pt-0 pb-80" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Comprehensive <span class="fw-200">Services.</span></span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="serv-swiper" data-carousel="swiper" data-loop="true" data-space="30">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-serv",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data).slice(0, 4), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item-box radius-15"${_scopeId2}><div class="icon mb-40 opacity-5"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><h5 class="mb-15"${_scopeId2}>${ssrInterpolate(item.title)}</h5><p${_scopeId2}>${ssrInterpolate(item.desc)}</p><a${ssrRenderAttr("href", item.link)} class="rmore mt-30"${_scopeId2}><span class="sub-title"${_scopeId2}>Read More</span><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="icon-img-20 ml-5"${_scopeId2}></a></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item-box radius-15" }, [
                        createVNode("div", { class: "icon mb-40 opacity-5" }, [
                          createVNode("img", {
                            src: item.img,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("h5", { class: "mb-15" }, toDisplayString(item.title), 1),
                        createVNode("p", null, toDisplayString(item.desc), 1),
                        createVNode("a", {
                          href: item.link,
                          class: "rmore mt-30"
                        }, [
                          createVNode("span", { class: "sub-title" }, "Read More"),
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: "",
                            class: "icon-img-20 ml-5"
                          })
                        ], 8, ["href"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data).slice(0, 4), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item-box radius-15" }, [
                      createVNode("div", { class: "icon mb-40 opacity-5" }, [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("h5", { class: "mb-15" }, toDisplayString(item.title), 1),
                      createVNode("p", null, toDisplayString(item.desc), 1),
                      createVNode("a", {
                        href: item.link,
                        class: "rmore mt-30"
                      }, [
                        createVNode("span", { class: "sub-title" }, "Read More"),
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "",
                          class: "icon-img-20 ml-5"
                        })
                      ], 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/intelligent-marketing/Whatwedo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Read Latest <span class="fw-200">News</span></span></h2><div class="ml-auto"><a href="/dark/blog-list2" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6"><div class="item main-bg md-mb50"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a></div><h5><a href="/dark/blog-details"> Free advertising for your online business. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div><div class="col-lg-6"><div class="item main-bg"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_2$1)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a><a href="/dark/blog-list">Design</a></div><h5><a href="/dark/blog-details"> Business meeting 2023 in San Francisco. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/intelligent-marketing/Whatclient.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Whatclient = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-carsouel pt-50 pb-80 position-re o-hidden" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div></div><div class="container-fluid rest"><div class="row"><div class="col-12"><div class="work-crus work-crus5 out">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/intelligent-marketing/Casestudies.vue");
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/intelligent-marketing/Faqs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "img-scale" }, _attrs))}><div class="image" data-overlay-dark="4"><div class="img"><img id="grow"${ssrRenderAttr("src", _imports_0$3)} data-speed="0.2" data-lag="0" alt=""></div><div class="text-u text-center ontop"><h2 class="fz-70 fw-600"> Boost Your <span class="fw-300">Business</span> Up <br><span class="fw-300">Ranking </span> High Lavel </h2></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/intelligent-marketing/Cta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Cta = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "intelligent-marketing",
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
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Whatclient), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/marketing/intelligent-marketing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=intelligent-marketing-C3Vg6Hgh.mjs.map
