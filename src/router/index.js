import { createWebHistory, createRouter } from "vue-router";
import promedio from "@/views/promedioNotas.vue";
import registro from "@/views/registro.vue";

const routes = [
  {
    path: "/",
    redirect:{path:"/promedioNotas"},
    name: "inicio",
    component: promedio,
  },
  {
    path: "/promedioNotas",
    name: "promedio",
    component: promedio,
  },
    {
    path: "/registro",
    name: "registro",
    component: registro,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;