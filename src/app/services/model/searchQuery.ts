export class SearchQuery {
    public scrolling: boolean;
    constructor(public query: string, public label: string, public year: string, public offset: number) {
        if(!this.query) this.query = '';        
        if(!this.label) this.label = '';        
    }
    isValid() {
        return this.query.trim().length > 0 || this.label.trim().length > 0;
    }
}