import {Link} from "./link";
/**
 * Created by garciparedes on 10/08/2017.
 */

export class Member {
  name: String;
  linkList: Array<Link>;

  constructor(name: String, linkList: Array<Link> = []) {
    this.name = name;
    this.linkList = linkList;
  }
}
