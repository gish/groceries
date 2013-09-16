/* global define */
define(['underscore', 'config/groceryorder'], function(_, groceryOrder) {
    'use strict';

    return {
        sort : function(list) {
            return _.sortBy(list, function(item) {
                var pos = _.indexOf(groceryOrder, item);

                if (pos === -1) {
                    pos = groceryOrder.length;
                }

                return pos;
            });
        }
    };
});
