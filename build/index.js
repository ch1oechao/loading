'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

define(function (require, exports, module) {
    require('./index.css');

    var $ = require('node').all;
    var util = require('util');

    var Loading = (function () {
        function Loading(data) {
            _classCallCheck(this, Loading);

            var DEFAULT_CONFIG = {
                container: '',
                text: '载入中...',
                bgColor: '#666',
                textColor: '#CCC',
                circleColor: '#CCC',
                duration: '1.5s'
            };
            data = util.mix(data || {}, DEFAULT_CONFIG, false);
            this.$container = $(data.container);
            this.text = data.text;
            this.bgColor = data.bgColor;
            this.textColor = data.textColor;
            this.circleColor = data.circleColor;
            this.duration = data.duration;

            this.init();
        }

        _createClass(Loading, [{
            key: 'init',
            value: function init() {
                var wrapWidth = this.$container.width(),
                    wrapHeight = this.$container.height(),
                    boxWidth = 150,
                    boxHeight = 150;
                this.$loading = $('<div class="loading-wrap">' + '<div class="loading-box">' + '<div class="loading-circle"></div>' + '<div class="loading-text">' + this.text + '</div>' + '</div>' + '</div>');

                this.$container.append(this.$loading);
                $(this.$loading, this.$container).css({
                    'top': (wrapHeight - boxHeight) / 2 + 'px',
                    'left': (wrapWidth - boxWidth) / 2 + 'px',
                    'color': this.bgColor
                });
                $('.loading-circle', this.$loading).css({
                    'background-color': this.circleColor,
                    'animationDuration': this.duration
                });
                $('.loading-text', this.$loading).css({
                    'color': this.textColor
                });
            }
        }, {
            key: 'show',
            value: function show() {
                $('.loading-wrap', this.$container).addClass('show');
            }
        }, {
            key: 'hide',
            value: function hide() {
                $('.loading-wrap', this.$container).removeClass('show');
            }
        }]);

        return Loading;
    })();

    module.exports = Loading;
});