define((require, exports, module) => {
    require('./index.css');

    var $ = require('node').all;
    var util = require('util');

    class Loading {
        constructor(data) {
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

        init() {
            var wrapWidth = this.$container.width(),
                wrapHeight = this.$container.height(),
                boxWidth = 150,
                boxHeight = 150;
            this.$loading = $('<div class="loading-wrap">' 
                            +     '<div class="loading-box">' 
                            +         '<div class="loading-circle"></div>' 
                            +         '<div class="loading-text">' + this.text + '</div>' 
                            +     '</div>' 
                            + '</div>');

            this.$container.append(this.$loading);
            this.$loading.css({
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

        show() {
            $('.loading-wrap', this.$container).addClass('show');
        }

        hide() {
            $('.loading-wrap', this.$container).removeClass('show');
        }
    }

    module.exports = Loading;

});
