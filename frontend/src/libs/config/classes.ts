export class FilterQuery implements IFilterQuery {
  contains: string;

  init(searchedString: string) {
    this.contains = searchedString;
  }
}
export class FilterParams<T> implements IFilterParams {
  where: string;
  sort: string;

  init(apiFilterQuery: T, sort: string) {
    const apiFilterQueryString = JSON.stringify(apiFilterQuery);
    this.where = apiFilterQueryString;
    this.sort = sort;
  }

  toString(): string[][] {
    return [
      ["where", this.where],
      ["sort", this.sort],
    ];
  }
}
