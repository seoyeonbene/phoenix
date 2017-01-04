(function () {
    var app = angular.module('sample', []);

    app.controller('SampleCtrl', function ($scope) {
        $scope.datas = [
            {
                id: 1,
                name: 'seo yeon',
                completed: false,
                createdAt: Date.now()
            },
            {
                id: 2,
                name: 'seo yeon2',
                completed: false,
                createdAt: Date.now()
            },
            {
                id: 3,
                name: 'seo yeon3',
                completed: true,
                createdAt: Date.now()
            }
        ];

        $scope.remove = function (data) {
            var idx = $scope.datas.findIndex(function (item) {
                return item.id === data.id;
            })

            if (idx > -1) {
                $scope.datas.splice(idx, 1);
            }
        };


        $scope.add = function (newData) {
            console.log(newData);
            var _newData = {
                id: 4,
                name: newData,
                completed: false,
                createdAt: Date.now()
            };

            $scope.datas.push(_newData);

            // input form clear
            $scope.newSampleData = "";
        }
    });

    app.directive('sampleTitle', function () {
        return {
            template: 'sample title'
        }
    });

})();


