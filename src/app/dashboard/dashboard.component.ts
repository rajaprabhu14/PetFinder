import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: "dashboard",
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: "./dashboard.component.html"
})
    
export class DashboardComponent {
}