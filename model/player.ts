import {CheckIn} from './CheckIn';

class PlayerData{
    UID:string = '';
	nickName : string = 'no name';
	HP:number = 100;
	SAN:number = 100;
    CheckIns : Array<CheckIn> = new Array<CheckIn>();
}

class Player extends PlayerData
{
    public constructor(UID?:string,nickName?:string,HP?:number,SAN?:number){
        super();
        if(UID){
            this.UID = UID;
        }

        if(nickName){
            this.nickName = nickName;
        }

        if(HP){
            this.HP = HP;
        }

        if(SAN){
            this.SAN = SAN;
        }
    }
}

function GetPlayer():PlayerData {
    let player = new Player("");
    return player;
}

export{
    Player,
    GetPlayer
}