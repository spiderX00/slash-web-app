import { Injectable } from "@angular/core";
import { Tournament } from "../tournament/tournament.interface";

@Injectable({
    providedIn: 'root'
})
export class UrlGenerator {
    private event!: Partial<Tournament>;

    private readonly baseUrl: string = 'https://www.start.gg';
    private readonly defaultAvatarUrl: string = '/assets/img/author.jpg';
    private readonly defaultCoverUrl: string = '/assets/img/slider-bg-1.jpg';

    public generateUrl(event: Partial<Tournament>): void {
        this.event = event;
    }

    public get webPage(): string | null {
        return this.event?.slug ? `${this.baseUrl}/${this.event.slug}` : null;
    }

    public get register(): string | null {
        return this.webPage ? `${this.webPage}/register` : null;
    }

    public get avatar(): string {
        return this.event?.images?.[0]?.url || this.defaultAvatarUrl;
    }

    public get cover(): string {
        return this.event?.images?.[1]?.url || this.defaultCoverUrl;
    }
}
