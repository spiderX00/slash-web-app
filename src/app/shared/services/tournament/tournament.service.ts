import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ALL_EVENTS_BY_COUNTRY, ALL_EVENTS_BY_VIDEOGAME } from './tournament.gql';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  private readonly DEFAULT_VISUALIZATION: number = 4;
  private readonly PAGE_INDEX: number = 0;
  private readonly DEFAULT_COUNTRY_CODE: string = "IT";

  constructor(private apollo: Apollo) { }

  public getByCountryCode({ perPage = this.DEFAULT_VISUALIZATION, page = this.PAGE_INDEX, cCode = this.DEFAULT_COUNTRY_CODE }: { perPage?: number, page?: number, cCode?: string }) {
    return this.apollo.query({
      query: ALL_EVENTS_BY_COUNTRY, variables: {
        perPage, page, cCode
      }
    });
  }

  public getByVideogame({ perPage = this.DEFAULT_VISUALIZATION, videogameId }: { perPage: number, videogameId: number } ) {
    return this.apollo.query({
      query: ALL_EVENTS_BY_VIDEOGAME, variables: {
        perPage, videogameId
      }
    });
  }
}
