import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { Grafico01Component } from "./grafico01/grafico01.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "grafico", component: Grafico01Component },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "", redirectTo: "heroes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
