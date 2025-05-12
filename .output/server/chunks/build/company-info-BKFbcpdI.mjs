import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$7, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _imports_0$2 } from './arrow-right-DdsZf22P.mjs';
import { d as data } from './works1-CNkPVlaQ.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { _ as _imports_2$1 } from './02-BzXfAmJ_.mjs';
import { _ as _imports_0$3 } from './03-CIpYUKkf.mjs';
import { _ as _imports_0$4 } from './2-B9WyV2Z1.mjs';
import { N as Number } from './Number-7jadgWUa.mjs';
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

const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-header section-padding" }, _attrs))}><div class="container pt-100"><div class="row"><div class="col-lg-10"><div class="caption"><h2> For more than 10 years, we have been using graphic design and websites to bring brands to life. InFolio is always on the lookout for talent. </h2><div class="mt-30"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">About Us</span></div></div></div></div></div></header>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/company-info/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + buildAssetsURL("4.BZtIKD0B.jpg");
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro position-re" }, _attrs))}><div class="container-fluid rest"><div class="img fit-img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="container pt-100 pb-20"><div class="row"><div class="col-lg-5"><h6 class="sub-title main-color">About Company</h6></div><div class="col-lg-7"><div class="text"><h4> Whether you are a development agency looking to outsource design work, a company in search of a Product Designer or Product Team, a marketing agency that needs a landing page, a startup that wants to launch an app, or an enterprise that plans to rebrand or redesign its website, we welcome any challenge with our arms wide open. </h4></div></div></div></div><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/company-info/Companyintro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Companyintro = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {
  __name: "Ourevolution",
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-carsouel pt-20 pb-80" }, _attrs))}><div class="container"><div class="sec-head mb-50"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Our featured <span class="fw-200">projects</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="work-swiper-auto">`);
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
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><div class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"${_scopeId2}><div${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.title)}</h5><p${_scopeId2}>${ssrInterpolate(item.subTitle)}</p></div><div class="ml-auto"${_scopeId2}><a${ssrRenderAttr("href", item.link)} class="rmore"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="icon-img-20"${_scopeId2}></a></div></div></div>`);
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
                                src: _imports_0$2,
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
                              src: _imports_0$2,
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/company-info/Ourevolution.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Values",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro-cerv pt-100 pb-100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 bord-thin-right rest"><div class="row justify-content-end rest"><div class="col-md-5 rest"><div class="cont"><div class="mb-40"><h2 class="fz-100 numb-font">1.</h2></div><h4>Our Mission</h4><div class="text mt-30"><p> Our journey is defined by a rich tapestry of achievements and values that set us apart. </p></div></div></div><div class="col-md-5 rest"><div class="img fit-img bord-thin-left"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div></div></div><div class="row justify-content-end bord-thin-top rest"><div class="col-md-5 rest"><div class="img fit-img"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></div></div><div class="col-md-5 rest"><div class="cont bord-thin-left"><div class="mb-40"><h2 class="fz-100 numb-font">2.</h2></div><h4>Our Vision</h4><div class="text mt-30"><p> Our journey is defined by a rich tapestry of achievements and values that set us apart. </p></div></div></div></div></div><div class="col-lg-4 rest"><div class="bord-thin-top mt-100 position-re"><div class="row"><div class="col-md-11"><div class="cont"><div class="mb-40"><h2 class="fz-100 numb-font">3.</h2></div><h4>Why Us?</h4><div class="text mt-30"><p> Our journey is defined by a rich tapestry of achievements and values that set us apart. </p></div></div></div></div><div class="bg-dots bg-img" data-background="/dark/assets/imgs/patterns/dots.png"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/company-info/Values.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("01.DaoU6HDA.png");
const _imports_1 = "" + buildAssetsURL("02.CL3Fgejd.png");
const _imports_2 = "" + buildAssetsURL("03.Cr42kmor.png");
const _imports_3 = "" + buildAssetsURL("04.9ZN_Zgwh.png");
const _imports_4 = "" + buildAssetsURL("05.sk2ySReI.png");
const _sfc_main$2 = {
  __name: "Locations",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-crev sub-bg radius-30 mt-15" }, _attrs))}><div class="brands-crev revers-bg simple pb-100"><div class="container"><div class="row"><div class="col-lg-6 mt-100 order-md-2"><div class="row"><div class="col-6 item ontop"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><span class="top-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div></div></div><div class="col-lg-5 offset-lg-1 md-hide"><div class="sec-head nocurve"><div class="ontop"><h6 class="sub-title main-color mb-15">Special Thanks To</h6><h3 class="fw-600 text-u ls1"> All our <span class="fw-200">partners</span></h3></div></div></div><div class="col-12 order-md-1"><div class="row"><div class="col-lg-3 col-6 item empty"><div class="text"><h2 class="fz-80">6k<span class="fz-30">+</span></h2><h6 class="sub-title">Satisfied Clients</h6></div><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item ontop"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><span class="top-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/company-info/Locations.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "img-scale" }, _attrs))}><div class="image" data-overlay-dark="4"><div class="img"><img id="grow"${ssrRenderAttr("src", _imports_0$4)} data-speed="0.2" data-lag="0" alt=""></div><div class="text-u text-center ontop"><h2 class="fz-70 fw-600"> Boost Your <span class="fw-300">Business</span> Up <br><span class="fw-300">Ranking </span> High Lavel </h2></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/company-info/Endmsg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Endmsg = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "company-info",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Company Info | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(Header), null, null, _parent));
      _push(ssrRenderComponent(unref(Companyintro), null, null, _parent));
      _push(ssrRenderComponent(unref(Number), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Endmsg), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/company-info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=company-info-BKFbcpdI.mjs.map
