import { unref, mergeProps, withCtx, createVNode, createBlock, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$8, F as Footer, f as _imports_0, g as _imports_1, h as _imports_2, i as _imports_3, d as _imports_0$1, e as data$1 } from './testimonials-BfKP-XKb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { d as data, _ as _imports_0$2, a as _imports_1$1, b as _imports_2$1 } from './h2-dMcIkYV2.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
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

const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "intro-card section-padding",
    "data-scroll-index": "0"
  }, _attrs))}><div class="caption"><span class="mb-30 fw-200 fz-22">Hello, I&#39;m</span><h2 class="text-u ls1 mb-40"> Matthew <span class="botm d-block">Perry</span></h2><span class="mb-30 fw-200 fz-22">Industry Certified</span><h2 class="text-u ls1"> Graphic <span class="botm d-block">Designer</span></h2></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/sathish/Intro.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "my-skills section-padding bord-thin-top",
        "data-scroll-index": "1"
      }, _attrs))}><div class="sec-head mb-50"><h3>My <span class="fw-200">Skills</span></h3></div><div class="row"><div class="col-md-6"><div class="item mb-30"><div class="d-flex align-items-center mb-30"><div class="mr-30"><div class="img icon-img-40"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div><h6 class="fz-18">UI / UX Design</h6></div></div><div class="skill-progress"><span class="progres" data-value="95%"></span></div><span class="value">95%</span></div></div><div class="col-md-6"><div class="item mb-30"><div class="d-flex align-items-center mb-30"><div class="mr-30"><div class="img icon-img-40"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div><h6 class="fz-18">Development</h6></div></div><div class="skill-progress"><span class="progres" data-value="90%"></span></div><span class="value">90%</span></div></div><div class="col-md-6"><div class="item sm-mb30"><div class="d-flex align-items-center mb-30"><div class="mr-30"><div class="img icon-img-40"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div><div><h6 class="fz-18">Graphic Design</h6></div></div><div class="skill-progress"><span class="progres" data-value="85%"></span></div><span class="value">85%</span></div></div><div class="col-md-6"><div class="item"><div class="d-flex align-items-center mb-30"><div class="mr-30"><div class="img icon-img-40"><img${ssrRenderAttr("src", _imports_3)} alt=""></div></div><div><h6 class="fz-18">WordPress</h6></div></div><div class="skill-progress"><span class="progres" data-value="78%"></span></div><span class="value">78%</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/sathish/Skills.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "resume section-padding bord-thin-top",
    "data-scroll-index": "2"
  }, _attrs))}><div class="sec-head mb-50"><h3>Working <span class="fw-200">Experience</span></h3></div><div><div class="resume-clumn"><div class="items mb-40"><h6 class="date fz-14">2018 - Present</h6><h5> Art Director <span class="fw-200 ml-15">[ at UiCamp ]</span></h5><div class="row"><div class="col-md-10"><p class="mt-15 fz-14"> Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased. </p></div></div></div><div class="items mb-40"><h6 class="date fz-14">2015 - 2017</h6><h5> Front-end Developer <span class="fw-200 ml-15">[ at Envato Market ]</span></h5><div class="row"><div class="col-md-10"><p class="mt-15 fz-14"> Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased. </p></div></div></div><div class="items"><h6 class="date fz-14">2010 - 2014</h6><h5> Bachelor&#39;s Degree in Design <span class="fw-200 ml-15">[ US RMIT University ]</span></h5><div class="row"><div class="col-md-10"><p class="mt-15 fz-14"> Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased. </p></div></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/sathish/Resume.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Resume = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "services section-padding bord-thin-top",
        "data-scroll-index": "3"
      }, _attrs))}><div class="sec-head mb-50"><h3>My <span class="fw-200">Specializations</span></h3></div><div class="row sm-marg"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-md-6"><div class="item-box2 mb-10"><div><div class="icon mb-40"><img${ssrRenderAttr("src", item.img)} alt=""></div></div><div><h5 class="mb-15">${ssrInterpolate(item.title)}</h5><p>${ssrInterpolate(item.desc)}</p></div><a${ssrRenderAttr("href", item.link)} class="rmore"><div class="arrow"><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="icon-img-20"></div><div class="shap-left-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></a></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/sathish/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "work-minimal section-padding bord-thin-top",
    "data-scroll-index": "4"
  }, _attrs))}><div class="sec-head mb-50"><h3>My <span class="fw-200">Portfolio</span></h3></div><div class="gallery row sm-marg"><div class="items col-md-6"><div class="item mb-10"><div class="img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""><div class="cont"><h5><a href="/light/project1">Nice guy with a smile</a></h5><p><a href="/light/portfolio-gallery">Graphic Design</a></p></div></div></div></div><div class="items col-md-6"><div class="item mb-10"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""><div class="cont"><h5><a href="/light/project1">Nice guy with a smile</a></h5><p><a href="/light/portfolio-gallery">Graphic Design</a></p></div></div></div></div><div class="items col-12"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><div class="cont d-flex align-items-center"><div><h5><a href="/light/project1">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/light/portfolio-gallery">Graphic Design</a></p></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/sathish/Portfolio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "testimonials section-padding bord-thin-top",
        "data-scroll-index": "5"
      }, _attrs))}><div class="sec-head mb-50"><h3>The <span class="fw-200">Testimonials</span></h3></div><div class="testim-swiper" data-carousel="swiper" data-loop="true">`);
      _push(ssrRenderComponent(unref(Swiper), {
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container",
        loop: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$1).slice(0, 2), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg><p class="fz-22"${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="info mt-40"${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.name)}</h5><span class="sub-title fw-200"${_scopeId2}>${ssrInterpolate(item.subName)}</span></div></div></div>`);
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
                            createVNode("p", { class: "fz-22" }, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "info mt-40" }, [
                            createVNode("h5", null, toDisplayString(item.name), 1),
                            createVNode("span", { class: "sub-title fw-200" }, toDisplayString(item.subName), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$1).slice(0, 2), (item, i) => {
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
                          createVNode("p", { class: "fz-22" }, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "info mt-40" }, [
                          createVNode("h5", null, toDisplayString(item.name), 1),
                          createVNode("span", { class: "sub-title fw-200" }, toDisplayString(item.subName), 1)
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/sathish/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact section-padding bord-thin-top",
    "data-scroll-index": "6"
  }, _attrs))}><div class="sec-head mb-50"><h3>Get <span class="fw-200">In Touch</span></h3></div><div class="contact-form"><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-md butn-bord full-width text-center radius-10"><span class="fz-18 text-u ls1">Let&#39;s Talk</span></button></div></div></div></form></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team/sathish/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "sathish-yadav-g",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/light/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/light/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/light/css/style.css" }
      ],
      title: "Vganumala | Revolynk Techs Pvt. Ltd.",
      meta: [
        {
          name: "description",
          content: "Learn how Revolynk Techs Private Limited collects, uses, protects, and manages your data. Our Privacy Policy ensures complete transparency and safeguards your personal and business information"
        }
      ]
      // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper" class="bg-img vcard-bg" data-background="/light/assets/imgs/intro/vcard0.png">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(`<div id="smooth-content"><main><section class="container"><div class="row justify-content-end"><div class="col-lg-6 bord-thin-top">`);
      _push(ssrRenderComponent(unref(Intro), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(Resume), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Portfolio), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Contact), null, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</main></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/team/sathish-yadav-g.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sathish-yadav-g-RQkPF3kJ.mjs.map
