import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('getImages', () => {
    it('should return all images', () => {
      expect(service.getImages().length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('should return an image if the id exists', () => {
      expect(service.getImage(4).brand).toBe('gato');
    });

    it('should return undefined when the id does not exist', () => {
      expect(service.getImage(-1)).toBeUndefined;
    });
  });
});
