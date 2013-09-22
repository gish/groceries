/* global define */
define(['underscore', 'config/groceryorder', 'fuse'], function(_, groceryOrder, Fuse) {
    'use strict';

    return {
        sort : function(list) {
            return _.sortBy(list, function(item) {
                var fuzzySearch = new Fuse(groceryOrder),
                    hits = fuzzySearch.search(item),
                    pos = hits[0];

                if (hits.length === 0) {
                    pos = groceryOrder.length;
                }

                return pos;
            });
        }
    };
});
