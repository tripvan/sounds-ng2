export class ArtistSearchQuery {
    constructor(public id: string, public offset: number, public sortOrder: number = 1, public sortDirection: number) { }
    public scrolling: boolean;
}