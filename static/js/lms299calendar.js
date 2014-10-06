/*global window, document, $, moment */
/**
LMS299 Calendar Control
**/
(function ($, window, undefined, moment) {
   /**
    example usage
    $(document).ready(function() {
        console.log('hi');
        $('#fullcalendar').fullCalendar({
            disabled: false,
            created: false
        });
    });
   **/
    $.widget('lms299.lmsCalendar', {
        options: {
            disabled: false,
            created: false
        },
        _create: function (options) {
            var self = this;
            alert('2');
        },
        _init: function () {
            var self = this;
            alert('1');
            if (!self.options.created) {
                    self._createCalendar();
                }
                alert('hi');
                self.options.created = true;
            },
            //self.element.click(this.options.click);
            //self._setDisabled(self.options.disabled);
            //self.element.css('height', self.options.height);
            //self.element.css('line-height', self.options.height - 5 + 'px');
            //self.element.addClass('dr-crm-button-hover');
        _createCalendar: function () {
            var self = this;
            self.element.addClass('lms299-calendar');
            self._container = $('<div id="lms299calendar-container"></div>').appendTo(this.element);
            $('#lms299calendar-container').fullCalendar();
            
        }
    });
}(jQuery, window, document, moment));



