import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit{
  squareList!:number[];
  public stateList!:Array<null | 'o' | 'x'>;
  ngOnInit(): void {
      this.squareList = [0,1,2,3,4,5,6,7,8];
      this.stateList = [null,null,null,null,null,null,null,null,null];
  }
}
