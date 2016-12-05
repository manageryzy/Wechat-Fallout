"use strict";
var Player = (function () {
    function Player(UID) {
        this.UID = UID;
        this.HP = 100;
        this.SAN = 100;
    }
    return Player;
}());
exports.Player = Player;
