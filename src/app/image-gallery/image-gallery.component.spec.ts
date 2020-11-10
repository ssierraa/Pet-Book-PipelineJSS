import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterimagesPipeMock } from 'testing/mocks/filterimage.pipeMock';
import { ImageServiceMock } from 'testing/mocks/image.serviceMock';
import { ImageService } from '../image.service';
import * as DUMMIES from './../../../testing/dummies/items';
import { GalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent, FilterimagesPipeMock ],
      providers: [{ provide: ImageService, useClass: ImageServiceMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create gallery', () => {
    expect(component).toBeTruthy();
  });

  it('should create gallery', () => {
    component.ngOnChanges();
    expect(component.allImages).toEqual(DUMMIES.ALL_TEMS);
  });
});
