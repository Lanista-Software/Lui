export default {
  // props: {
  //   products: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data() {
    return {
      products: [
        {
          title: "Kormoran 2020 Üretim 205/60 R16 96H XL Snow Ko Kış Lastiği",
          img:
            "https://marketplace-single-product-images.oss-eu-central-1.aliyuncs.com/prod/239750/d4ff7eb8-8bc5-4080-9fe8-b4c83adcbf58/626111501_0.jpg",
          quantity: "20",
          type: "Kış",
          attributes: [
            {
              attributeId: 356,
              attributeName: "Taban Genişliği",
              attributeValue: "205 mm",
              attributeValueId: 7890
            },
            {
              attributeId: 355,
              attributeName: "Mevsim",
              attributeValue: "Kış",
              attributeValueId: 7880
            },
            {
              attributeId: 353,
              attributeName: "Kesit Oranı",
              attributeValue: "60",
              attributeValueId: 7866
            },
            {
              attributeId: 351,
              attributeName: "Jant Çapı",
              attributeValue: "16",
              attributeValueId: 7222
            },
            {
              attributeId: 369,
              attributeName: "Yıl",
              attributeValue: "2020",
              attributeValueId: 18713
            },
            {
              attributeId: 539,
              attributeName: "Yakıt Verimliliği",
              attributeValue: "E",
              attributeValueId: 25234
            },
            {
              attributeId: 538,
              attributeName: "Islak Zeminde Frenleme",
              attributeValue: "C",
              attributeValueId: 25222
            },
            {
              attributeId: 566,
              attributeName: "Popüler Ebatlar",
              attributeValue: "205/60/R16",
              attributeValueId: 165139
            }
          ],
          brand: "Kormoran",
          id: 63273807
        },
        {
          title: "Kormoran 2020 Üretim 205/60 R16 96H XL Snow Ko Kış Lastiği",
          img:
            "https://marketplace-single-product-images.oss-eu-central-1.aliyuncs.com/prod/239750/d4ff7eb8-8bc5-4080-9fe8-b4c83adcbf58/626111501_0.jpg",
          quantity: "20",
          type: "Yaz",
          attributes: [
            {
              attributeId: 356,
              attributeName: "Taban Genişliği",
              attributeValue: "205 mm",
              attributeValueId: 7890
            },
            {
              attributeId: 355,
              attributeName: "Mevsim",
              attributeValue: "Kış",
              attributeValueId: 7880
            },
            {
              attributeId: 353,
              attributeName: "Kesit Oranı",
              attributeValue: "80",
              attributeValueId: 7866
            },
            {
              attributeId: 351,
              attributeName: "Jant Çapı",
              attributeValue: "20",
              attributeValueId: 7222
            },
            {
              attributeId: 369,
              attributeName: "Yıl",
              attributeValue: "2019",
              attributeValueId: 18713
            },
            {
              attributeId: 539,
              attributeName: "Yakıt Verimliliği",
              attributeValue: "E",
              attributeValueId: 25234
            },
            {
              attributeId: 538,
              attributeName: "Islak Zeminde Frenleme",
              attributeValue: "C",
              attributeValueId: 25222
            },
            {
              attributeId: 566,
              attributeName: "Popüler Ebatlar",
              attributeValue: "205/60/R16",
              attributeValueId: 165139
            }
          ],
          brand: "Nokian",
          id: 57640480
        }
      ],
      fit: false,
      form: {
        brand: null,
        season: null,
        baseWidth: null,
        sectionRatio: null,
        wheelDiameter: null,
        year: null
      }
    };
  },
  computed: {
    filterData() {
      // const fil = []
      const brands = [{ value: "Marka", key: null }];
      const attributes = {
        seasons: [{ value: "Mevsim", key: null }],
        baseWidth: [{ value: "Taban Genişliği", key: null, name: null }],
        sectionRatio: [{ value: "Kesit Oranı", key: null, name: null }],
        wheelDiameter: [{ value: "Jant Çapı", key: null, name: null }],
        years: [{ value: "Yıl", key: null }]
      };
      function check(array, search) {
        const value = "value";
        return array.some(object => object[value] === search);
      }
      this.products.map(element => {
        if (!check(brands, element.brand)) {
          brands.push({
            value: element.brand,
            key: element.brand
          });
        }
        element.attributes.map(attr => {
          if (attr.attributeId === 355) {
            if (!check(attributes.seasons, attr.attributeValue)) {
              attributes.seasons.push({
                value: attr.attributeValue,
                key: [
                  [attr.attributeValueId],
                  [attr.attributeId],
                  [attr.attributeValue]
                ],
                name: attr.attributeName
              });
            }
          }
          if (attr.attributeId === 356) {
            if (!check(attributes.baseWidth, attr.attributeValue)) {
              attributes.baseWidth.push({
                value: attr.attributeValue,
                key: [
                  [attr.attributeValueId],
                  [attr.attributeId],
                  [attr.attributeValue]
                ],
                name: attr.attributeName
              });
            }
          }
          if (attr.attributeId === 353) {
            if (!check(attributes.sectionRatio, attr.attributeValue)) {
              attributes.sectionRatio.push({
                value: attr.attributeValue,
                key: [
                  [attr.attributeValueId],
                  [attr.attributeId],
                  [attr.attributeValue]
                ],
                name: attr.attributeName
              });
            }
          }
          if (attr.attributeId === 351) {
            if (!check(attributes.wheelDiameter, attr.attributeValue)) {
              attributes.wheelDiameter.push({
                value: attr.attributeValue,
                key: [
                  [attr.attributeValueId],
                  [attr.attributeId],
                  [attr.attributeValue]
                ],
                name: attr.attributeName
              });
            }
          }
          if (attr.attributeId === 369) {
            if (!check(attributes.years, attr.attributeValue)) {
              attributes.years.push({
                value: attr.attributeValue,
                key: [
                  [attr.attributeValueId],
                  [attr.attributeId],
                  [attr.attributeValue]
                ],
                name: attr.attributeName
              });
            }
          }
        });
      });
      return { brands, attributes };
    }
  },
  methods: {
    filter() {
      this.$emit("form", this.form);
      this.fit = true;
    }
  }
};
