export class ArtistSearchQuery {
    constructor(public id: string, public offset: number) { }
    public scrolling: boolean;
}