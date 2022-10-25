import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class customHeaderBanner extends Component {
  @service router;
  @tracked randomBool;

  getRandomBool() {
    this.randomBool = Math.round(1 * Math.random());
  }

  constructor() {
    super(...arguments);
    this.getRandomBool();
    this.router.on("routeDidChange", this, this.getRandomBool);
  }

  get imgUrl() {
    if (this.randomBool === 1) {
      return "https://placekitten.com/200/300";
    } else {
      return "https://placekitten.com/400/400";
    }
  }

  get linkUrl() {
    if (this.randomBool === 1) {
      return "https://google.com";
    } else {
      return "https://bing.com";
    }
  }
}
