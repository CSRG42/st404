var LS = LS || {};

// Making it a thenable so it can be made into a full fledged Promise later
LS._readyCallbacks = [];
LS.ready = {
    then: function (callback) {
        LS._readyCallbacks.push(callback);
    },
};
