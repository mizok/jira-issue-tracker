import { Component, OnInit, inject } from '@angular/core';
import { WorkerService } from './service/worker/worker.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jira-rader';
  private workerService = inject(WorkerService);

  ngOnInit(): void {
    this.workerService.init().subscribe(() => {});
  }
}
