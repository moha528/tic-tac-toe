import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { GridComponent } from "./grid/grid.component";

const routes : Routes = [
    {path: '', redirectTo: "game",pathMatch:"prefix"},
    {path: 'game', component: GridComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}