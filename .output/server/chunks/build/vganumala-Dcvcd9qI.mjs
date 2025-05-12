import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$9, F as Footer, d as _imports_0$1$1, e as data$1, f as _imports_0$3, g as _imports_1$1, h as _imports_2$1, i as _imports_3$1 } from './testimonials-BfKP-XKb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
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

const _imports_0$2 = "" + buildAssetsURL("freelancer-intro.Dc_7BtTJ.jpg");
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about-crev section-padding position-re",
    "data-scroll-index": "2"
  }, _attrs))}><div class="container"><div class="row lg-marg"><div class="col-lg-6"><div class="left-block mt-100 md-mb50"><div class="d-flex align-items-center"><div><div class="info"><h3 class="main-color fz-50 line-height-1">12</h3><p class="nowrap"> Years of <br> Experience </p></div></div><div><div class="img fit-img radius-30"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div></div></div><div class="mz-shap"><svg height="100%" viewBox="0 0 610 547" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z" fill="#222"></path></svg></div></div></div><div class="col-lg-6 valign"><div class="content full-width"><div class="sec-head mb-30"><h6 class="sub-title mb-15 main-color">About Me</h6><h2> Lead product designer <br> and art director. </h2><div class="text mt-15"><p> We shifted our talents to frontier science because we wanted our work to have tangible, human-positive impact. </p></div></div><div class="info-author mt-40 pt-40 bord-thin-top"><div class="row"><div class="col-md-6"><div class="d-flex align-items-center mb-20"><div><h6 class="nowrap fz-16">Name :</h6></div><div class="ml-20"><p class="fz-14">Matthew Perry</p></div></div><div class="d-flex align-items-center"><div><h6 class="nowrap fz-16">Address :</h6></div><div class="ml-20"><p class="fz-14">Germany Office 478 Berlin</p></div></div></div><div class="col-md-6"><div class="d-flex align-items-center mb-20"><div><h6 class="nowrap fz-16">Phone :</h6></div><div class="ml-20"><p class="fz-14">+1 840 841 25 69</p></div></div><div class="d-flex align-items-center"><div><h6 class="nowrap fz-16">Email :</h6></div><div class="ml-20"><p class="fz-14">hello@design.com</p></div></div></div></div></div><a href="#0" class="butn butn-md main-colorbg radius-30 mt-40"><span class="text-dark">Dwonload CV</span></a></div></div></div></div><div class="line-overlay opacity-7"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vganumala/About.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$1 = "" + buildAssetsURL("c4.B-VrB79A.jpg");
const _imports_1 = "" + buildAssetsURL("c5.Blv-n9dM.jpg");
const _imports_2 = "" + buildAssetsURL("c6.35dzemSg.jpg");
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "blog-crev section-padding",
    "data-scroll-index": "5"
  }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/light/blog-list" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-4"><div class="item sub-bg md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><div class="tag sub-bg"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/light/blog-details">30 august 2021</a></div><h5><a href="/light/blog-details"> Creative advertising in our life became a info noise </a></h5></div></div></div><div class="col-lg-4"><div class="item sub-bg md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""><div class="tag sub-bg"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/light/blog-details">30 august 2021</a></div><h5><a href="/light/blog-details"> Creative advertising in our life became a info noise </a></h5></div></div></div><div class="col-lg-4"><div class="item sub-bg"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""><div class="tag sub-bg"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/light/blog-details">30 august 2021</a></div><h5><a href="/light/blog-details"> We create some things for your success in growth </a></h5></div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vganumala/Blog.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "contact-crev section-padding bord-thin-bottom bord-thin-top",
    "data-scroll-index": "6"
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="sec-head md-mb80"><h6 class="sub-title main-color mb-15 wow fadeInUp"> Get In Touch </h6><h2 class="text-u ls1 d-rotate wow"><span class="rotate-text">Let&#39;s make your brand <span class="fw-200">brilliant!</span></span></h2><p class="mt-10"> If you would like to work with us or just want to get in touch, we\u2019d love to hear from you! </p><div class="phone fz-30 fw-600 mt-80 underline main-color"><a href="#0">+1 840 841 25 69</a></div><ul class="rest social-text d-flex mt-40"><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="full-width"><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-full butn-bord radius-30"><span class="text">Let&#39;s Talk</span></button></div></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vganumala/Contact.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + buildAssetsURL("freelancer.Bi2Rr5xB.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: "header freelancer",
    "data-scroll-index": "0"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-6"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div></div><div class="caption"><h1 class="up stroke"><span>I&#39;m a UI-UX</span> <span>Designer</span></h1><h1 class="down"><span>I&#39;m a UI-UX</span> <span>Designer</span></h1></div></header>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vganumala/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const data = [
  {
    img: "/light/assets/imgs/works/1/1.jpg",
    title: "Nice guy with a smile",
    subTitle: "Graphic Designing",
    link: "/light/project1"
  },
  {
    img: "/light/assets/imgs/works/1/2.jpg",
    title: "Nice guy with a smile",
    subTitle: "Graphic Designing",
    link: "/light/project2"
  },
  {
    img: "/light/assets/imgs/works/1/3.jpg",
    title: "Nice guy with a smile",
    subTitle: "Graphic Designing",
    link: "/light/project3"
  },
  {
    img: "/light/assets/imgs/works/1/4.jpg",
    title: "Nice guy with a smile",
    subTitle: "Graphic Designing",
    link: "/light/project4"
  }
];
const _sfc_main$4 = {
  __name: "Portfolio",
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
        1200: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 100,
          centeredSlides: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-carsouel section-padding",
        "data-scroll-index": "3"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2>Our featured <span class="fw-200">projects</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="work-swiper-center">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({ id: "content-carousel-container-unq-work" }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><div class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"${_scopeId2}><div${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.title)}</h5><p${_scopeId2}>${ssrInterpolate(item.subTitle)}</p></div><div class="ml-auto"${_scopeId2}><a${ssrRenderAttr("href", item.link)} class="rmore"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1$1)} alt="" class="icon-img-20"${_scopeId2}></a></div></div></div>`);
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
                                src: _imports_0$1$1,
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
                              src: _imports_0$1$1,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vganumala/Portfolio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "services section-padding pb-0",
    "data-scroll-index": "1"
  }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2>What We <span class="fw-200">Offer</span></h2><div class="ml-auto"><a href="/light/page-services" class="go-more"><span class="text">View all services</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-4"><div class="item-box radius-15 md-mb30"><div class="ti-paint-bucket main-color fz-50 mb-40"></div><h5 class="mb-15">UI / UX Design</h5><p> Live workshop where we define the main problems and challenges before building a strategic plan moving forward. </p><a href="/light/page-services-details" class="rmore mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$1$1)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-4"><div class="item-box radius-15 md-mb30"><div class="ti-layout-slider main-color fz-50 mb-40"></div><h5 class="mb-15">Web Development</h5><p> Live workshop where we define the main problems and challenges before building a strategic plan moving forward. </p><a href="/light/page-services-details" class="rmore mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$1$1)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-4"><div class="item-box radius-15"><div class="ti-rocket main-color fz-50 mb-40"></div><h5 class="mb-15">Digital Marketing</h5><p> Live workshop where we define the main problems and challenges before building a strategic plan moving forward. </p><a href="/light/page-services-details" class="rmore mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_0$1$1)} alt="" class="icon-img-20 ml-5"></a></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vganumala/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_3 = "" + buildAssetsURL("s5.CHZi6A3m.png");
const _imports_5 = "" + buildAssetsURL("s6.QL09P8Tz.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-skills2" }, _attrs))}><div class="container"><div class="sec-head text-center mb-80"><h6 class="sub-title main-color mb-15">Our Portfolio</h6><h2>Our featured <span class="fw-200">projects</span></h2></div><div class="row md-marg"><div class="col-lg-2 col-md-4 col-6"><div class="item mb-30"><div class="box-bord main-bg"><div class="img"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></div><span class="value">95%</span></div><h6 class="fz-18">UI / UX Design</h6></div></div><div class="col-lg-2 col-md-4 col-6"><div class="item mb-30"><div class="box-bord main-bg"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><span class="value">90%</span></div><h6 class="fz-18">Development</h6></div></div><div class="col-lg-2 col-md-4 col-6"><div class="item mb-30"><div class="box-bord main-bg"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><span class="value">85%</span></div><h6 class="fz-18">Graphic Design</h6></div></div><div class="col-lg-2 col-md-4 col-6"><div class="item mb-30"><div class="box-bord main-bg"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><span class="value">84%</span></div><h6 class="fz-18">Sketch</h6></div></div><div class="col-lg-2 col-md-4 col-6"><div class="item mb-30"><div class="box-bord main-bg"><div class="img"><img${ssrRenderAttr("src", _imports_3$1)} alt=""></div><span class="value">78%</span></div><h6 class="fz-18">WordPress</h6></div></div><div class="col-lg-2 col-md-4 col-6"><div class="item mb-30"><div class="box-bord main-bg"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><span class="value">85%</span></div><h6 class="fz-18">Graphic Design</h6></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vganumala/Skills.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Skills = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      speed: 1e3,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      },
      breakpoints: {
        // when window width is >= 640px 640: { loop: true, slidesPerView: 1, spaceBetween: 20, centeredSlides: false, }, // when window width is >= 768px
        768: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1200: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: false
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "testim-crev",
        "data-scroll-index": "4"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Testimonails</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2>What people <span class="fw-200">say?</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="testim-swiper2 testim2" data-carousel="swiper" data-loop="true" data-space="30">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$1), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item bord-box radius-15"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><span class="tag sub-title mb-30 main-color"${_scopeId2}> Design Quality </span><p${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="info mt-40"${_scopeId2}><div class="img-curv"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div></div><div class="ml-20"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate(item.name)}</h6><span class="sub-title opacity-7"${_scopeId2}>${ssrInterpolate(item.subName)}</span></div><div class="ml-auto"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item bord-box radius-15" }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "text" }, [
                            createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Design Quality "),
                            createVNode("p", null, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "info mt-40" }, [
                            createVNode("div", { class: "img-curv" }, [
                              createVNode("div", { class: "img" }, [
                                createVNode("img", {
                                  src: item.img,
                                  alt: ""
                                }, null, 8, ["src"])
                              ])
                            ]),
                            createVNode("div", { class: "ml-20" }, [
                              createVNode("h6", null, toDisplayString(item.name), 1),
                              createVNode("span", { class: "sub-title opacity-7" }, toDisplayString(item.subName), 1)
                            ]),
                            createVNode("div", { class: "ml-auto" }, [
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
                              ]))
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$1), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item bord-box radius-15" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text" }, [
                          createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Design Quality "),
                          createVNode("p", null, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "info mt-40" }, [
                          createVNode("div", { class: "img-curv" }, [
                            createVNode("div", { class: "img" }, [
                              createVNode("img", {
                                src: item.img,
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ]),
                          createVNode("div", { class: "ml-20" }, [
                            createVNode("h6", null, toDisplayString(item.name), 1),
                            createVNode("span", { class: "sub-title opacity-7" }, toDisplayString(item.subName), 1)
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
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
                            ]))
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
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vganumala/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "vganumala",
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
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(Header), null, null, _parent));
      _push(ssrRenderComponent(unref(Services), null, null, _parent));
      _push(ssrRenderComponent(unref(About), null, null, _parent));
      _push(ssrRenderComponent(unref(Skills), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(ssrRenderComponent(unref(Contact), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/vganumala.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vganumala-Dcvcd9qI.mjs.map
