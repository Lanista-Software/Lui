import CookieInfo from "../components/CookieInfo.vue";
export default {
  title: "Lanista/Info",
  component: CookieInfo
};
export const Cookie_Info = () => ({
  components: { CookieInfo },
  template: `<CookieInfo>
   Sitemizde çerez konumlandırmaktayız, kullanmaya devam ettiğinizde çerezler ile toplanan kişisel verileriniz Veri Politikamız
  Bilgilendirmelerimizde belirtilen amaçlar ve yöntemlerle mevzuatına
  uygun olarak kullanılacaktır. Onaylamak veya reddetmek için falan
  filan.</CookieInfo>`
});
