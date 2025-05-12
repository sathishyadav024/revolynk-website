import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3$1, b as _sfc_main$4$1, L as Lines, c as _sfc_main$5, d as _sfc_main$1$1 } from './Navbar-n5gMC83v.mjs';
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

const _sfc_main$4 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/b5.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-100 text-u">Contact Us.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Contact</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-us/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Scopes",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faqs pt-50 pb-80 position-re" }, _attrs))}><div class="container"><div class="row justify-content-between"><div class="col-lg-12"><div class="list-serv"><div class="accordion bord"><div class="item mb-15 wow fadeInUp" data-wow-delay=".1s"><div class="title"><h6>Designing Content With AI Power</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div><div class="item active mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6>Talented, Professional &amp; Expert Team</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class="mb-30"> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p><p class="mb-10"> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div><div class="item mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6>Talented, Professional &amp; Expert Team</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6>We Build and Activate Brands</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6>We Build and Activate Brands</h6><span class="ico ti-plus"></span></div><div class="accordion-info"><p class=""> Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole. </p></div></div></div></div></div></div></div><div class="line-overlay up opacity-7"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-us/Scopes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact pt-50 pb-80 sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="sec-head md-mb80"><h2 class="text-u ls1 d-rotate wow"><span class="rotate-text">Let&#39;s Contact</span></h2></div></div></div><div class="row pt-50 pb-0"><div class="col-lg-4"><div class="text-u md-mb50"><h6> REACH OUT TO US THROUGH THE CONTACT FORM BELOW, AND WE&#39;LL RESPOND PROMPTLY. </h6></div></div><div class="col-lg-3 offset-lg-2"><div class="md-mb50"><h6 class="mb-30 text-u ls1">Our Address</h6><p>Bes\xF2s 1, 08174 Sant Cugat del Vall\xE8s, Barcelona</p></div></div><div class="col-lg-3"><div><h6 class="mb-30 text-u ls1">BUSINESS INQUIRIES</h6><p>Support@uithemez.com</p><h6 class="phone mt-10 underline main-color"><a href="#0">+1 840 841 25 69</a></h6></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-us/Enquiry.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Enquiry = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact pb-80 sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-7 valign"><div class="sec-head md-mb80"><h2 class="text-u ls1 d-rotate wow"><span class="rotate-text"> Let&#39;s make your <br> brand <span class="fw-200">brilliant!</span></span></h2><p class="pb-20"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint culpa corrupti aperiam maiores doloremque? Qui eligendi sed vero quaerat? </p><div class="full-width"><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-full butn-bord radius-30"><span class="text">Let&#39;s Talk</span></button></div></div></div></form></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-us/Cform.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Cform = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" }
      ],
      title: "Contact Revolynk | Revolynk Techs Pvt. Ltd.",
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
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(Enquiry), null, null, _parent));
      _push(ssrRenderComponent(unref(Cform), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-us-KOqo80dP.mjs.map
