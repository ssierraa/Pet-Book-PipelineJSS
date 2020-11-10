import * as DUMMIES from './../../testing/dummies/items';
  export class ImageServiceMock {    
       
    
    getImages() {    
        return DUMMIES.ALL_TEMS;   
    }    
    
    getImage(id: number) {    
        return DUMMIES.ALL_TEMS[0];    
    }    
}    