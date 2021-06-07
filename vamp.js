
var vamp;
(function (vamp) {
    function getLicense(name) {
        switch (name) {
            case "taptapfun": return true;
        }
    }
    vamp.getLicense = getLicense;
})(vamp || (vamp = {}));