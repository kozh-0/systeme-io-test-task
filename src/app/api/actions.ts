import { pages } from "./pages/data";
import { pricePlans } from "./price-plans/data";
import { products } from "./products/data";

type EntityType = "products" | "price-plans" | "pages" | "asd";
type ReturnType<T extends EntityType> = T extends "products"
  ? typeof products
  : T extends "price-plans"
  ? typeof pricePlans
  : T extends "pages"
  ? typeof pages
  : unknown;

export const getEntity = async <T extends EntityType>(str: T): Promise<ReturnType<T>> => {
  "use server";
  return new Promise((res, rej) => {
    switch (str) {
      case "products":
        res(products as ReturnType<T>);
      case "price-plans":
        res(pricePlans as ReturnType<T>);
      case "pages":
        res(products as ReturnType<T>);

      default:
        res([] as ReturnType<T>);
    }
  });
};
