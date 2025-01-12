export const localUrl = "http://localhost:1337";

export const contactUrl = `${localUrl}/passenger`;

interface IRoutes {
  root: IRoute;
  details: IRoute;
}

export const routes: IRoutes = {
  root: { path: "/" },
  details: {
    path: "/details",
    url: function (id: number) {
      return `${this.path}/${id}`;
    },
  },
};
