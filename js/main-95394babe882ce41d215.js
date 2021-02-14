(self["webpackChunkvue_toast_notification"] = self["webpackChunkvue_toast_notification"] || []).push([[179],{

/***/ 145:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./examples/App.vue?vue&type=template&id=482074f1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('main',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-8 mb-3"},[_c('div',{staticClass:"card"},[_c('form',{staticClass:"card-body",attrs:{"method":"post"},on:{"submit":function($event){$event.preventDefault();return _vm.show($event)}}},[_c('div',{staticClass:"form-group"},[_vm._m(1),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.form.message),expression:"form.message",modifiers:{"trim":true}}],staticClass:"form-control",attrs:{"type":"text","required":"","name":"message"},domProps:{"value":(_vm.form.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "message", $event.target.value.trim())},"blur":function($event){return _vm.$forceUpdate()}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Type")]),_vm._v(" "),_c('div',_vm._l((_vm.types),function(item){return _c('div',{key:item,staticClass:"custom-control custom-radio custom-control-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.type),expression:"form.type"}],staticClass:"custom-control-input",attrs:{"type":"radio","id":("radio-type-" + item)},domProps:{"value":item,"checked":_vm._q(_vm.form.type,item)},on:{"change":function($event){return _vm.$set(_vm.form, "type", item)}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label text-capitalize",attrs:{"for":("radio-type-" + item)}},[_vm._v(_vm._s(item))])])}),0)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Duration "),_c('code',[_vm._v("("+_vm._s(_vm.form.duration / 1000)+" seconds)")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.form.duration),expression:"form.duration",modifiers:{"number":true}}],staticClass:"custom-range",attrs:{"type":"range","min":"0","step":"1000","max":"60000"},domProps:{"value":(_vm.form.duration)},on:{"__r":function($event){_vm.$set(_vm.form, "duration", _vm._n($event.target.value))},"blur":function($event){return _vm.$forceUpdate()}}})]),_vm._v(" "),_c('div',{staticClass:"form-row"},[_c('div',{staticClass:"col-md-3"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Dismissible")]),_vm._v(" "),_c('div',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.dismissible),expression:"form.dismissible"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","id":"checkbox-dismissible"},domProps:{"checked":Array.isArray(_vm.form.dismissible)?_vm._i(_vm.form.dismissible,null)>-1:(_vm.form.dismissible)},on:{"change":function($event){var $$a=_vm.form.dismissible,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form, "dismissible", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.form, "dismissible", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.form, "dismissible", $$c)}}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"checkbox-dismissible"}},[_vm._v("Dismiss on click")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-9"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Queue")]),_vm._v(" "),_c('div',{staticClass:"custom-control custom-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.queue),expression:"form.queue"}],staticClass:"custom-control-input",attrs:{"type":"checkbox","id":"checkbox-queue"},domProps:{"checked":Array.isArray(_vm.form.queue)?_vm._i(_vm.form.queue,null)>-1:(_vm.form.queue)},on:{"change":function($event){var $$a=_vm.form.queue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form, "queue", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.form, "queue", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.form, "queue", $$c)}}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":"checkbox-queue"}},[_vm._v("Wait for previous to dismiss before\n                      showing new")])])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',[_vm._v("Position")]),_vm._v(" "),_c('div',_vm._l((_vm.positions),function(item){return _c('div',{key:item,staticClass:"custom-control custom-radio custom-control-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.position),expression:"form.position"}],staticClass:"custom-control-input",attrs:{"type":"radio","id":("radio-position-" + item)},domProps:{"value":item,"checked":_vm._q(_vm.form.position,item)},on:{"change":function($event){return _vm.$set(_vm.form, "position", item)}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label text-capitalize",attrs:{"for":("radio-position-" + item)}},[_vm._v(_vm._s(item))])])}),0)]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Show notification")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-info",attrs:{"type":"button"},on:{"click":_vm.showAll}},[_vm._v("Demo all")]),_vm._v(" "),_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"},on:{"click":_vm.clearAll}},[_vm._v("Hide all")])])])]),_vm._v(" "),_vm._m(2)])]),_vm._v(" "),_vm._m(3)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar navbar-expand-lg navbar navbar-light bg-white shadow-sm mb-3"},[_c('span',{staticClass:"navbar-brand mb-0"},[_vm._v("Vue.js Toast")]),_vm._v(" "),_c('ul',{staticClass:"navbar-nav ml-auto"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/ankurk91/vue-toast-notification","target":"_blank"}},[_vm._v(" GitHub")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_vm._v("Message "),_c('code',[_vm._v("(required)")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"col-md-4 mb-3"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_vm._v(" Links")]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/ankurk91/vue-toast-notification","target":"_blank"}},[_vm._v("GitHub")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.npmjs.com/package/vue-toast-notification","target":"_blank"}},[_vm._v("npm")])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"text-center text-muted small mb-3"},[_vm._v("\n    Created by "),_c('a',{attrs:{"href":"https://twitter.com/ankurk91","target":"_blank","rel":"noopener"}},[_vm._v("@ankurk91")])])}]


;// CONCATENATED MODULE: ./examples/App.vue?vue&type=template&id=482074f1&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Component.vue?vue&type=template&id=6dd22dbe&
var Componentvue_type_template_id_6dd22dbe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"enter-active-class":_vm.transition.enter,"leave-active-class":_vm.transition.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"v-toast__item",class:[("v-toast__item--" + _vm.type), ("v-toast__item--" + _vm.position)],attrs:{"role":"alert"},on:{"mouseover":function($event){return _vm.toggleTimer(true)},"mouseleave":function($event){return _vm.toggleTimer(false)},"click":_vm.whenClicked}},[_c('div',{staticClass:"v-toast__icon"}),_vm._v(" "),_c('p',{staticClass:"v-toast__text",domProps:{"innerHTML":_vm._s(_vm.message)}})])])}
var Componentvue_type_template_id_6dd22dbe_staticRenderFns = []


;// CONCATENATED MODULE: ./src/js/helpers.js
const removeElement = el => {
  if (typeof el.remove !== 'undefined') {
    el.remove();
  } else {
    el.parentNode.removeChild(el);
  }
};


;// CONCATENATED MODULE: ./src/js/timer.js
// https://stackoverflow.com/a/3969760
class Timer {
  constructor(callback, delay) {
    this.startedAt = Date.now();
    this.callback = callback;
    this.delay = delay;
    this.timer = setTimeout(callback, delay);
  }

  pause() {
    this.stop();
    this.delay -= Date.now() - this.startedAt;
  }

  resume() {
    this.stop();
    this.startedAt = Date.now();
    this.timer = setTimeout(this.callback, this.delay);
  }

  stop() {
    clearTimeout(this.timer);
  }

}
;// CONCATENATED MODULE: ./src/js/positions.js
/* harmony default export */ const positions = (Object.freeze({
  TOP_RIGHT: 'top-right',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left'
}));
// EXTERNAL MODULE: ./node_modules/mitt/dist/mitt.es.js
var mitt_es = __webpack_require__(652);
;// CONCATENATED MODULE: ./src/js/bus.js

/* harmony default export */ const bus = ((0,mitt_es/* default */.Z)());
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/Component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const Componentvue_type_script_lang_js_ = ({
  name: 'toast',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success'
    },
    position: {
      type: String,
      default: positions.BOTTOM_RIGHT,

      validator(value) {
        return Object.values(positions).includes(value);
      }

    },
    duration: {
      type: Number,
      default: 3000
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    onDismiss: {
      type: Function,
      default: () => {}
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    queue: Boolean,
    pauseOnHover: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isActive: false,
      parentTop: null,
      parentBottom: null,
      isHovered: false
    };
  },

  beforeMount() {
    this.setupContainer();
  },

  mounted() {
    this.showNotice();
    bus.on('toast-clear', this.dismiss);
  },

  methods: {
    setupContainer() {
      this.parentTop = document.querySelector('.v-toast.v-toast--top');
      this.parentBottom = document.querySelector('.v-toast.v-toast--bottom'); // No need to create them, they already exists

      if (this.parentTop && this.parentBottom) return;

      if (!this.parentTop) {
        this.parentTop = document.createElement('div');
        this.parentTop.className = 'v-toast v-toast--top';
      }

      if (!this.parentBottom) {
        this.parentBottom = document.createElement('div');
        this.parentBottom.className = 'v-toast v-toast--bottom';
      }

      const container = document.body;
      container.appendChild(this.parentTop);
      container.appendChild(this.parentBottom);
    },

    shouldQueue() {
      if (!this.queue) return false;
      return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
    },

    dismiss() {
      if (this.timer) this.timer.stop();
      clearTimeout(this.queueTimer);
      this.isActive = false; // Timeout for the animation complete before destroying

      setTimeout(() => {
        this.onDismiss.apply(null, arguments);
        this.$destroy();
        removeElement(this.$el);
      }, 150);
    },

    showNotice() {
      if (this.shouldQueue()) {
        // Call recursively if should queue
        this.queueTimer = setTimeout(this.showNotice, 250);
        return;
      }

      this.correctParent.insertAdjacentElement('afterbegin', this.$el);
      this.isActive = true;

      if (this.duration) {
        this.timer = new Timer(this.dismiss, this.duration);
      }
    },

    whenClicked() {
      if (!this.dismissible) return;
      this.onClick.apply(null, arguments);
      this.dismiss();
    },

    toggleTimer(newVal) {
      if (!this.pauseOnHover || !this.timer) return;
      newVal ? this.timer.pause() : this.timer.resume();
    }

  },
  computed: {
    correctParent() {
      switch (this.position) {
        case positions.TOP:
        case positions.TOP_RIGHT:
        case positions.TOP_LEFT:
          return this.parentTop;

        case positions.BOTTOM:
        case positions.BOTTOM_RIGHT:
        case positions.BOTTOM_LEFT:
          return this.parentBottom;
      }
    },

    transition() {
      switch (this.position) {
        case positions.TOP:
        case positions.TOP_RIGHT:
        case positions.TOP_LEFT:
          return {
            enter: 'v-toast--fade-in-down',
            leave: 'v-toast--fade-out'
          };

        case positions.BOTTOM:
        case positions.BOTTOM_RIGHT:
        case positions.BOTTOM_LEFT:
          return {
            enter: 'v-toast--fade-in-up',
            leave: 'v-toast--fade-out'
          };
      }
    }

  },

  beforeDestroy() {
    bus.off('toast-clear', this.dismiss);
  }

});
;// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=script&lang=js&
 /* harmony default export */ const js_Componentvue_type_script_lang_js_ = (Componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(900);
;// CONCATENATED MODULE: ./src/js/Component.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  js_Componentvue_type_script_lang_js_,
  Componentvue_type_template_id_6dd22dbe_render,
  Componentvue_type_template_id_6dd22dbe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const Component = (component.exports);
;// CONCATENATED MODULE: ./src/js/api.js



const Api = (Vue, globalOptions = {}) => {
  return {
    open(options) {
      let message;
      if (typeof options === 'string') message = options;
      const defaultOptions = {
        message
      };
      const propsData = Object.assign({}, defaultOptions, globalOptions, options);
      return new (Vue.extend(Component))({
        el: document.createElement('div'),
        propsData
      });
    },

    clear() {
      bus.emit('toast-clear');
    },

    success(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'success'
      }, options));
    },

    error(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'error'
      }, options));
    },

    info(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'info'
      }, options));
    },

    warning(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'warning'
      }, options));
    },

    default(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'default'
      }, options));
    }

  };
};

/* harmony default export */ const api = (Api);
;// CONCATENATED MODULE: ./src/index.js




const Plugin = (Vue, options = {}) => {
  let methods = api(Vue, options);
  Vue.$toast = methods;
  Vue.prototype.$toast = methods;
};

Component.install = Plugin;
/* harmony default export */ const src = (Component);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./examples/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //import '../src/themes/default/index.scss'


vue_runtime_esm/* default.use */.Z.use(src);
/* harmony default export */ const Appvue_type_script_lang_js_ = ({
  name: 'app',

  data() {
    return {
      form: {
        message: 'This is a sample message',
        type: 'success',
        duration: 10000,
        dismissible: true,
        queue: false,
        position: 'bottom-right',
        onClick: this.onClick,
        onDismiss: this.onDismiss
      },
      types: ['success', 'error', 'warning', 'info', 'default'],
      positions: positions
    };
  },

  components: {},

  mounted() {
    // Lets show some toasts on page load
    this.showAll();
  },

  methods: {
    showAll() {
      this.types.forEach(type => {
        this.$toast.open({
          message: 'Yet another toast notification!',
          duration: this.form.duration,
          type
        });
      });
    },

    onClick() {
      console.log("User dismissed the notification.");
    },

    onDismiss() {
      console.log("Toast was dismissed.");
    },

    show() {
      this.$toast.open(this.form);
    },

    clearAll() {
      this.$toast.clear();
    }

  }
});
;// CONCATENATED MODULE: ./examples/App.vue?vue&type=script&lang=js&
 /* harmony default export */ const examples_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./examples/App.vue





/* normalize component */
;
var App_component = (0,componentNormalizer/* default */.Z)(
  examples_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const App = (App_component.exports);
;// CONCATENATED MODULE: ./examples/index.js





new vue_runtime_esm/* default */.Z({
  el: '#app',
  render: h => h(App)
});

/***/ })

},
0,[[145,700,736]]]);