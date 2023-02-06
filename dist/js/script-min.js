"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,i=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var App=_createClass(function e(){_classCallCheck(this,e),new Modal,new PageScroll,new TabbedComponent,new MenuFade,new Sticky,new RevealSections,new Skills,new LazyLoading,new Slider}),app=new App,modal=document.querySelector(".modal"),overlay=document.querySelector(".overlay"),btnCloseModal=document.querySelector(".btn--close-modal"),btnsOpenModal=document.querySelectorAll(".btn--show-modal"),btnScrollTo=document.querySelector(".btn--scroll-to"),section2=document.querySelector("#section--2"),tabs=document.querySelectorAll(".skills__tab"),tabsContainer=document.querySelector(".skills__tab-container"),tabsContent=document.querySelectorAll(".skills__content"),nav=document.querySelector(".nav"),navBar=document.querySelector(".nav__links--bar"),navIcon=document.querySelector(".nav__link--icon"),Modal=function(){function n(){var t=this;_classCallCheck(this,n),btnsOpenModal.forEach(function(e){return e.addEventListener("click",t.openModal)});for(var e=0;e<btnsOpenModal.length;e++)btnsOpenModal[e].addEventListener("click",this.openModal);btnCloseModal.addEventListener("click",this.closeModal),overlay.addEventListener("click",this.closeModal),this.escKey()}return _createClass(n,[{key:"openModal",value:function(e){e.preventDefault(),modal.classList.remove("hidden"),overlay.classList.remove("hidden")}},{key:"closeModal",value:function(){modal.classList.add("hidden"),overlay.classList.add("hidden")}},{key:"escKey",value:function(){var t=this;document.addEventListener("keydown",function(e){"Escape"!==e.key||modal.classList.contains("hidden")||t.closeModal()})}}]),n}(),PageScroll=_createClass(function e(){_classCallCheck(this,e),btnScrollTo.addEventListener("click",function(){section2.scrollIntoView({behavior:"smooth"})}),document.querySelector(".nav__links").addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("nav__link")&&(e=e.target.getAttribute("href"),document.querySelector(e).scrollIntoView({behavior:"smooth"}))}),navIcon.addEventListener("click",function(e){navBar.classList.toggle("hidden")}),navBar.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("nav__link")&&(e=e.target.getAttribute("href"),document.querySelector(e).scrollIntoView({behavior:"smooth"}),navBar.classList.add("hidden"))})}),TabbedComponent=_createClass(function e(){_classCallCheck(this,e),tabsContainer.addEventListener("click",function(e){e=e.target.closest(".skills__tab");e&&(tabs.forEach(function(e){return e.classList.remove("skills__tab--active")}),tabsContent.forEach(function(e){return e.classList.remove("skills__content--active")}),e.classList.add("skills__tab--active"),document.querySelector(".skills__content--".concat(e.dataset.tab)).classList.add("skills__content--active"))})}),MenuFade=function(){function e(){_classCallCheck(this,e),nav.addEventListener("mouseover",this.handleHover.bind(.5)),nav.addEventListener("mouseout",this.handleHover.bind(1))}return _createClass(e,[{key:"handleHover",value:function(e){var t,n,r=this;e.target.classList.contains("nav__link")&&(e=(t=e.target).closest(".nav").querySelectorAll(".nav__link"),n=t.closest(".nav").querySelector("img"),e.forEach(function(e){e!==t&&(e.style.opacity=r)}),n.style.opacity=this)}}]),e}(),Sticky=function(){function n(){_classCallCheck(this,n);var e=document.querySelector(".header"),t=nav.getBoundingClientRect().height;new IntersectionObserver(this.stickyNav,{root:null,threshold:0,rootMargin:"-".concat(t,"px")}).observe(e)}return _createClass(n,[{key:"stickyNav",value:function(e){_slicedToArray(e,1)[0].isIntersecting?nav.classList.remove("sticky"):nav.classList.add("sticky")}}]),n}(),Skills=function(){function t(){_classCallCheck(this,t);var e=document.querySelector(".skills__blur");e.addEventListener("mouseover",this.skillsHover.bind(10)),e.addEventListener("mouseout",this.skillsHover.bind(0))}return _createClass(t,[{key:"skillsHover",value:function(e){var t=this,n=e.target,e=null==(e=n.closest(".skills__images"))?void 0:e.querySelectorAll(".skills__image");null!=e&&e.forEach(function(e){e!==n&&(e.style.filter="blur(".concat(t,"px)"))})}}]),t}(),RevealSections=function(){function n(){_classCallCheck(this,n);var e=document.querySelectorAll(".section"),t=new IntersectionObserver(this.revealSection,{root:null,threshold:.1});e.forEach(function(e){t.observe(e),e.classList.add("section--hidden")})}return _createClass(n,[{key:"revealSection",value:function(e,t){e=_slicedToArray(e,1)[0];e.isIntersecting&&(e.target.classList.remove("section--hidden"),t.unobserve(e.target))}}]),n}(),LazyLoading=function(){function n(){_classCallCheck(this,n);var e=document.querySelectorAll("img[data-src]"),t=new IntersectionObserver(this.loadImg,{root:null,threshold:0,rootMargin:"200px"});e.forEach(function(e){return t.observe(e)})}return _createClass(n,[{key:"loadImg",value:function(e,t){var n=_slicedToArray(e,1)[0];n.isIntersecting&&(n.target.src=n.target.dataset.src,n.target.addEventListener("load",function(){n.target.classList.remove("lazy-img")}),t.unobserve(n.target))}}]),n}(),Slider=function(){function e(){_classCallCheck(this,e),this.slider()}return _createClass(e,[{key:"slider",value:function(){function t(e){document.querySelectorAll(".dots__dot").forEach(function(e){return e.classList.remove("dots__dot--active")}),document.querySelector('.dots__dot[data-slide="'.concat(e,'"]')).classList.add("dots__dot--active")}function n(n){e.forEach(function(e,t){return e.style.transform="translateX(".concat(100*(t-n),"%)")})}function r(){s===c-1?s=0:s++,n(s),t(s)}function o(){0===s?s=c-1:s--,n(s),t(s)}var e=document.querySelectorAll(".slide"),a=document.querySelector(".slider__btn--left"),l=document.querySelector(".slider__btn--right"),i=document.querySelector(".dots"),s=0,c=e.length;n(0),e.forEach(function(e,t){i.insertAdjacentHTML("beforeend",'<button class="dots__dot" data-slide="'.concat(t,'"></button>'))}),t(0),l.addEventListener("click",r),a.addEventListener("click",o),document.addEventListener("keydown",function(e){"ArrowLeft"===e.key&&o(),"ArrowRight"===e.key&&r()}),i.addEventListener("click",function(e){e.target.classList.contains("dots__dot")&&(e=e.target.dataset.slide,n(e),t(e))})}}]),e}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNsYXNzZXMuanMiXSwibmFtZXMiOlsiQXBwIiwiX2NyZWF0ZUNsYXNzIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIk1vZGFsIiwiUGFnZVNjcm9sbCIsIlRhYmJlZENvbXBvbmVudCIsIk1lbnVGYWRlIiwiU3RpY2t5IiwiUmV2ZWFsU2VjdGlvbnMiLCJTa2lsbHMiLCJMYXp5TG9hZGluZyIsIlNsaWRlciIsImFwcCIsIm1vZGFsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib3ZlcmxheSIsImJ0bkNsb3NlTW9kYWwiLCJidG5zT3Blbk1vZGFsIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0blNjcm9sbFRvIiwic2VjdGlvbjIiLCJ0YWJzIiwidGFic0NvbnRhaW5lciIsInRhYnNDb250ZW50IiwibmF2IiwibmF2QmFyIiwibmF2SWNvbiIsIl90aGlzIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuTW9kYWwiLCJpIiwibGVuZ3RoIiwiY2xvc2VNb2RhbCIsImVzY0tleSIsImtleSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiX3RoaXMyIiwiY29udGFpbnMiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidGFyZ2V0IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJjbGlja2VkIiwiY2xvc2VzdCIsInQiLCJjIiwiY29uY2F0IiwiZGF0YXNldCIsInRhYiIsImhhbmRsZUhvdmVyIiwiYmluZCIsImxpbmsiLCJsb2dvIiwiX3RoaXMzIiwic2libGluZ3MiLCJlbCIsInN0eWxlIiwib3BhY2l0eSIsImhlYWRlciIsIm5hdkhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwic3RpY2t5TmF2Iiwicm9vdCIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwiZW50cmllcyIsIl9zbGljZWRUb0FycmF5IiwiaXNJbnRlcnNlY3RpbmciLCJzZWN0aW9uVGl0bGUiLCJza2lsbHNIb3ZlciIsIl90aGlzNCIsIl9saW5rJGNsb3Nlc3QiLCJmaWx0ZXIiLCJhbGxTZWN0aW9ucyIsInNlY3Rpb25PYnNlcnZlciIsInJldmVhbFNlY3Rpb24iLCJzZWN0aW9uIiwib2JzZXJ2ZXIiLCJlbnRyeSIsInVub2JzZXJ2ZSIsImltZ1RhcmdldHMiLCJpbWdPYnNlcnZlciIsImxvYWRJbWciLCJpbWciLCJzcmMiLCJzbGlkZXIiLCJhY3RpdmF0ZURvdCIsInNsaWRlIiwiZG90IiwiZ29Ub1NsaWRlIiwic2xpZGVzIiwicyIsInRyYW5zZm9ybSIsIm5leHRTbGlkZSIsImN1clNMaWRlIiwibWF4U2xpZGUiLCJwcmV2U2xpZGUiLCJidG5MZWZ0IiwiYnRuUmlnaHQiLCJkb3RDb250YWluZXIiLCJfIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIl0sIm1hcHBpbmdzIjoicXlFQUFBQSxJQUFBQyxhQUNBLFNBQUFELElBQUFFLGdCQUFBQyxLQUFBSCxDQUFBLEVBQ0EsSUFBQUksTUFDQSxJQUFBQyxXQUNBLElBQUFDLGdCQUNBLElBQUFDLFNBQ0EsSUFBQUMsT0FDQSxJQUFBQyxlQUNBLElBQUFDLE9BQ0EsSUFBQUMsWUFDQSxJQUFBQyxNQUNBLENBQUEsRUFFQUMsSUFBQSxJQUFBYixJQ1ZBYyxNQUFBQyxTQUFBQyxjQUFBLFFBQUEsRUFDQUMsUUFBQUYsU0FBQUMsY0FBQSxVQUFBLEVBQ0FFLGNBQUFILFNBQUFDLGNBQUEsbUJBQUEsRUFDQUcsY0FBQUosU0FBQUssaUJBQUEsa0JBQUEsRUFDQUMsWUFBQU4sU0FBQUMsY0FBQSxpQkFBQSxFQUNBTSxTQUFBUCxTQUFBQyxjQUFBLGFBQUEsRUFFQU8sS0FBQVIsU0FBQUssaUJBQUEsY0FBQSxFQUNBSSxjQUFBVCxTQUFBQyxjQUFBLHdCQUFBLEVBQ0FTLFlBQUFWLFNBQUFLLGlCQUFBLGtCQUFBLEVBRUFNLElBQUFYLFNBQUFDLGNBQUEsTUFB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QUFTLFFBQUEyQyxNQUNBRSxFQUFBRixDQUFBLEVBQ0FELEVBQUFDLENBQUEsRUFFQSxDQUFBLENBQ0EsQ0FBQSxFQUFBLEVBQUF6RixDQUFBLEVBQUEiLCJmaWxlIjoic2NyaXB0LW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBuZXcgTW9kYWwoKTtcclxuICAgIG5ldyBQYWdlU2Nyb2xsKCk7XHJcbiAgICBuZXcgVGFiYmVkQ29tcG9uZW50KCk7XHJcbiAgICBuZXcgTWVudUZhZGUoKTtcclxuICAgIG5ldyBTdGlja3koKTtcclxuICAgIG5ldyBSZXZlYWxTZWN0aW9ucygpO1xyXG4gICAgbmV3IFNraWxscygpO1xyXG4gICAgbmV3IExhenlMb2FkaW5nKCk7XHJcbiAgICBuZXcgU2xpZGVyKCk7XHJcbiAgfVxyXG59XHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVmFyaWFibGVzXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5jb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tY2xvc2UtbW9kYWwnKTtcclxuY29uc3QgYnRuc09wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tLXNob3ctbW9kYWwnKTtcclxuY29uc3QgYnRuU2Nyb2xsVG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1zY3JvbGwtdG8nKTtcclxuY29uc3Qgc2VjdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjdGlvbi0tMicpO1xyXG5cclxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbHNfX3RhYicpO1xyXG5jb25zdCB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxsc19fdGFiLWNvbnRhaW5lcicpO1xyXG5jb25zdCB0YWJzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbHNfX2NvbnRlbnQnKTtcclxuXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcclxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGlua3MtLWJhcicpO1xyXG5jb25zdCBuYXZJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGluay0taWNvbicpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIE1vZGFsIHdpbmRvd1xyXG5jbGFzcyBNb2RhbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBidG5zT3Blbk1vZGFsLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk1vZGFsKSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5zT3Blbk1vZGFsLmxlbmd0aDsgaSsrKVxyXG4gICAgICBidG5zT3Blbk1vZGFsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTW9kYWwpO1xyXG5cclxuICAgIGJ0bkNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTW9kYWwpO1xyXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VNb2RhbCk7XHJcblxyXG4gICAgdGhpcy5lc2NLZXkoKTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKCkge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgZXNjS2V5KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmICFtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUEFHRSBTQ1JPTExJTkdcclxuY2xhc3MgUGFnZVNjcm9sbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBCdXR0b24gc2Nyb2xsaW5nXHJcbiAgICBidG5TY3JvbGxUby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgc2VjdGlvbjIuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIFBhZ2UgTmF2aWdhdGlvblxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpbmtzJylcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fbGluaycpKSB7XHJcbiAgICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBQYWdlIE5hdmlnYXRpb24gbW9iaWxlIHRhYmxldFxyXG4gICAgbmF2SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICBuYXZCYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYXZCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2X19saW5rJykpIHtcclxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVEFCQkVEIENPTVBPTkVOVFxyXG5jbGFzcyBUYWJiZWRDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGFic0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2tpbGxzX190YWInKTtcclxuXHJcbiAgICAgIGlmICghY2xpY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdza2lsbHNfX3RhYi0tYWN0aXZlJykpO1xyXG4gICAgICB0YWJzQ29udGVudC5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKCdza2lsbHNfX2NvbnRlbnQtLWFjdGl2ZScpKTtcclxuXHJcbiAgICAgIGNsaWNrZWQuY2xhc3NMaXN0LmFkZCgnc2tpbGxzX190YWItLWFjdGl2ZScpO1xyXG5cclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgLnNraWxsc19fY29udGVudC0tJHtjbGlja2VkLmRhdGFzZXQudGFifWApXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3NraWxsc19fY29udGVudC0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIE1FTlUgRkFERSBBTklNQVRJT05cclxuY2xhc3MgTWVudUZhZGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuaGFuZGxlSG92ZXIuYmluZCgwLjUpKTtcclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuaGFuZGxlSG92ZXIuYmluZCgxKSk7XHJcbiAgfVxyXG4gIGhhbmRsZUhvdmVyKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fbGluaycpKSB7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldDtcclxuICAgICAgY29uc3Qgc2libGluZ3MgPSBsaW5rLmNsb3Nlc3QoJy5uYXYnKS5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19saW5rJyk7XHJcbiAgICAgIGNvbnN0IGxvZ28gPSBsaW5rLmNsb3Nlc3QoJy5uYXYnKS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuXHJcbiAgICAgIHNpYmxpbmdzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmIChlbCAhPT0gbGluaykgZWwuc3R5bGUub3BhY2l0eSA9IHRoaXM7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsb2dvLnN0eWxlLm9wYWNpdHkgPSB0aGlzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gU1RJQ0tZIE5BVklHQVRJT05cclxuY2xhc3MgU3RpY2t5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IG5hdkhlaWdodCA9IG5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5zdGlja3lOYXYsIHtcclxuICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgdGhyZXNob2xkOiAwLFxyXG4gICAgICByb290TWFyZ2luOiBgLSR7bmF2SGVpZ2h0fXB4YCxcclxuICAgIH0pO1xyXG4gICAgaGVhZGVyT2JzZXJ2ZXIub2JzZXJ2ZShoZWFkZXIpO1xyXG4gIH1cclxuICBzdGlja3lOYXYoZW50cmllcykge1xyXG4gICAgY29uc3QgW2VudHJ5XSA9IGVudHJpZXM7XHJcblxyXG4gICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykgbmF2LmNsYXNzTGlzdC5hZGQoJ3N0aWNreScpO1xyXG4gICAgZWxzZSBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5Jyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBTS0lMTFMgQkxVUiBBTklNQVRJT05cclxuY2xhc3MgU2tpbGxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2lsbHNfX2JsdXInKTtcclxuICAgIHNlY3Rpb25UaXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLnNraWxsc0hvdmVyLmJpbmQoMTApKTtcclxuICAgIHNlY3Rpb25UaXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuc2tpbGxzSG92ZXIuYmluZCgwKSk7XHJcbiAgfVxyXG4gIHNraWxsc0hvdmVyKGUpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IHNpYmxpbmdzID0gbGlua1xyXG4gICAgICAuY2xvc2VzdCgnLnNraWxsc19faW1hZ2VzJylcclxuICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGxzX19pbWFnZScpO1xyXG5cclxuICAgIHNpYmxpbmdzPy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgaWYgKGVsICE9PSBsaW5rKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuZmlsdGVyID0gYGJsdXIoJHt0aGlzfXB4KWA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUkVWRUFMIFNFQ1RJT05TXHJcbmNsYXNzIFJldmVhbFNlY3Rpb25zIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IGFsbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKTtcclxuICAgIGNvbnN0IHNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLnJldmVhbFNlY3Rpb24sIHtcclxuICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgdGhyZXNob2xkOiAwLjEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhbGxTZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uKSB7XHJcbiAgICAgIHNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xyXG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tLWhpZGRlbicpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldmVhbFNlY3Rpb24oZW50cmllcywgb2JzZXJ2ZXIpIHtcclxuICAgIGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzO1xyXG4gICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykgcmV0dXJuO1xyXG5cclxuICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWN0aW9uLS1oaWRkZW4nKTtcclxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gTEFaWSBMT0FESU5HIElNQUdFU1xyXG5jbGFzcyBMYXp5TG9hZGluZyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBpbWdUYXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXScpO1xyXG4gICAgY29uc3QgaW1nT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5sb2FkSW1nLCB7XHJcbiAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgIHRocmVzaG9sZDogMCxcclxuICAgICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcclxuICAgIH0pO1xyXG5cclxuICAgIGltZ1RhcmdldHMuZm9yRWFjaChpbWcgPT4gaW1nT2JzZXJ2ZXIub2JzZXJ2ZShpbWcpKTtcclxuICB9XHJcblxyXG4gIGxvYWRJbWcoZW50cmllcywgb2JzZXJ2ZXIpIHtcclxuICAgIGNvbnN0IFtlbnRyeV0gPSBlbnRyaWVzO1xyXG5cclxuICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHJldHVybjtcclxuXHJcbiAgICBlbnRyeS50YXJnZXQuc3JjID0gZW50cnkudGFyZ2V0LmRhdGFzZXQuc3JjO1xyXG5cclxuICAgIGVudHJ5LnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eS1pbWcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gU0xJREVSXHJcbmNsYXNzIFNsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNsaWRlcigpO1xyXG4gIH1cclxuXHJcbiAgc2xpZGVyKCkge1xyXG4gICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJyk7XHJcbiAgICBjb25zdCBidG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fYnRuLS1sZWZ0Jyk7XHJcbiAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tcmlnaHQnKTtcclxuICAgIGNvbnN0IGRvdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3RzJyk7XHJcblxyXG4gICAgbGV0IGN1clNMaWRlID0gMDtcclxuICAgIGNvbnN0IG1heFNsaWRlID0gc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAvLyBmdW5jdGlvbnNcclxuICAgIGNvbnN0IGNyZWF0ZURvdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfLCBpKSB7XHJcbiAgICAgICAgZG90Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICdiZWZvcmVlbmQnLFxyXG4gICAgICAgICAgYDxidXR0b24gY2xhc3M9XCJkb3RzX19kb3RcIiBkYXRhLXNsaWRlPVwiJHtpfVwiPjwvYnV0dG9uPmBcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWN0aXZhdGVEb3QgPSBmdW5jdGlvbiAoc2xpZGUpIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmRvdHNfX2RvdCcpXHJcbiAgICAgICAgLmZvckVhY2goZG90ID0+IGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdkb3RzX19kb3QtLWFjdGl2ZScpKTtcclxuXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5kb3RzX19kb3RbZGF0YS1zbGlkZT1cIiR7c2xpZGV9XCJdYClcclxuICAgICAgICAuY2xhc3NMaXN0LmFkZCgnZG90c19fZG90LS1hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ29Ub1NsaWRlID0gZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICAgIHNsaWRlcy5mb3JFYWNoKFxyXG4gICAgICAgIChzLCBpKSA9PiAocy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezEwMCAqIChpIC0gc2xpZGUpfSUpYClcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gbmV4dCBzbGlkZVxyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoY3VyU0xpZGUgPT09IG1heFNsaWRlIC0gMSkge1xyXG4gICAgICAgIGN1clNMaWRlID0gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJTTGlkZSsrO1xyXG4gICAgICB9XHJcbiAgICAgIGdvVG9TbGlkZShjdXJTTGlkZSk7XHJcbiAgICAgIGFjdGl2YXRlRG90KGN1clNMaWRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHJldlNsaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoY3VyU0xpZGUgPT09IDApIHtcclxuICAgICAgICBjdXJTTGlkZSA9IG1heFNsaWRlIC0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJTTGlkZS0tO1xyXG4gICAgICB9XHJcbiAgICAgIGdvVG9TbGlkZShjdXJTTGlkZSk7XHJcbiAgICAgIGFjdGl2YXRlRG90KGN1clNMaWRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZ29Ub1NsaWRlKDApO1xyXG4gICAgICBjcmVhdGVEb3RzKCk7XHJcbiAgICAgIGFjdGl2YXRlRG90KDApO1xyXG4gICAgfTtcclxuICAgIGluaXQoKTtcclxuXHJcbiAgICAvLyBldmVudCBoYW5kbGVyc1xyXG4gICAgYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpO1xyXG4gICAgYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5rZXkgPT09ICdBcnJvd0xlZnQnICYmIHByZXZTbGlkZSgpO1xyXG4gICAgICBlLmtleSA9PT0gJ0Fycm93UmlnaHQnICYmIG5leHRTbGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG90Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZG90c19fZG90JykpIHtcclxuICAgICAgICBjb25zdCB7IHNsaWRlIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xyXG4gICAgICAgIGdvVG9TbGlkZShzbGlkZSk7XHJcbiAgICAgICAgYWN0aXZhdGVEb3Qoc2xpZGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
