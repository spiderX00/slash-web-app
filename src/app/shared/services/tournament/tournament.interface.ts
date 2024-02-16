export interface Tournament {
    id?: number;
    name?: string;
    slug?: string;
    countryCode?: string;
    venueAddress?: string;
    numAttendees?: number;
    startAt?: Date;
    images?: Array<Image>;
}

export interface Image {
    id: number;
    height: number;
    ratio: number;
    type: string;
    url: string;
    width: number;
}