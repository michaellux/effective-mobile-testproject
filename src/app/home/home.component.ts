import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
export interface Task {
  id: number;
  name: string;
  deadline: string;
  priority: string;
  status: string;
  executor: string;
}

const TASK_DATA : Task[] = [
  { id: 1, name: 'Task 1', deadline: '01/01/2025', priority: 'High', status: 'Pending', executor: 'John', },
  { id: 2, name: 'Task 2', deadline: '01/01/2026', priority: 'Low', status: 'Done', executor: 'Will' },
  { id: 3, name: 'Task 3', deadline: '01/01/2027', priority: 'Medium', status: 'Started', executor: 'Peter' },
  { id: 4, name: 'Task 4', deadline: '01/01/2028', priority: 'High', status: 'Done', executor: 'Nick' },
  { id: 5, name: 'Task 5', deadline: '01/01/2029', priority: 'Low', status: 'Pending', executor: 'Harry' },
]

@Component({
  selector: 'tasktracker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatTableModule]
})
export class HomeComponent {
  displayedColumns: string[] = ['name', 'deadline', 'priority','status', 'executor'];
  dataSource = TASK_DATA;
}
