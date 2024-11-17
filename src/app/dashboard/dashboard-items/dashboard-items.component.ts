import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-items',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-items.component.html',
  styleUrl: './dashboard-items.component.css'
})
export class DashboardItemsComponent {
  @Input() image?:{ src: string; alt: string; } 
  @Input() title?:string

}
