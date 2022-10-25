import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CustomHeaderBanner extends Component {
  @service router;
  @tracked randomBool;

  constructor() {
    super(...arguments);
    this.getRandomBool();
    this.router.on("routeDidChange", this, this.getRandomBool);
  }

  getRandomBool() {
    this.randomBool = Math.round(1 * Math.random());
  }

  get imgUrl() {
    if (this.randomBool === 1) {
      return settings.image_1;
    } else {
      return settings.image_2;
    }
  }

  get linkUrl() {
    if (this.randomBool === 1) {
      return settings.url_1;
    } else {
      return settings.url_2;
    }
  }
}
