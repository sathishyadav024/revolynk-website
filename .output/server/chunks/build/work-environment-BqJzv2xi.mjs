import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$7, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
import { _ as _imports_0$1 } from './arrow-right-DdsZf22P.mjs';
import { d as data } from './works1-CNkPVlaQ.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { _ as _imports_1$1 } from './author-CSfv5ApG.mjs';
import { _ as _imports_0$2, a as _imports_1$2, b as _imports_2$1 } from './3-BLNWhZWB.mjs';
import { _ as _imports_0$3, a as _imports_2$2, b as _imports_3, c as _imports_4 } from './6-BYvyqOuc.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
        class: "page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100 pb-100"><div class="text-center"><h1 class="fz-100 text-u">About Us.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">About Us</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/work-environment/Intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Workingwi",
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-carsouel pt-50 pb-80" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Our featured <span class="fw-200">projects</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="work-swiper-auto">`);
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
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><div class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"${_scopeId2}><div${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.title)}</h5><p${_scopeId2}>${ssrInterpolate(item.subTitle)}</p></div><div class="ml-auto"${_scopeId2}><a${ssrRenderAttr("href", item.link)} class="rmore"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="icon-img-20"${_scopeId2}></a></div></div></div>`);
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
                                src: _imports_0$1,
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
                              src: _imports_0$1,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/work-environment/Workingwi.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Recognisation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-crev section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/dark/blog-list" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="item sub-bg2 wow fadeInUp" data-wow-delay=".1s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> The Highly Creative UI/UX Workflow from a Silicon Valley. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog1.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div><div class="item wow fadeInUp" data-wow-delay=".3s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> Creativo J\xF3venes: a Lead Designer&#39;s UI/UX Core Checklist. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog2.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div><div class="item sub-bg2 wow fadeInUp" data-wow-delay=".5s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> Definitive Guide to Make a Daily More Productive Working Flow. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog4.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/work-environment/Recognisation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Powork",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inter-fixed-text section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex justify-content-end"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Our featured <span class="fw-200">projects</span></span></h2></div></div></div><div class="container position-re"><div class="links-img"><div class="row"><div class="col-lg-4 items"><div class="item"><div class="img" data-tab="tab-1"><img${ssrRenderAttr("src", _imports_0$2)} alt=""><a href="/dark/project1" class="link-overlay"></a></div><div class="cont"><span class="tag">Branding</span><h2>Earthmade Aroma</h2></div></div></div><div class="col-lg-4 items"><div class="item"><div class="img" data-tab="tab-2"><img${ssrRenderAttr("src", _imports_1$2)} alt=""><a href="/dark/project2" class="link-overlay"></a></div><div class="cont"><span class="tag">Branding</span><h2>Blom Air Purifier</h2></div></div></div><div class="col-lg-4 items"><div class="item"><div class="img" data-tab="tab-3"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><a href="/dark/project3" class="link-overlay"></a></div><div class="cont"><span class="tag">Branding</span><h2>Bank Rebranding</h2></div></div></div></div></div><div class="links-text"><ul class="rest"><li id="tab-1"><span class="tag">Branding</span><h2>Earthmade Aroma</h2></li><li id="tab-2"><span class="tag">Branding</span><h2>Blom Air Purifier</h2></li><li id="tab-3"><span class="tag">Branding</span><h2>Bank Rebranding</h2></li></ul></div></div><div class="container mt-40"><div class="sec-bottom mt-100"><div class="main-bg d-flex align-items-center"><p>Here are some select projects that showcase.</p><a href="/dark/portfolio-metro" class="butn main-color ml-40 underline"><span>View All</span></a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/work-environment/Powork.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("1.xLUVB0aZ.jpg");
const _imports_1 = "" + buildAssetsURL("2.CkNw4GNS.jpg");
const _imports_2 = "" + buildAssetsURL("3.BS2lfUI0.jpg");
const _sfc_main$2 = {
  __name: "Whatnext",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding pt-0" }, _attrs))}><div class="container-xl"><div class="row lg-marg"><div class="col-lg-6"><div class="imgs md-mb80"><div class="mb-30"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="mb-30"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div><div class="col-lg-6"><div class="sticky_item"><div class="text"><h2 class="mb-30">The Challenge</h2><h5 class="mb-30 line-height-40"> The goal is there are many variations of passages of but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. </h5><p class="fz-18"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. </p></div><div class="info pt-80 mt-80 bord-thin-top"><div class="row"><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Category :</span><h6>Development</h6></div></div><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Client :</span><h6>Envato</h6></div></div><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Start Date :</span><h6>7 August 2021</h6></div></div><div class="col-md-6"><div class="item"><span class="opacity-8 mb-5">Designer :</span><h6>UiCamp</h6></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/work-environment/Whatnext.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "process pt-30 pb-100" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Process</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600"> Business <span class="fw-200">Development</span></h2><div class="ml-auto"><a href="/dark/page-about2" class="go-more"><span class="text">View More</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row md-marg"><div class="col-lg-3 col-md-6 item md-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></div><h5 class="mb-15">Research</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item md-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_2$2)} alt=""></div><h5 class="mb-15">Concept</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item sm-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><h5 class="mb-15">Implement</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><h5 class="mb-15">Handover</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/dark/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="icon-img-20 ml-5"></a></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/work-environment/Jobsp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Jobsp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "work-environment",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Life at Revolynk | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers/work-environment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=work-environment-BqJzv2xi.mjs.map
