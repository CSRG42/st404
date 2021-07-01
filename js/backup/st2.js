var LS = LS || {};
LS.store = {
    id: 1617853,
    url: "montinkshop.lojavirtualnuvem.com.br",
    custom_url: "shop.montink.com",
};
LS.cart = {
    id: 437829996,
    subtotal: 0,
    has_non_shippable_products: false,
    has_shippable_products: false,
    items: [],
};
LS.lang = "pt_BR";
LS.langCode = "pt";
LS.currency = {
    code: "BRL",
    display_short: "R\x24",
    display_long: "R\x24",
    cents_separator: ",",
    thousands_separator: ".",
};
LS.country = "BR";
LS.customer = null;
LS.template = "home";
LS.theme = {
    code: "amazonas",
    name: "Amazonas",
};

LS.socialScripts = [];
LS.DOMReady = function (fn) {
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fn);
    } else {
        document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "interactive") fn();
        });
    }
};

// Making it a thenable so it can be made into a full fledged Promise later
LS._readyCallbacks = [];
LS.ready = {
    then: function (callback) {
        LS._readyCallbacks.push(callback);
    },
};
