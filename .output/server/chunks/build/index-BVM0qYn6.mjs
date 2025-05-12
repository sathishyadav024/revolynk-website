import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$8, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _imports_0$3 } from './arrow-right-DdsZf22P.mjs';
import { d as data$1 } from './services-CaX8d8z1.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { N as Number } from './Number-7jadgWUa.mjs';
import { _ as _imports_0$4, a as _imports_1$2, b as _imports_2$1 } from './q7-BZl7l961.mjs';
import { _ as _imports_0$5, a as _imports_2$2 } from './3-DhIJ5tXN.mjs';
import { _ as _imports_1$3 } from './author-CSfv5ApG.mjs';
import { e as useSchemaOrg, d as useHead } from './server.mjs';
import { defineWebSite, defineWebPage } from '@unhead/schema-org/vue';
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

const _sfc_main$7 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header main-header bg-img pb-300",
        "data-background": "/assets/imgs/home/bg1.webp",
        "data-overlay-dark": "8"
      }, _attrs))}><div class="container"><div class="row justify-content-end"><div class="col-lg-6"><div class="text mb-100"><h4> We prioritizes in providing high-quality design and branding solutions to businesses and individuals.REVOLYNK </h4></div></div></div></div><div class="container-fluid ontop"><div class="container"><div class="lg-text"><div class="d-flex"><h6>Together we</h6></div><h1>Invent the future...</h1></div></div></div></header>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0$2 = "" + buildAssetsURL("1.KSmoBi07.jpg");
const _imports_1$1 = "" + buildAssetsURL("2.BOdV8fet.jpg");
const _imports_2 = "" + buildAssetsURL("3.pEC1-9-8.jpg");
const _imports_3 = "" + buildAssetsURL("4.CFdy_fCO.jpg");
const _imports_4 = "" + buildAssetsURL("h3.CfaEbnUU.jpg");
const _imports_5 = "" + buildAssetsURL("h4.Bb49wTxq.jpg");
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-minimal pb-50 mt-200-in" }, _attrs))}><div class="container"><div class="gallery2 row stand-marg"><div class="col-lg-3 items width2"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""><div class="cont"><h5><a href="/dark/project2">A Nice guy</a></h5><p><a href="/dark/portfolio-metro">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""><div class="cont"><h5><a href="/dark/project3">A Nice guy</a></h5><p><a href="/dark/portfolio-metro">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""><div class="cont"><h5><a href="/dark/project4">A Nice guy</a></h5><p><a href="/dark/portfolio-metro">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""><div class="cont"><h5><a href="/dark/project6">A Nice guy</a></h5><p><a href="/dark/portfolio-metro">Graphic Design</a></p></div></div></div></div><div class="col-lg-6 items"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""><div class="cont d-flex align-items-center"><div><h5><a href="/dark/project4">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/dark/portfolio-metro">Graphic Designing</a></p></div></div></div></div></div><div class="col-lg-6 items"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""><div class="cont d-flex align-items-center"><div><h5><a href="/dark/project5">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/dark/portfolio-metro">Graphic Designing</a></p></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Insights.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Insights = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {
  __name: "Services",
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services pt-50 pb-100" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Comprehensive <span class="fw-200">Services.</span></span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="serv-swiper" data-carousel="swiper" data-loop="true" data-space="30">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-serv",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$1).slice(0, 4), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item-box radius-15"${_scopeId2}><div class="icon mb-40 opacity-5"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><h5 class="mb-15"${_scopeId2}>${ssrInterpolate(item.title)}</h5><p${_scopeId2}>${ssrInterpolate(item.desc)}</p><a${ssrRenderAttr("href", item.link)} class="rmore mt-30"${_scopeId2}><span class="sub-title"${_scopeId2}>Read More</span><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="icon-img-20 ml-5"${_scopeId2}></a></div>`);
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
                            src: _imports_0$3,
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$1).slice(0, 4), (item, i) => {
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
                          src: _imports_0$3,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0$1 = "" + buildAssetsURL("2.DcTEECEm.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about",
    "data-scroll-index": "2"
  }, _attrs))}><div class="container pt-100 pb-50 bord-thin-top"><div class="row md-marg"><div class="col-lg-6"><div class="cont md-mb50"><h6 class="sub-title main-color mb-15">Who We Are</h6><h3> Our team consists ofnpractitioners who have years of experience in launching &amp; managing projects. </h3><div class="d-flex align-items-end mt-100"><div><a href="/dark/page-about3" class="d-flex align-items-end"><span class="sub-title nowrap">About Us</span><span class="fz-70 line-height-45 ti-arrow-top-right"></span></a></div><div class="ml-80"><p> With our low code solution you can model your process automation by yourself. This will increase your productivity in real time and bring all-around flexibility and best-in-class quality. </p></div></div></div></div><div class="col-lg-6"><div class="img-vid"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><div class="curv-butn main-bg"><a href="https://youtu.be/AzwC6umvd1s" class="vid"><div class="icon"><i class="fas fa-play"></i></div></a><div class="shap-left-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + buildAssetsURL("q1.Da9B3l8a.jpg");
const _imports_1 = "" + buildAssetsURL("q2.CHAmeWQD.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-asymetic pt-80 pb-100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-3 offset-lg-3 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/dark/project1">Branding Design</a></h6></div></div></div><div class="col-lg-6 items pb-40"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="cont d-flex align-items-center mt-30"><h6><a href="/dark/project2">Branding Design</a></h6><span class="opacity-7 text-u fz-13 ls1 ml-auto"> August 2020 </span></div></div></div><div class="col-lg-4 items"><div class="item"><div class="cont mb-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/dark/project5">Branding Design</a></h6></div><div class="img"><img${ssrRenderAttr("src", _imports_0$4)} alt=""></div></div></div><div class="col-lg-6 offset-lg-2"><div class="row lg-marg"><div class="col-lg-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/dark/project6">Branding Design</a></h6></div></div></div><div class="col-lg-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/dark/project1">Branding Design</a></h6></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Companyrec.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Companyrec = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const data = [
  {
    img: "/dark/assets/imgs/testim/t1.jpg",
    name: "Adam Beckley",
    subName: "Founder & CEO",
    desc: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working  with a team that can get the job done"
  },
  {
    img: "/dark/assets/imgs/testim/t2.jpg",
    name: "Adam Beckley",
    subName: "Founder & CEO",
    desc: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working  with a team that can get the job done"
  },
  {
    img: "/dark/assets/imgs/testim/t3.jpg",
    name: "Adam Beckley",
    subName: "Founder & CEO",
    desc: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working  with a team that can get the job done"
  },
  {
    img: "/dark/assets/imgs/testim/t4.jpg",
    name: "Adam Beckley",
    subName: "Founder & CEO",
    desc: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working  with a team that can get the job done"
  }
];
const _sfc_main$2 = {
  __name: "Clientfeed",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      spaceBetween: 30,
      speed: 1e3,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials pb-50" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="sec-head"><h6 class="sub-title main-color mb-15">Testimonials</h6><h3 class="fw-600 d-rotate wow"><span class="rotate-text"> What People <span class="fw-200">Say?</span></span></h3></div></div><div class="col-lg-8 position-re"><div class="testim-swiper">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data).slice(0, 2), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg><p class="fz-30"${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"${_scopeId2}><div${_scopeId2}><div class="fit-img circle"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div></div><div class="ml-20"${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.name)}</h5><span class="sub-title main-color"${_scopeId2}>${ssrInterpolate(item.subName)}</span></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "text" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "256.721",
                              height: "208.227",
                              viewBox: "0 0 256.721 208.227",
                              class: "qout-svg"
                            }, [
                              createVNode("path", {
                                "data-name": "Path",
                                d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                                transform: "translate(121.55 640.568)",
                                fill: "none",
                                stroke: "#fff",
                                "stroke-width": "1",
                                opacity: "0.322"
                              })
                            ])),
                            createVNode("p", { class: "fz-30" }, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "info d-flex align-items-center pt-40 mt-40 bord-thin-top" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "fit-img circle" }, [
                                createVNode("img", {
                                  src: item.img,
                                  alt: ""
                                }, null, 8, ["src"])
                              ])
                            ]),
                            createVNode("div", { class: "ml-20" }, [
                              createVNode("h5", null, toDisplayString(item.name), 1),
                              createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.subName), 1)
                            ])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data).slice(0, 2), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "256.721",
                            height: "208.227",
                            viewBox: "0 0 256.721 208.227",
                            class: "qout-svg"
                          }, [
                            createVNode("path", {
                              "data-name": "Path",
                              d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                              transform: "translate(121.55 640.568)",
                              fill: "none",
                              stroke: "#fff",
                              "stroke-width": "1",
                              opacity: "0.322"
                            })
                          ])),
                          createVNode("p", { class: "fz-30" }, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "info d-flex align-items-center pt-40 mt-40 bord-thin-top" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "fit-img circle" }, [
                              createVNode("img", {
                                src: item.img,
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ]),
                          createVNode("div", { class: "ml-20" }, [
                            createVNode("h5", null, toDisplayString(item.name), 1),
                            createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.subName), 1)
                          ])
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
      _push(`</div><div class="swiper-arrow-control control-abslout"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="small-line"><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Clientfeed.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half pt-80 pb-80 sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Read Latest <span class="fw-200">News</span></span></h2><div class="ml-auto"><a href="/dark/blog-list2" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6"><div class="item main-bg md-mb50"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_0$5)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a></div><h5><a href="/dark/blog-details"> Free advertising for your online business. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div><div class="col-lg-6"><div class="item main-bg"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_2$2)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a><a href="/dark/blog-list">Design</a></div><h5><a href="/dark/blog-details"> Business meeting 2023 in San Francisco. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Latestnews.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Latestnews = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSchemaOrg([
      defineWebSite({
        name: "Revolynk Techs",
        url: "https://www.revolynk.com"
      }),
      defineWebPage({
        name: "Home",
        description: "Innovative digital solutions including web development, mobile apps, and cloud services."
      })
    ]);
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
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
      _push(ssrRenderComponent(unref(Insights), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(About), null, null, _parent));
      _push(ssrRenderComponent(unref(Companyrec), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Number), null, null, _parent));
      _push(ssrRenderComponent(unref(Latestnews), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BVM0qYn6.mjs.map
