import {utils} from "protractor";
/**
 * Created by garciparedes on 10/08/2017.
 */

export class Link {

  url: String;
  hint: String;
  iconId: String;

  constructor(url: String, hint: String = '', iconId: String = '') {
    this.url = url;
    this.hint = hint;
    this.iconId = iconId;
  }

}
