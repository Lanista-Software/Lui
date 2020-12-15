import ServicehoverCard from "../../components/Cards/ServicehoverCard";

export default {
  title: "Cards/ServicehoverCard",
  component: { ServicehoverCard }
};

export const Servicehover_Card = () => ({
  components: { ServicehoverCard },
  template: `<ServicehoverCard title="Rot Balans hizmeti">
  Şubemizde uzman kadro ile kaliteli hizmet
  sizleri bekliyor.
  </ServicehoverCard>`
});
