!function(e,t){object==typeof exports&&undefined!=typeof modulemodule.exports=t()function==typeof define&&define.amddefine(t)(e=undefined!=typeof globalThisglobalThiseself).MicroModal=t()}(this,(function(){use strict;function e(e,t){for(var o=0;ot.length;o++){var n=t[o];n.enumerable=n.enumerable!1,n.configurable=!0,valuein n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)function(e){if(undefined!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)function(e,t){if(!e)return;if(string==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);Object===n&&e.constructor&&(n=e.constructor.name);if(Map===nSet===n)return Array.from(e);if(Arguments===n^(UiI)nt(81632)(Clamped)Array$.test(n))return o(e,t)}(e)function(){throw new TypeError(Invalid attempt to spread non-iterable instance.nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.)}()}function o(e,t){(null==tte.length)&&(t=e.length);for(var o=0,n=new Array(t);ot;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=[a[href],area[href],'inputnot([disabled])not([type=hidden])not([aria-hidden])',selectnot([disabled])not([aria-hidden]),textareanot([disabled])not([aria-hidden]),buttonnot([disabled])not([aria-hidden]),iframe,object,embed,[contenteditable],'[tabindex]not([tabindex^=-])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i[]i,r=e.onShow,s=void 0===rfunction(){}r,l=e.onClose,c=void 0===lfunction(){}l,d=e.openTrigger,u=void 0===ddata-micromodal-triggerd,f=e.closeTrigger,h=void 0===fdata-micromodal-closef,v=e.openClass,g=void 0===vis-openv,m=e.disableScroll,b=void 0!==m&&m,y=e.disableFocus,p=void 0!==y&&y,w=e.awaitCloseAnimation,E=void 0!==w&&w,k=e.awaitOpenAnimation,M=void 0!==k&&k,A=e.debugMode,C=void 0!==A&&A;!function(e,t){if(!(e instanceof t))throw new TypeError(Cannot call a class as a function)}(this,o),this.modal=document.getElementById(n),this.config={debugModeC,disableScrollb,openTriggeru,closeTriggerh,openClassg,onShows,onClosec,awaitCloseAnimationE,awaitOpenAnimationM,disableFocusp},a.length0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a,r;return i=o,(a=[{keyregisterTriggers,valuefunction(){for(var e=this,t=arguments.length,o=new Array(t),n=0;nt;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener(click,(function(t){return e.showModal(t)}))}))}},{keyshowModal,valuefunction(){var e=this,t=arguments.length0&&void 0!==arguments[0]arguments[0]null;if(this.activeElement=document.activeElement,this.modal.setAttribute(aria-hidden,false),this.modal.classList.add(this.config.openClass),this.scrollBehaviour(disable),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener(animationend,t,!1),e.setFocusToFirstNode()};this.modal.addEventListener(animationend,o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{keycloseModal,valuefunction(){var e=arguments.length0&&void 0!==arguments[0]arguments[0]null,t=this.modal;if(this.modal.setAttribute(aria-hidden,true),this.removeEventListeners(),this.scrollBehaviour(enable),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener(animationend,(function e(){t.classList.remove(o),t.removeEventListener(animationend,e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{keycloseModalById,valuefunction(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{keyscrollBehaviour,valuefunction(e){if(this.config.disableScroll){var t=document.querySelector(body);switch(e){caseenableObject.assign(t.style,{overflow});break;casedisableObject.assign(t.style,{overflowhidden})}}}},{keyaddEventListeners,valuefunction(){this.modal.addEventListener(touchstart,this.onClick),this.modal.addEventListener(click,this.onClick),document.addEventListener(keydown,this.onKeydown)}},{keyremoveEventListeners,valuefunction(){this.modal.removeEventListener(touchstart,this.onClick),this.modal.removeEventListener(click,this.onClick),document.removeEventListener(keydown,this.onKeydown)}},{keyonClick,valuefunction(e){(e.target.hasAttribute(this.config.closeTrigger)e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{keyonKeydown,valuefunction(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{keygetFocusableNodes,valuefunction(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{keysetFocusToFirstNode,valuefunction(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{keyretainFocus,valuefunction(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),r&&e(i,r),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn(MicroModal ❗Seems like you have missed %c'.concat(e,'),background-color #f8f9fa;color #50596c;font-weight bold;,ID somewhere in your code. Refer example below to resolve it.),console.warn(%cExample,background-color #f8f9fa;color #50596c;font-weight bold;,'div class=modal id='.concat(e,'div')),!1},s=function(e,t){if(function(e){e.length=0&&(console.warn(MicroModal ❗Please specify at least one %c'micromodal-trigger',background-color #f8f9fa;color #50596c;font-weight bold;,data attribute.),console.warn(%cExample,background-color #f8f9fa;color #50596c;font-weight bold;,'a href=# data-micromodal-trigger=my-modala'))}(e),!t)return!0;for(var o in t)r(o);return!0},{initfunction(e){var o=Object.assign({},{openTriggerdata-micromodal-trigger},e),n=t(document.querySelectorAll([.concat(o.openTrigger,]))),r=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode!1!==s(n,r))for(var l in r){var c=r[l];o.targetModal=l,o.triggers=t(c),a=new i(o)}},showfunction(e,t){var o=t{};o.targetModal=e,!0===o.debugMode&&!1===r(e)(a&&a.removeEventListeners(),(a=new i(o)).showModal())},closefunction(e){ea.closeModalById(e)a.closeModal()}});returnundefined!=typeof window&&(window.MicroModal=l),l}));