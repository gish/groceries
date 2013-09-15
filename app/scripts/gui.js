/* global define */
define(['jquery'], function() {
    'use strict';

    return {
        $groceryInput : $('.grocery-list'),
        $sortButton: $('.grocery-sort-button'),
        itemSeparator: '\n',
        run: function() {
            this._setupListeners();
        },
        renderList : function(list) {
            this.$groceryInput.val(list.join(this.itemSeparator));
        },
        _setupListeners: function() {
            var _this = this;
            this.$sortButton.on('click', function() {
                var groceries = _this.$groceryInput.val().split(_this.itemSeparator);
                $(_this).trigger('sort', [groceries]);
            });
        }
    };
});
