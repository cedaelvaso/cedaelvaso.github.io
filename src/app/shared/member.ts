import {Link} from "./link";

/**
 * Created by garciparedes on 10/08/2017.
 */

export class Member {
  name: String;
  profileImageURL: String;
  linkList: Array<Link>;

  constructor(name: String, imageURL?: String, linkList: Array<Link> = []) {
    this.name = name;
    this.profileImageURL = imageURL;
    this.linkList = linkList;
  }
}
