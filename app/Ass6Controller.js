
angular.module("app").controller('Ass6Controller', function($scope) {
    
    $scope.items = [
       { order: 'TV', price: 23},    
        {order: 'Mobile', price: 23},
        {order: 'Bag', price: 123}
    ];
    




    $scope.selectedItems = [];
    $scope.value = function (isSelected, item) {
        if (isSelected == true) {
            $scope.selectedItems.push(item);
        } else {
            console.log(item.order);
            angular.forEach($scope.selectedItems, function (itemRmv, $index) {
                if (itemRmv.order == item.order) {
                    $scope.selectedItems.splice($index, 1);
                }
            })
        }
    }
});

app.filter('getprice', function () {
    return function (value, property) {
        var total = 0;
        angular.forEach(value, function (val, index) {
            total = total + parseInt(val.price)
        });
        return total;
    }
});
    // $scope.getTotal = function(type) {
    //     var total = 0;
    //     angular.forEach($scope.items, function(el) {
    //         total += el[type];
    //     });
    //     return total;
    // };

