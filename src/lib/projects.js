import { getCollection } from "astro:content";
import { projectOrder, featuredOrder } from "../data/projectOrder.js";

async function inOrder(order) {
  const all = await getCollection("projects");
  return order
    .map((id) => all.find((project) => project.id === id))
    .filter((project) => project !== undefined);
}

export const getAllProjects = () => inOrder(projectOrder);
export const getFeaturedProjects = () => inOrder(featuredOrder);