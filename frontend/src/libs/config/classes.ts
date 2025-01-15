export class FilterObj implements IFilterObj {
  first_name: IFilterObjBody;
  phone: IFilterObjBody;

  create(searchedString: string) {
    const filterObjBody: IFilterObjBody = { contains: searchedString };
    if (+searchedString) {
      this.phone = filterObjBody;
    } else {
      this.first_name = filterObjBody;
    }
  }
}

export class FilterParams implements IFilterParams {
  where: string;
  sort: string;

  create(searchedString: string, sort: string) {
    const filterObj = new FilterObj();
    filterObj.create(searchedString);
    const filterObjString = JSON.stringify(filterObj);
    this.where = filterObjString;
    this.sort = sort;
  }

  toString(): string[][] {
    return [
      ["where", this.where],
      ["sort", this.sort],
    ];
  }
}
