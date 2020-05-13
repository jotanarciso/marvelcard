import { BaseService } from "../base.service";
export class MarvelService extends BaseService {
  constructor() {
    super("marvelAPI");
  }

  get(url, limit, offset) {
    return super.get(url, {
      params: {
        limit: limit ? limit : "6",
        offset: offset ? offset : "0",
      },
    });
  }
  getByName(name) {
    return super.get(null, {
      params: {
        name: name,
      },
    });
  }
}
