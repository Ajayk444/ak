import { Component } from '@angular/core';
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { DashboardItemsComponent } from "./dashboard/dashboard-items/dashboard-items.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponentComponent, ServerStatusComponent, TicketsComponent, TrafficComponent, DashboardItemsComponent],
})
export class AppComponent {
}
