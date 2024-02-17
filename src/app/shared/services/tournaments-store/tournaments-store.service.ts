import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ComponentStore,
  OnStoreInit,
  tapResponse
} from "@ngrx/component-store";
import { Observable, map, switchMap, withLatestFrom } from "rxjs";
import { Tournament } from "../tournament/tournament.interface";
import { TournamentService } from "../tournament/tournament.service";
import { TournamentsState, initialState } from "./tournaments-state";

@Injectable({
  providedIn: 'root'
})
export class TournamentStoreService extends ComponentStore<TournamentsState> implements OnStoreInit {

  private readonly increaseCurrentPageIndex = this.updater(
    (state: TournamentsState, currentPage: number) => ({
      ...state,
      currentPage
    })
  )

  private readonly updateNodes = this.updater(
    (state: TournamentsState, nodes: Array<Tournament>) => ({
      ...state,
      nodes
    })
  )

  private readonly selectNodes = (state: TournamentsState) => state.nodes as Array<Tournament>;

  constructor(private readonly tournamentService: TournamentService) {
    super(initialState);
  }

  public readonly nodes$: Observable<Array<Tournament>> = this.select(this.selectNodes);

  ngrxOnStoreInit() {
    this.loadPage();
  }

  public readonly loadPage = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      withLatestFrom(this.select((state) => state)),
      map(([, state]) => state),
      switchMap(({ currentPage, nodes }) =>
        this.tournamentService.getByCountryCode({ page: currentPage }).pipe(
          tapResponse(
            (response: any) => {
              this.increaseCurrentPageIndex(currentPage + 1);
              this.updateNodes([...nodes, ...response.data?.tournaments.nodes || []]);
            }, (error: HttpErrorResponse) => console.error(error),
          )
        )
      )
    );
  });
}

