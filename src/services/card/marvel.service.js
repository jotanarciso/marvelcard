import { BaseService } from "../base.service";
export class MarvelService extends BaseService {
  constructor() {
    super("marvelAPI");
  }

  get(url, nameToSearch, limit, offset) {
    return super.get(url, {
      params: {
        ...(nameToSearch ? { name: nameToSearch } : {
          limit: limit ? limit : "6",
          offset: offset ? offset : "0",
        }),
      },
    });
  }
}
