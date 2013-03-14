;(function($, document, window, undefined) {
  "use strict";
  
  var pluginName = "JSWebConsole"

  var defaults = {
      commandUri : "commands",
      styling : {
          'width':'100%',
          'height':'100%',
          'padding':'10px',
          'background-color':'black',
          'color':'green',
          'font-family':'Courier'
      }
  };

  function WebConsole(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options)

    this.$el      = $(element);
    this.$el.data(name, this);

    this.defaults = {};

    var meta      = this.$el.data(name + '-opts');
    this.opts     = $.extend(this.defaults, options, meta);

    this.init();
  }

  WebConsole.prototype.init = function() {
      _init_styling.call(this, defaults.styling);
      _init_text.call(this, "Hello world");
  };
  
  var _init_styling = function(styles){
      this.$el.css(styles);
  }
  var _init_text = function(txt){
      this.$el.text(txt)
  }
  
  
  

  $.fn.WebConsole = function(options) {
    
    return this.each(function() {
      var element = this;

      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new WebConsole( this, options ));
      }

    });

  };

})(jQuery, document, window);