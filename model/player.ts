import {CheckIn} from './CheckIn';

class Player
{
    private UID:string;
	private nickName : string;
	private HP:number;
	private SAN:number;
    private CheckIns : [CheckIn];

    public constructor(UID:string){
        this.UID = UID;
        this.HP = 100;
        this.SAN = 100;
        
    }
}

export{
    Player
}