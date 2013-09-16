/*global define */
define([
    'underscore',
    'jquery',
    'gui',
    'groceries'
], function (
    _,
    $,
    gui,
    groceries
) {
    'use strict';

    return {
        run : function() {
            gui.run();
            this._setupListeners();
        },

        _setupListeners: function () {
            var _this = this;

            $(gui).on('sort', function(e, groceryList) {
                _this._sortGroceries(groceryList);
            });
        },
        _sortGroceries: function (groceryList) {
            var sortedGroceries = groceries.sort(groceryList);
            gui.renderList(sortedGroceries);
        }
    };
});
