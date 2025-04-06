//사용자 조회 api get 예시
interface UserProfilePropTypes {
  nickname: string;
  profileImage: string;
}

export const USER_PROFILE: UserProfilePropTypes = {
  nickname: "콩콩",
  profileImage:
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3v1Ml%2FbtsLIeLDyWf%2FTXKkhRXKirJsqdHNoK9A5K%2Fimg.jpg",
};

//반려 동물 조회 api get 예시

interface Disease {
  id: number;
  name: string;
}

interface Symptom {
  id: number;
  name: string;
}

interface PetProfilePropTypes {
  petId: number;
  petImage: string;
  petName: string;
  petAge: number;
  petGender: "M" | "F";
  breedId: number;
  breed: string;
  animalId: number;
  animal: string;
  diseases: Disease[];
  symptoms: Symptom[];
}

export const PET_PROFILE: PetProfilePropTypes = {
  petId: 1,
  petImage: "url",
  petName: "펫이름",
  petAge: 16,
  petGender: "F",
  breedId: 1,
  breed: "포메라니안",
  animalId: 1,
  animal: "강아지",
  diseases: [
    { id: 1, name: "질병1" },
    { id: 2, name: "질병2" },
    { id: 3, name: "질병3" },
  ],
  symptoms: [
    { id: 1, name: "증상1" },
    { id: 2, name: "증상2" },
  ],
};
