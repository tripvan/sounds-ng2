export class Artist {
    public ImageUrl: string;
    constructor(public Id: string, public Name: string, public bio: string, public Images: Array<any>) {
        this.ImageUrl = this.getImageUrl();
    }
    getImageUrl() {
        let imageUrl = '';
        let currentHeight = 0;
        if(!!this.Images && this.Images.length > 0) {
            // let filteredImages = this.Images.filter(image => {
            //     // if(image.height > currentHeight && image.height - 160 )
            //     return image.width < 700;
            // });
            // return filteredImages[0].url;
            return this.Images[0].url;
        }
        return '';
    }
}