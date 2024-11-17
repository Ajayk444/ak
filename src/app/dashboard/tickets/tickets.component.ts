import { Component } from '@angular/core';
import { DashboardItemsComponent } from "../dashboard-items/dashboard-items.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemsComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
}
