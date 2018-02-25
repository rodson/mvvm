function Compile(el, vm) {
  this.$vm = vm;
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);

  if (this.$el) {
    this.$fragment = this.node2Fragment(this.$el);
    this.init();
    this.$el.appendChild(this.$fragment);
  }
}

Compile.prototype = {
  node2Fragment: function(el) {
    var fragment = document.createDocumentFragment();
    var child;
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }
    return fragment;
  },

  init: function() {
    this.compileElement(this.$fragment);
  },

  compileElement: function(el) {
    var childNodes = el.childNodes;
    var me = this;

    [].slice.call(childNodes).forEach(function(node) {
      var text = node.textContent;
      var reg = /\{\{(.*)\}\}/;

      if (me.isElementNode(node)) {
        me.compile(node);
      }
    });
  },

  compile: function(node) {
    var nodeAttrs = node.attributes;
    me = this;

    [].slice(nodeAttrs).forEach(function(attrs) {
      var attrName = attr.name;
      if (me.isDirective(attrName)) {
        var exp = attr.value;
        var dir = attrName.substring(2);
        if (me.isEventDirective(dir)) {
        } else {
        }
      }
    });
  },

  isDirective: function(attr) {
    return attr.indexOf('v-') == 0;
  },

  isEventDirective: function(dir) {
    return dir.indexOf('on') == 0;
  },

  isElementNode: function(node) {
    return node.nodeType === 1;
  },

  isTextNode: function(node) {
    return node.nodeType === 3;
  }
};

var compileUtil = {
  text: function(node, vm, exp) {
    this.bind(node, vm, exp, 'text');
  },

  bind: function(node, vm, exp, dir) {
    var updateFn = updater[dir + 'Updater'];
    updateFn && updateFn(node, this._getVMVal(vm, exp));

    new Watcher(vm, exp, function(value, oldValue) {
      updateFn && updateFn(node, value, oldValue);
    });
  }
};

var updater = {
  textUpdater: function(node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value;
  },

  htmlUpdater: function(node, value) {
    node.innerHTML = typeof value == 'undefined' ? '' : value;
  },

  classUpdater: function(node, value, oldValue) {
    var className = node.className;
    className = className.replace(oldValue, '').replace(/\s$/, '');
    var space = className && String(value) ? ' ' : '';
    node.className = className + space + value;
  },

  modelUpdater: function(node, value) {
    node.value = typeof value == 'undefined' ? '' : value;
  }
};
