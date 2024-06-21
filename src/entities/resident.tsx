interface IResident {
  id?: number;
  name: string;
  firstName: string;
  lastName: string;
  preferredName?: string;
  status: string;
  room: string;
  levelOfCare: string;
  ambulation: string;
  birthDate: string;
  moveInDate: string;
  createdAt?: string;
  updatedAt?: string;
  applicantId?: number;
  attendance?: [];
}

export class Resident implements IResident {
  constructor(
    public name: string,
    public firstName: string,
    public lastName: string,
    public preferredName: string,
    public status: string,
    public room: string,
    public levelOfCare: string,
    public ambulation: string,
    public birthDate: string,
    public moveInDate: string,
    public id?: number,
    public createdAt?: string,
    public updatedAt?: string,
    public applicantId?: number,
    public attendance?: []
  ) {}
}

// [
//   {
//       "id": 1,
//       "name": "Jeff Winger",
//       "firstName": "Jeff",
//       "lastName": "Winger",
//       "preferredName": "Jeff",
//       "status": "HERE",
//       "room": "204",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "CANE",
//       "birthDate": "1974-11-20T07:00:00.000Z",
//       "moveInDate": "2009-09-17T07:00:00.000Z",
//       "createdAt": "2009-09-17T07:00:00.000Z",
//       "updatedAt": "2009-09-17T07:00:00.000Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 2,
//       "name": "Britta Perry",
//       "firstName": "Britta",
//       "lastName": "Perry",
//       "preferredName": null,
//       "status": "HERE",
//       "room": "3030-B",
//       "levelOfCare": "MEMORY",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1982-10-19T07:00:00.000Z",
//       "moveInDate": "2009-09-17T07:00:00.000Z",
//       "createdAt": "2009-09-17T01:41:50.000Z",
//       "updatedAt": "2009-09-17T01:41:51.000Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 3,
//       "name": "Abed Nadir",
//       "firstName": "Abed",
//       "lastName": "Nadir",
//       "preferredName": null,
//       "status": "HERE",
//       "room": "303",
//       "levelOfCare": "MEMORY",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1989-03-10T07:00:00.000Z",
//       "moveInDate": "2009-09-17T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:27:22.209Z",
//       "updatedAt": "2024-06-07T13:27:22.209Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 4,
//       "name": "Shirley Bennett",
//       "firstName": "Shirley",
//       "lastName": "Bennett",
//       "preferredName": null,
//       "status": "HERE",
//       "room": "404",
//       "levelOfCare": "ASSISTED",
//       "ambulation": "WALKER",
//       "birthDate": "1971-08-12T07:00:00.000Z",
//       "moveInDate": "2009-09-17T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:28:28.247Z",
//       "updatedAt": "2024-06-07T13:28:28.247Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 5,
//       "name": "Annie Edison",
//       "firstName": "Anne",
//       "lastName": "Edison",
//       "preferredName": "Annie",
//       "status": "HERE",
//       "room": "202",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "CANE",
//       "birthDate": "1990-12-19T07:00:00.000Z",
//       "moveInDate": "2009-09-17T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:28:40.358Z",
//       "updatedAt": "2024-06-07T13:28:40.358Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 6,
//       "name": "Troy Barnes",
//       "firstName": "Troy",
//       "lastName": "Barnes",
//       "preferredName": null,
//       "status": "LOA",
//       "room": "303",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1989-12-04T07:00:00.000Z",
//       "moveInDate": "2009-09-17T02:00:00.000Z",
//       "createdAt": "2024-06-07T13:28:54.374Z",
//       "updatedAt": "2024-06-07T13:28:54.374Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 7,
//       "name": "Pierce Hawthorne",
//       "firstName": "Piercinald",
//       "lastName": "Hawthorne",
//       "preferredName": "Pierce",
//       "status": "HOSPITAL",
//       "room": "34236",
//       "levelOfCare": "LONGTERM",
//       "ambulation": "WHEELCHAIR",
//       "birthDate": "1944-11-27T07:00:00.000Z",
//       "moveInDate": "2009-09-17T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:29:04.936Z",
//       "updatedAt": "2024-06-07T13:29:04.936Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 8,
//       "name": "Ben Chang",
//       "firstName": "Benjamin Franklin",
//       "lastName": "Chang",
//       "preferredName": "Ben",
//       "status": "ISOLATION",
//       "room": "107",
//       "levelOfCare": "MEMORY",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1969-02-11T07:00:00.000Z",
//       "moveInDate": "2009-09-17T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:29:53.464Z",
//       "updatedAt": "2024-06-07T13:29:53.464Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 9,
//       "name": "Craig Pelton",
//       "firstName": "Craig",
//       "lastName": "Pelton",
//       "preferredName": null,
//       "status": "HERE",
//       "room": "101",
//       "levelOfCare": "ASSISTED",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1973-05-24T11:31:07.000Z",
//       "moveInDate": "2009-09-17T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:30:02.809Z",
//       "updatedAt": "2024-06-07T13:30:02.809Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 10,
//       "name": "Ian Duncan",
//       "firstName": "Ian",
//       "lastName": "Duncan",
//       "preferredName": null,
//       "status": "LOA",
//       "room": "103",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1972-03-08T07:00:00.000Z",
//       "moveInDate": "2009-05-22T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:30:13.430Z",
//       "updatedAt": "2024-06-07T13:30:13.430Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 11,
//       "name": "Alex Osborne",
//       "firstName": "Alexander",
//       "lastName": "Osborne",
//       "preferredName": "Alex",
//       "status": "ISOLATION",
//       "room": "109",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1981-10-12T07:00:00.000Z",
//       "moveInDate": "2009-09-24T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:30:24.525Z",
//       "updatedAt": "2024-06-07T13:30:24.525Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 12,
//       "name": "Garrett Lambert",
//       "firstName": "Garrett",
//       "lastName": "Lambert",
//       "preferredName": null,
//       "status": "HERE",
//       "room": "208",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1990-08-20T07:00:00.000Z",
//       "moveInDate": "2009-10-08T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:30:35.194Z",
//       "updatedAt": "2024-06-07T13:30:35.194Z",
//       "applicantId": null,
//       "attendance": [
//           {
//               "programId": 25,
//               "residentId": 12,
//               "status": "Active"
//           }
//       ]
//   },
//   {
//       "id": 13,
//       "name": "Vicki Koontz",
//       "firstName": "Victoria",
//       "lastName": "Koontz",
//       "preferredName": "Vicki",
//       "status": "HERE",
//       "room": "211",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1990-09-30T07:00:00.000Z",
//       "moveInDate": "2011-02-24T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:30:44.408Z",
//       "updatedAt": "2024-06-07T13:30:44.408Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 14,
//       "name": "Neil Koontz",
//       "firstName": "Neil",
//       "lastName": "Koontz",
//       "preferredName": null,
//       "status": "HERE",
//       "room": "211",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1990-01-11T07:00:00.000Z",
//       "moveInDate": "2011-01-20T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:30:52.765Z",
//       "updatedAt": "2024-06-07T13:30:52.765Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 15,
//       "name": "Leonard Rodriguez",
//       "firstName": "Leonard",
//       "lastName": "Rodriguez",
//       "preferredName": null,
//       "status": "HERE",
//       "room": "222",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1925-06-01T07:00:00.000Z",
//       "moveInDate": "1975-09-18T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:31:03.665Z",
//       "updatedAt": "2024-06-07T13:31:03.665Z",
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 16,
//       "name": "Rich Stephenson",
//       "firstName": "Richard",
//       "lastName": "Stephenson",
//       "preferredName": "Rich",
//       "status": "HERE",
//       "room": "216",
//       "levelOfCare": "INDEPENDENT",
//       "ambulation": "NOLIMITATIONS",
//       "birthDate": "1976-04-27T07:00:00.000Z",
//       "moveInDate": "2010-03-18T07:00:00.000Z",
//       "createdAt": "2024-06-07T13:31:12.546Z",
//       "updatedAt": "2024-06-07T13:31:12.546Z",
//       "applicantId": null,
//       "attendance": []
//   }
// ]
