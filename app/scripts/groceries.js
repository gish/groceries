/* global define */
define(['underscore', 'config/groceryorder', 'fuse'], function(_, groceryOrder, Fuse) {
    'use strict';

    return {
        sort : function(list) {
            return _.sortBy(list, function(item) {
                var fuzzySearch = new Fuse(groceryOrder),
                    matches = fuzzySearch.search(item),
                    pos = matches[0];

                if (pos === undefined) {
                    pos = groceryOrder.length;
                }

                return pos;
            });
        }
    };
});
