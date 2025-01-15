interface IFilterObj {
  first_name: IFilterObjBody;
  phone: IFilterObjBody;
}

interface IFilterObjBody {
  contains: string;
}

interface IFilterParams {
  where: string;
  sort: string;
}
