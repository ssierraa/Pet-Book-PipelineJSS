import { FilterimagesPipe } from './filterimages.pipe';
import * as DUMMIES from './../../testing/dummies/items';
import { GalleryComponent } from './image-gallery/image-gallery.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';
import { ImageServiceMock } from 'testing/mocks/image.serviceMock';

describe('FilterimagesPipe', () => {
  const ITEMS = DUMMIES.ALL_TEMS;
  let filterPipe: FilterimagesPipe;

  beforeEach(()=>{
    filterPipe = new FilterimagesPipe();
  });
  it('create an instance', () => {
    expect(filterPipe).toBeTruthy();
  });

  it('create an instance', () => {
    expect(filterPipe.transform(ITEMS, 'all')).toEqual(ITEMS);
  });

  it('create an instance', () => {
    expect(filterPipe.transform(ITEMS, 'perro')).toEqual(DUMMIES.DOG_TEMS);
  });
});
