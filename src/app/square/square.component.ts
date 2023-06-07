import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GridManager } from '../services/grid-manager.service';
import { GridComponent } from '../grid/grid.component';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent{
  @Input() index!:number;
  @Input() state!: null | 'x' | 'o';

  constructor(private gridMan:GridManager,
    private Grid:GridComponent,
    private router:Router){
  }

  play(){
    if(this.gridMan.play(this.index)){
      this.gridMan.reset();
      this.Grid.ngOnInit();
      this.router.navigateByUrl("/game");
    }
    this.Grid.stateList[this.index] = this.gridMan.getSquare(this.index);
    this.state = this.Grid.stateList[this.index];
  }
}
