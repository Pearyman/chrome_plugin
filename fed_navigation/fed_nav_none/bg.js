// 去百度推广广告
var clear_ad = {
    init: function() {
        var self = this;
        self.bindEvent();
        self.removeAd();
    },
    removeAd: function() {
        var ads = document.querySelectorAll('#content_left>div:not([class*="result"]):not([class="leftBlock"])');
        var time = setTimeout(function() {
            var n_ads = document.querySelectorAll('.result').length;
            for (var i = 0; i < ads.length; i++) {

                ads[i].remove();

            }
        }, 2000);

        // document.querySelector('#content_right').style.display = 'none';
    },
    bindEvent: function() {
        var self = this;
        var composeBox = document.querySelector('#wrapper_wrapper');
        var observer = new MutationObserver(function() {

            self.removeAd();

        });
        if (composeBox) {
            observer.observe(composeBox, {
                'childList': true
            });
        }

    }

};
clear_ad.init();
