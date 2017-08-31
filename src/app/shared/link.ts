/**
 * Created by garciparedes on 10/08/2017.
 */

export class Link {

  url: string;
  hint: string;
  iconId: string;

  constructor(url: string, hint: string, iconId?: string) {
    this.url = url;
    this.hint = hint;
    if (!iconId) {
      this.iconId = hint.toLowerCase();
    } else {
      this.iconId = iconId;
    }
  }

}
