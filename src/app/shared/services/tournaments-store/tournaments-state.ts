import { Tournament } from "../tournament/tournament.interface";

export interface TournamentsState {
    nodes: Array<Tournament>;
    currentPage: number;
}

export const initialState: TournamentsState = {
    nodes: [],
    currentPage: 1
}