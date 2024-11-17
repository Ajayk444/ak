import { Component } from '@angular/core';
import { DashboardItemsComponent } from "../dashboard-items/dashboard-items.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemsComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'online';
 

}
