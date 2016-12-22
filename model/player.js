"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PlayerData = (function () {
    function PlayerData() {
        this.UID = '';
        this.nickName = 'no name';
        this.HP = 100;
        this.SAN = 100;
        this.CheckIns = new Array();
    }
    return PlayerData;
}());
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(UID, nickName, HP, SAN) {
        _super.call(this);
        if (UID) {
            this.UID = UID;
        }
        if (nickName) {
            this.nickName = nickName;
        }
        if (HP) {
            this.HP = HP;
        }
        if (SAN) {
            this.SAN = SAN;
        }
    }
    return Player;
}(PlayerData));
exports.Player = Player;
function GetPlayer() {
    var player = new Player("");
    return player;
}
exports.GetPlayer = GetPlayer;
