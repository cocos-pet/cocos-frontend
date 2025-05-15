// 시/도(1차)와 군/구(2차) 계층 구조
export interface District {
    locationId: number;
    locationName: string;
    locationType: "DISTRICT";
  }
  
  export interface City {
    locationId: number;
    locationName: string;
    locationType: "CITY";
    children: District[];
  }
  
  // 예시 데이터
  export const LOCATION_DATA: City[] = [
    {
      locationId: 1,
      locationName: "서울시",
      locationType: "CITY",
      children: [
        { locationId: 101, locationName: "강남구", locationType: "DISTRICT" },
        { locationId: 102, locationName: "서초구", locationType: "DISTRICT" },
        { locationId: 103, locationName: "송파구", locationType: "DISTRICT" },
      ],
    },
    {
      locationId: 2,
      locationName: "경기도",
      locationType: "CITY",
      children: [
        { locationId: 201, locationName: "수원시", locationType: "DISTRICT" },
        { locationId: 202, locationName: "성남시", locationType: "DISTRICT" },
      ],
    },
  ];