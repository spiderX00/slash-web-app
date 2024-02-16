import { gql } from 'apollo-angular';

export const ALL_EVENTS_BY_COUNTRY = gql`
query TournamentsByCountry($cCode: String!, $perPage: Int!, $page: Int!) {
  tournaments(query: {perPage: $perPage, page: $page, filter: {countryCode: $cCode}}) {
    nodes {
      id
      slug
      name
      countryCode
      venueAddress
      venueName
      numAttendees
      startAt
      images {
        url
      }
    }
  }
}`;

export const ALL_EVENTS_BY_VIDEOGAME = gql`
query TournamentsByVideogame($perPage: Int!, $videogameId: ID!) {
  tournaments(
    query: {perPage: $perPage, page: 1, sortBy: "tournament.startAt asc", filter: {past: false, videogameIds: [$videogameId]}}
  ) {
    nodes {
      id
      name
      slug
    }
  }
}`;