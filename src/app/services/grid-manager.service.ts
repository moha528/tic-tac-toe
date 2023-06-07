import { Injectable } from "@angular/core";
import { SquareComponent } from "../square/square.component";

@Injectable({
    providedIn: 'root'
})
export class GridManager {

    private data: number[] = [  0,0,0,
                                0,0,0,
                                0,0,0   ];
    private player: "x" | "o" = Math.round(Math.random()) == 0 ? 'o' : 'x';

    public reset():void{
        this.data = [   0,0,0,
                        0,0,0,
                        0,0,0   ];
                        this.setPlayer(Math.round(Math.random()) == 0 ? 'o' : 'x');
    }
                                
    public getGrid():number[]{
        return this.data;
    }

    public setSquare(index:number,value : "o" | "x"):void{
        this.data[index] = (value == "o") ? 1 : 2 ;
    }

    public getSquare(index:number): "o" | "x" | null{
        if (this.data[index] == 1) return 'o';
        if (this.data[index] == 2) return 'x';
        return null;
    }

    public getPlayer():'o'|'x'{
        return this.player;
    }
    
    public setPlayer(value: 'o'|'x' ):void{
        this.player = value;
    }

    public isGridFull():boolean{
        return this.data.every((value) => value != 0);
    }

    public play(index:number):boolean{
        let result:boolean = false;
        if(this.getSquare(index) !== null) return false;
        this.setSquare(index,this.getPlayer());
        const test:Array<any> = this.checkGameOver();
        if(test[0]){
            if(test[1] == "draw") alert("draw");
            else alert(test[1] + " won");
            result = true;
        }
        this.setPlayer((this.getPlayer() == "o") ? "x" : "o");
        return result;
    }

    public checkGameOver():Array<any>{
        /*
        --columns
        036
        147
        258
        --columns
        */
       if(  ((this.getSquare(0) == this.getSquare(3) && this.getSquare(3) == this.getSquare(6)) && this.getSquare(0) != null) ||
            ((this.getSquare(1) == this.getSquare(4) && this.getSquare(4) == this.getSquare(7)) && this.getSquare(1) != null) ||
            ((this.getSquare(2) == this.getSquare(5) && this.getSquare(5) == this.getSquare(8)) && this.getSquare(2) != null)
       ){
        return [true,this.getPlayer()];
       }
        /*
        --rows
        012
        345
        678
        --rows
        */
        if( ((this.getSquare(0) == this.getSquare(1) && this.getSquare(1) == this.getSquare(2)) && this.getSquare(0) != null) ||
            ((this.getSquare(3) == this.getSquare(4) && this.getSquare(4) == this.getSquare(5)) && this.getSquare(3) != null) ||
            ((this.getSquare(6) == this.getSquare(7) && this.getSquare(7) == this.getSquare(8)) && this.getSquare(6) != null)
        ){
            return [true,this.getPlayer()];
        }
        /*
        --diagonals
        048
        246
        --diagonals
        */
        if( ((this.getSquare(0) == this.getSquare(4) && this.getSquare(4) == this.getSquare(8)) && this.getSquare(0) != null) ||
            ((this.getSquare(2) == this.getSquare(4) && this.getSquare(4) == this.getSquare(6)) && this.getSquare(2) != null)
        ){
            return [true,this.getPlayer()];
        }

        //check draw
        if(this.isGridFull()){
            return [true,"draw"];
        }
        return [false];
    }

}