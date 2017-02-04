import { Injectable } from '@angular/core';
import { Label } from './model/label';

@Injectable()
export class LabelService {
    getLabels(): Label[] {
        let labels: Label[] = [
            new Label('Ninja Tune'), 
            new Label('Tru Thoughts'), 
            new Label('!K7'), 
            new Label('Warp'), 
            new Label('Kompakt'), 
            new Label('PIAS'), 
            new Label('Erased Tapes'), 
            new Label('Brainfeeder'), 
            new Label('BPitch Control'), 
            new Label('One Little Indian'), 
            new Label('Rough Trade'), 
            new Label('Young Turks'), 
            new Label('Compost'), 
            new Label('4ad'), 
        ];

        return labels;
    }

    getAllLabels() {
        let labels: Label[] = [
            new Label('Ninja Tune'), 
            new Label('Tru Thoughts'), 
            new Label('!K7'), 
            new Label('Warp'), 
            new Label('Kompakt'), 
            new Label('PIAS'), 
            new Label('Erased Tapes'), 
            new Label('Brainfeeder'), 
            new Label('BPitch Control'), 
            new Label('One Little Indian'), 
            new Label('Rough Trade'), 
            new Label('Young Turks'), 
            new Label('Compost'), 
            new Label('Diynamic'), 
            new Label('Big Dada'), 
            new Label('On U'), 
            new Label('Om Records'), 
            new Label('Ariwa'), 
            new Label('Audioporn'), 
            new Label('Beggars banquet'), 
            new Label('Hyperdub'), 
            new Label('Dial'), 
            new Label('Innovative'), 
            new Label('Monkeytown'), 
            new Label('No Format'), 
            new Label('Eskimo'), 
            new Label('Transgressive'), 
            new Label('Parlophone'), 
            new Label('Dfa'), 
            new Label('Get Physical'), 
            new Label('Aus Music'), 
            new Label('Anjunadeep'), 
            new Label('Stones Throw'), 
            new Label('Late Night Tales'), 
            new Label('Black Butter'), 
            new Label('Project Mooncircle'), 
            new Label('Beggars Banquet'), 
        ];

        return labels;
    }
}

// etage noir
// dope noir
// g-stone
// accidental
// mello
// erased tapes
// finders keepers
// planet mu
// playground ?
// soundway
// strut
// world circuit
// friends of friends
// true panther
// ghostly international
// pilot
// gondwana
// f communications
// because music
// ed banger
// goodlooking
// metalheadz
// ram records
// hospital
// counter
// r s
// cooking vinyl
// hotflush
// leaf label
// other people
// matador
// nova records
// circus company
// wagram
// southern fried
// moshi moshi