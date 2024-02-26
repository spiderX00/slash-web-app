import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EventComponent } from '../../shared/components/event/event.component';
import { TournamentStoreService } from '../../shared/services/tournaments-store/tournaments-store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideComponentStore(TournamentStoreService),
  ],
  imports: [
    CommonModule,
    EventComponent,
    InfiniteScrollModule,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private tournamentsStore = inject(TournamentStoreService);

  public lazyScrollLoading() {
    this.tournamentsStore.loadPage();
  }

  public readonly nodes$ = this.tournamentsStore.nodes$;
  public readonly scrollThrottleMs = 500;

}
