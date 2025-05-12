import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lines" }, _attrs))}><span></span><span></span><span></span><span></span><span></span></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Lines.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Lines = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "ProgressScroll",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress-wrap cursor-pointer" }, _attrs))}><svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path></svg></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressScroll.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "cusor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor" }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cusor.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "loader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader-wrap" }, _attrs))}><svg viewBox="0 0 1000 1000" preserveAspectRatio="none"><path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path></svg><div class="loader-wrap-heading"><span><h2 class="load-text"><span>R</span><span>e</span><span>v</span><span>o</span><span>l</span><span>y</span><span>n</span><span>k</span><span class="color-brand-sec">.</span></h2></span></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("footer-logo.BtHRvBvS.webp");
const __default__ = {
  data() {
    return {
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sub-bg modern-footer pt-80" }, _attrs))}><div class="footer-container"><div class="container ontop"><div class="row pb-30 bord-thin-bottom"><div class="col-lg-5"><div class="logo icon-img-140"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-7"><div class="social-media d-flex justify-content-end"><ul class="rest d-flex align-items-center fz-14"><li class="hover-this cursor-pointer"><a href="https://www.facebook.com/revolynk" target="_blank" class="hover-anim"><i class="fab fa-facebook-f mr-10"></i> Facebook </a></li><li class="hover-this cursor-pointer ml-50"><a href="https://www.instagram.com/revolynk" target="_blank" rel="noopener noreferrer" class="hover-anim"><i class="fab fa-instagram mr-10"></i> Instagram </a></li><li class="hover-this cursor-pointer ml-50"><a href="https://www.linkedin.com/company/revolynk-techs-private-limited" target="_blank" rel="noopener noreferrer" class="hover-anim"><i class="fab fa-linkedin-in mr-10"></i> LinkedIn </a></li><li class="hover-this cursor-pointer ml-50"><a href="https://twitter.com/revolynk" target="_blank" rel="noopener noreferrer" class="hover-anim"><i class="fab fa-twitter mr-10"></i> Twitter X </a></li><li class="hover-this cursor-pointer ml-50"><a href="https://www.pinterest.com/revolynk" class="hover-anim" target="_blank" rel="noopener noreferrer"><i class="fab fa-pinterest mr-10"></i> Pinterest </a></li><li class="hover-this cursor-pointer ml-50"><a href="https://www.youtube.com/@revolynk" class="hover-anim" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube mr-10"></i> Youtube </a></li></ul></div></div></div><div class="row pt-80"><div class="col-lg-7"><div class="call-action"><h2 class="d-slideup wow fz-60 fw-600"><span class="sideup-text"><span class="up-text">Have a project in mind?</span></span><span class="sideup-text"><span class="up-text underline"><a href="/about-us/contact-us" class="main-color"> Let\u2019s get to work. </a></span></span></h2><div class="info mt-80 d-flex align-items-center"><div><a href="mailto:helpdesk@revolynk.com" class="butn butn-md butn-bord-thin radius-30"><span class="text">helpdesk@revolynk.com</span></a></div><div><a href="tel:+91 70930 83375" class="butn butn-md butn-bord-thin radius-30 ml-30"><span class="text">+91 70930 83375</span></a></div></div></div></div><div class="col-lg-4 offset-lg-1 bord-left"><div class="column"><h6 class="sub-title mb-30">Connect With Us</h6><div class="row"><div class="col-6"><ul class="rest fz-14"><li class="mb-15"><a href="/about-us/company-info">About Revolynk</a></li><li class="mb-15"><a href="/careers/careers-main">Careers</a></li><li class="mb-15"><a href="/insights/blogs">Blogs</a></li><li><a href="/about-us/contact-us">Contact Us</a></li></ul></div><div class="col-6"><ul class="rest fz-14"><li class="mb-15"><a href="/legal/terms-and-conditions">Terms &amp; Conditions</a></li><li class="mb-15"><a href="/legal/privacy-policy">Privacy Policy</a></li><li class="mb-15"><a href="/legal/sitemap">Sitemap</a></li></ul></div></div></div><div class="subscribe-minimal mt-50"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="ti-arrow-top-right"></i></button></div></form></div></div></div><div class="text-center pt-30 pb-30 main-bg mt-80"><p class="fz-14"> \xA9 ${ssrInterpolate(_ctx.currentYear)} All Rights Reserved by <span class="underline main-color"><a href="https://www.revolynk.com"> Revolynk Techs Pvt. Ltd. </a></span></p></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="navbar navbar-expand-lg bord blur"><div class="container"><a class="logo icon-img-140" href="/"><img${ssrRenderAttr("src", _imports_0)} alt="logo"></a><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Insights</span></a><div class="dropdown-menu"><a class="dropdown-item" href="/insights/casestudies"> Casestudies </a><a class="dropdown-item" href="/insights/blogs"> Blogs </a><a class="dropdown-item" href="/insights/podcasts"> Podcasts </a><a class="dropdown-item" href="/insights/live-interviews"> Live Interviews </a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">What we do</span></a><div class="dropdown-menu mega-menu"><div class="container"><div class="row"><div class="col-lg-6"><div class="clumn mb-80"><div class="title"><a href="/services/what-we-are-offering"><h6 class="sub-title ls1 pb-20 bord-thin-bottom"> What We Do </h6></a></div><div class="links row"><div class="col-lg-4"><a class="dropdown-item" href="/services/cloud-solutions"> Cloud </a><a class="dropdown-item" href="/services/cyber-security"> Cyber Security </a><a class="dropdown-item" href="/services/data-and-artificial-intelligence"> Data and AI </a></div><div class="col-lg-4"><a class="dropdown-item" href="/services/technology-transformation"> Technology Transformation </a><a class="dropdown-item" href="/services/marketing-and-experience"> Marketing and Experience </a><a class="dropdown-item" href="/services/digital-engineering"> Digital Engineering </a></div><div class="col-lg-4"><a class="dropdown-item" href="/services/vfx-and-production"> VFX and Production </a><a class="dropdown-item" href="/services/talent-acquisition"> Talent Acquisition </a></div></div></div></div><div class="col-lg-6"><div class="clumn"><div class="title"><h6 class="sub-title ls1 pb-20 bord-thin-bottom"> Industries </h6></div><div class="links row"><div class="col-lg-4"><a class="dropdown-item" href="/industries/automotive"> Automotive </a><a class="dropdown-item" href="/industries/banking-and-finance"> Banking and Finance </a><a class="dropdown-item" href="/industries/real-estate"> Real Estate </a><a class="dropdown-item" href="/industries/media-and-communication"> Media and Communication </a></div><div class="col-lg-4"><a class="dropdown-item" href="/industries/consumer-goods"> Consumer Goods </a><a class="dropdown-item" href="/industries/healthcare"> Healthcare </a><a class="dropdown-item" href="/industries/chemical"> Chemical </a><a class="dropdown-item" href="/industries/education"> Education </a></div><div class="col-lg-4"><a class="dropdown-item" href="/industries/industrial"> Industrial </a><a class="dropdown-item" href="/industries/travel"> Travel </a><a class="dropdown-item" href="/industries/beauty-and-cosmetics"> Beauty and Cosmetics </a></div></div></div></div></div></div></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Viewpoint</span></a><div class="dropdown-menu"><a class="dropdown-item" href="/viewpoint/perspectives"> Perspectives </a><a class="dropdown-item" href="/viewpoint/research-reports">Research Reports</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Careers</span></a><div class="dropdown-menu"><a class="dropdown-item" href="/careers/careers-main"> Careers Main </a><a class="dropdown-item" href="https://voyagers.revolynk.cloud/job-opening/904d684ec882ad26e444a07c39b9be3a" target="_blank"> Job Openings </a><a class="dropdown-item" href="/careers/how-we-hire">How We Hire</a><a class="dropdown-item" href="/careers/work-environment">Environment</a><a class="dropdown-item" href="/legal/work-policy">Work Policy</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><span class="rolling-text">About us</span></a><div class="dropdown-menu"><a class="dropdown-item" href="/about-us/company-info"> Company Info </a><a class="dropdown-item" href="/about-us/our-voyagers">Our Voyagers</a><a class="dropdown-item" href="/about-us/locations">Locations</a><a class="dropdown-item" href="/about-us/contact-us">Contact Us</a></div></li></ul></div><div class="search-form"><div class="search-icon"><a href="#0"><i class="fab fa-telegram whatsapp-button"></i></a></div></div><div class="topnav"><div class="menu-icon cursor-pointer"><span class="icon ti-align-right"></span></div></div></div></nav><div class="${ssrRenderClass(`hamenu ${isOpen.value && "open"}`)}"><div class="logo icon-img-140"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="close-menu cursor-pointer ti-close"></div><div class="container"><div class="row"><div class="col-lg-2"><div class="menu-text"><div class="text"><h2>MENU</h2></div></div></div><div class="col-lg-7"><div class="menu-links"><ul class="main-menu rest"><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Insights"> Insights </span><i></i></div></div><div class="sub-menu"><ul><li><a href="/insights/casestudies" class="sub-link"> Casestudies </a></li><li><a href="/insights/blogs" class="sub-link"> Blogs </a></li><li><a href="/insights/podcasts" class="sub-link"> Podcasts </a></li><li><a href="/insights/live-interviews" class="sub-link"> Live Interviews </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="What We Do"> What We Do </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Our Services"> Our Services </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/services/cloud-solutions" class="sub-link"> Cloud </a></li><li><a href="/services/cyber-security" class="sub-link"> Cyber Security </a></li><li><a href="/services/data-and-artificial-intelligence" class="sub-link"> Data and AI </a></li><li><a href="/services/technology-transformation" class="sub-link"> Technology Transformation </a></li><li><a href="/services/marketing-and-experience" class="sub-link"> Marketing and Experience </a></li><li><a href="/services/digital-engineering" class="sub-link"> Digital Engineering </a></li><li><a href="/services/vfx-and-production" class="sub-link"> VFX and Production </a></li><li><a href="/services/talent-acquisition" class="sub-link"> Talent Acquisition </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Industries"> Industries </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/industries/automotive" class="sub-link"> Automotive </a></li><li><a href="/industries/banking-and-finance" class="sub-link"> Banking and Finance </a></li><li><a href="/industries/real-estate" class="sub-link"> Real Estate </a></li><li><a href="/industries/media-and-communication" class="sub-link"> Media and Communication </a></li><li><a href="/industries/consumer-goods" class="sub-link"> Consumer Goods </a></li><li><a href="/industries/healthcare" class="sub-link"> Healthcare </a></li><li><a href="/industries/chemical" class="sub-link"> Chemical </a></li><li><a href="/industries/education" class="sub-link"> Education </a></li><li><a href="/industries/industrial" class="sub-link"> Industrial </a></li><li><a href="/industries/travel" class="sub-link"> Travel </a></li><li><a href="/industries/beauty-and-cosmetics" class="sub-link"> Beauty and Cosmetics </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Viewpoint"> Viewpoint </span><i></i></div></div><div class="sub-menu"><ul><li><a href="/viewpoint/perspectives" class="sub-link"> Perspectives </a></li><li><a href="/viewpoint/research-reports" class="sub-link"> Research Reports </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Careers"> Careers </span><i></i></div></div><div class="sub-menu"><ul><li><a class="sub-link" href="/careers/careers-main"> Careers Main </a></li><li><a class="sub-link" href="https://voyagers.revolynk.cloud/job-opening/904d684ec882ad26e444a07c39b9be3a" target="_blank"> Job Openings </a></li><li><a class="sub-link" href="/careers/how-we-hire"> How We Hire </a></li><li><a class="sub-link" href="/careers/work-environment"> Environment </a></li><li><a class="sub-link" href="/careers/work-policy"> Work Policy </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="About Us"> About Us </span><i></i></div></div><div class="sub-menu"><ul><li><a class="sub-link" href="/about-us/company-info"> Company Info </a></li><li><a class="sub-link" href="/about-us/our-voyagers"> Our Voyagers </a></li><li><a class="sub-link" href="/about-us/locations"> Locations </a></li><li><a class="sub-link" href="/about-us/contact-us"> Contact Us </a></li></ul></div></li></ul></div></div><div class="col-lg-3"><div class="cont-info"><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Address</h6><h5> 1-4-180/112/A, 1st Floor, S B O Colony, Kapra, Secunderabad,<br> Telangana, India, 500062 </h5></div><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Social Media</h6><ul class="rest social-text"><li class="mb-10"><a href="https://www.facebook.com/revolynk" class="hover-this" target="_blank" rel="noopener noreferrer"><span class="hover-anim">Facebook</span></a></li><li class="mb-10"><a href="https://twitter.com/revolynk" class="hover-this" target="_blank" rel="noopener noreferrer"><span class="hover-anim">Twitter</span></a></li><li class="mb-10"><a href="https://www.linkedin.com/company/revolynk-techs-private-limited" class="hover-this" target="_blank" rel="noopener noreferrer"><span class="hover-anim">LinkedIn</span></a></li><li class="mb-10"><a href="https://www.instagram.com/revolynk" class="hover-this" target="_blank" rel="noopener noreferrer"><span class="hover-anim">Instagram</span></a></li><li><a href="https://www.youtube.com/@revolynk" class="hover-this" target="_blank" rel="noopener noreferrer"><span class="hover-anim">Youtube</span></a></li></ul></div><div class="item mb-40"><h6 class="sub-title mb-15 opacity-7">Contact Us</h6><h5><a href="mailto:helpdesk@revolynk.com">helpdesk@revolynk.com</a></h5><h5 class="underline mt-10"><a href="tel:+91 70930 83375">+91 70930 83375</a></h5></div></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Lines as L, _sfc_main$2 as _, _sfc_main$3 as a, _sfc_main$4 as b, _sfc_main as c, _sfc_main$1 as d };
//# sourceMappingURL=Navbar-n5gMC83v.mjs.map
