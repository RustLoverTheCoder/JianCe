import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

export const useProductDetails = routeLoader$(async (requestEvent) => {
  const param = requestEvent.params;
  return param.id;
});

export default component$(() => {
  const detail = useProductDetails();
  return (
    <>
      <div>{detail.value}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
