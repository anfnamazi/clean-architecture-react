export const serverUrl = "http://localhost:1337";

export const contactUrl = `${serverUrl}/passenger`;

interface IRoutes {
  root: IRoute;
  details: IRoute;
}

export const routes: IRoutes = {
  root: { path: "/" },
  details: {
    path: "/details",
    url(id: number) {
      return `${this.path}/${id}`;
    },
  },
};

export const personImgPath = "/images/person.png";
