import {Link} from "./link";

/**
 * Created by garciparedes on 10/08/2017.
 */

export class Member {
  name: String;
  profileImageURL: String;
  linkList: Array<Link>;
  defaultLinkHint: String;

  constructor(name: String, imageURL?: String, linkList: Array<Link> = [], defaultLinkHint?: String) {
    this.name = name;
    this.profileImageURL = imageURL;
    this.linkList = linkList.sort((a, b) =>
      a.hint.toLowerCase().localeCompare(b.hint.toLowerCase()));
    this.defaultLinkHint = defaultLinkHint;
  }

  get defaultLink(): Link {
    if (!this.defaultLinkHint) {
      return this.linkList[0];
    } else {
      return this.linkList.find((link) =>
        link.hint.toLowerCase() == this.defaultLinkHint.toLowerCase()
      ) || this.linkList[0];
    }
  }
}
