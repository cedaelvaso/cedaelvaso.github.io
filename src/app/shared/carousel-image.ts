export class CarouselImage {

  imageURL: string;
  captionTitle: string;
  captionSubTitle: string;
  date: Date;

  constructor(imageURL: string, captionTitle: string, captionSubTitle?: string, date?: Date) {
    this.imageURL = imageURL;
    this.captionTitle = captionTitle;
    this.captionSubTitle = captionSubTitle;
    this.date = date;
  }
}
