export interface CitiesEntity {
  id : string;
  value : string;
}

export const selectCity = "Select city";

export const cities: CitiesEntity[] = [
  {
    id: selectCity,
    value: selectCity
  },
  {
    id: "Seattle",
    value: "Seattle"
  },
  {
    id: "Burlingame",
    value: "Burlingame"
  },
  {
    id: "California",
    value: "California"
  },
  {
    id: "Arizona",
    value: "Arizona"
  },
  {
    id: "Texas",
    value: "Texas"
  }
];
