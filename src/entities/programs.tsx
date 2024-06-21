interface IProgram {
  id?: number;
  parentId?: number;
  name: string;
  location: string;
  allDay: boolean;
  start: string;
  end: string;
  tags: string[];
  createdAt?: string;
  updatedAt?: string;
  dimension: string;
  levelOfCare: string[];
  facilitators: string[];
  hobbies: string[];
  recurrence: {
    type: string;
  };
  isRepeated?: boolean;
  applicantId?: number;
  attendance?: [];
}

export class Program implements IProgram {
  constructor(
    public name: string,
    public location: string,
    public allDay: boolean,
    public start: string,
    public end: string,
    public dimension: string,
    public hobbies: string[],
    public recurrence: {
      type: string;
    },
    public isRepeated: boolean,
    public levelOfCare: string[],
    public facilitators: string[],
    public tags: string[],
    public id?: number,
    public parentId?: number,
    public createdAt?: string,
    public updatedAt?: string,
    public applicantId?: number,
    public attendance?: []
  ) {}
}

// [
//   {
//       "id": 19,
//       "parentId": null,
//       "name": "Debate",
//       "location": "Cafeteria",
//       "allDay": false,
//       "start": "2024-05-31T19:00:00.000Z",
//       "end": "2024-05-31T20:00:00.000Z",
//       "tags": [],
//       "createdAt": "2024-06-07T13:37:52.132Z",
//       "updatedAt": "2024-06-07T13:37:52.132Z",
//       "dimension": "Intellectual",
//       "facilitators": [
//           "Rec Aide"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [
//           "Debate",
//           "Public Speaking"
//       ],
//       "recurrence": {
//           "type": "Weekly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 17,
//       "parentId": null,
//       "name": "Pottery",
//       "location": "Workshop",
//       "allDay": false,
//       "start": "2024-05-30T16:00:00.000Z",
//       "end": "2024-05-30T23:00:00.000Z",
//       "tags": [
//           "special"
//       ],
//       "createdAt": "2024-06-07T13:37:23.712Z",
//       "updatedAt": "2024-06-07T13:37:23.712Z",
//       "dimension": "Intellectual",
//       "facilitators": [
//           "Rec Aide"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [
//           "Crafts",
//           "Pottery"
//       ],
//       "recurrence": {
//           "type": "Weekly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 15,
//       "parentId": null,
//       "name": "Billiards",
//       "location": "Cafeteria",
//       "allDay": false,
//       "start": "2024-05-29T19:00:00.000Z",
//       "end": "2024-05-29T20:00:00.000Z",
//       "tags": [],
//       "createdAt": "2024-06-07T13:36:51.942Z",
//       "updatedAt": "2024-06-07T13:36:51.942Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Rec Aide"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [
//           "Billiards",
//           "Pub Games"
//       ],
//       "recurrence": {
//           "type": "Weekly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 20,
//       "parentId": null,
//       "name": "Paintball Assassin",
//       "location": "Cafeteria",
//       "allDay": false,
//       "start": "2023-06-04T19:00:00.000Z",
//       "end": "2024-05-31T23:00:00.000Z",
//       "tags": [
//           "outing",
//           "special",
//           "vendor"
//       ],
//       "createdAt": "2024-06-07T13:38:13.975Z",
//       "updatedAt": "2024-06-07T13:38:13.975Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Director of Rec"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT"
//       ],
//       "hobbies": [
//           "Paintball"
//       ],
//       "recurrence": {
//           "type": "Yearly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 24,
//       "parentId": 20,
//       "name": "Paintball Assassin",
//       "location": "Parking Lot",
//       "allDay": false,
//       "start": "2024-06-04T19:00:00.000Z",
//       "end": "2024-06-04T23:00:00.000Z",
//       "tags": [
//           "outing",
//           "special",
//           "vendor"
//       ],
//       "createdAt": "2024-06-07T13:39:47.599Z",
//       "updatedAt": "2024-06-07T13:39:47.599Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Director of Rec"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT"
//       ],
//       "hobbies": [
//           "Paintball"
//       ],
//       "recurrence": null,
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 22,
//       "parentId": null,
//       "name": "Pub Night",
//       "location": "The Green Door",
//       "allDay": false,
//       "start": "2024-06-02T19:00:00.000Z",
//       "end": "2024-06-02T20:00:00.000Z",
//       "tags": [
//           "outing"
//       ],
//       "createdAt": "2024-06-07T13:38:42.852Z",
//       "updatedAt": "2024-06-07T13:38:42.852Z",
//       "dimension": "Social",
//       "facilitators": [
//           "Resident"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [
//           "Alcohol"
//       ],
//       "recurrence": null,
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 21,
//       "parentId": null,
//       "name": "Space Simulation",
//       "location": "Parking Lot",
//       "allDay": false,
//       "start": "2024-06-01T19:00:00.000Z",
//       "end": "2024-06-01T20:00:00.000Z",
//       "tags": [
//           "outing",
//           "special",
//           "technology"
//       ],
//       "createdAt": "2024-06-07T13:38:28.794Z",
//       "updatedAt": "2024-06-07T13:38:28.794Z",
//       "dimension": "Intellectual",
//       "facilitators": [
//           "Director of Rec"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED",
//           "MEMORY"
//       ],
//       "hobbies": [
//           "Space",
//           "Learning",
//           "Virtual Reality",
//           "Video Games"
//       ],
//       "recurrence": null,
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 18,
//       "parentId": null,
//       "name": "Sailing",
//       "location": "Parking Lot",
//       "allDay": false,
//       "start": "2024-05-30T16:00:00.000Z",
//       "end": "2024-05-30T23:00:00.000Z",
//       "tags": [
//           "outing",
//           "special"
//       ],
//       "createdAt": "2024-06-07T13:37:37.532Z",
//       "updatedAt": "2024-06-07T13:37:37.532Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Rec Aide"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT"
//       ],
//       "hobbies": [
//           "Boating"
//       ],
//       "recurrence": null,
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 16,
//       "parentId": null,
//       "name": "Family Day",
//       "location": "Cafeteria",
//       "allDay": false,
//       "start": "2024-05-29T16:00:00.000Z",
//       "end": "2024-05-29T23:00:00.000Z",
//       "tags": [],
//       "createdAt": "2024-06-07T13:37:06.461Z",
//       "updatedAt": "2024-06-07T13:37:06.461Z",
//       "dimension": "Community",
//       "facilitators": [
//           "Director of Rec"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [],
//       "recurrence": null,
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 25,
//       "parentId": null,
//       "name": "Foosball",
//       "location": "Cafeteria",
//       "allDay": false,
//       "start": "2024-06-05T19:00:00.000Z",
//       "end": "2024-06-05T20:00:00.000Z",
//       "tags": [],
//       "createdAt": "2024-06-07T13:40:03.059Z",
//       "updatedAt": "2024-06-07T13:40:03.059Z",
//       "dimension": "Social",
//       "facilitators": [
//           "Rec Aide"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [
//           "Pub Games"
//       ],
//       "recurrence": {
//           "type": "Weekly"
//       },
//       "isRepeated": true,
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
//       "id": 14,
//       "parentId": null,
//       "name": "Interpretive Dance",
//       "location": "Auditorium",
//       "allDay": false,
//       "start": "2024-05-29T19:00:00.000Z",
//       "end": "2024-05-29T21:00:00.000Z",
//       "tags": [],
//       "createdAt": "2024-06-07T13:36:29.354Z",
//       "updatedAt": "2024-06-07T13:36:29.354Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Rec Aide"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [
//           "Dance",
//           "Arts"
//       ],
//       "recurrence": null,
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 13,
//       "parentId": null,
//       "name": "Holiday Celebration",
//       "location": "Cafeteria",
//       "allDay": false,
//       "start": "2024-05-28T19:00:00.000Z",
//       "end": "2024-05-28T20:00:00.000Z",
//       "tags": [
//           "special"
//       ],
//       "createdAt": "2024-06-07T13:36:11.306Z",
//       "updatedAt": "2024-06-07T13:36:11.306Z",
//       "dimension": "Community",
//       "facilitators": [
//           "Resident"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED",
//           "MEMORY",
//           "LONGTERM"
//       ],
//       "hobbies": [],
//       "recurrence": null,
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 23,
//       "parentId": null,
//       "name": "Dungeons & Dragons",
//       "location": "Group Study Room F",
//       "allDay": false,
//       "start": "2024-06-03T19:00:00.000Z",
//       "end": "2024-06-03T20:00:00.000Z",
//       "tags": [
//           "special"
//       ],
//       "createdAt": "2024-06-07T13:39:03.805Z",
//       "updatedAt": "2024-06-07T13:39:03.805Z",
//       "dimension": "Social",
//       "facilitators": [
//           "Resident"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [
//           "Role Playing",
//           "Board Games",
//           "Storytelling"
//       ],
//       "recurrence": {
//           "type": "Weekly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 12,
//       "parentId": null,
//       "name": "Debate",
//       "location": "Gymnasium",
//       "allDay": false,
//       "start": "2024-05-28T19:00:00.000Z",
//       "end": "2024-05-28T20:00:00.000Z",
//       "tags": [
//           "outing"
//       ],
//       "createdAt": "2024-06-07T13:35:55.395Z",
//       "updatedAt": "2024-06-07T13:35:55.395Z",
//       "dimension": "Intellectual",
//       "facilitators": [
//           "Rec Aide"
//       ],
//       "levelOfCare": [
//           "INDEPENDENT",
//           "ASSISTED"
//       ],
//       "hobbies": [
//           "Debate",
//           "Public Speaking"
//       ],
//       "recurrence": null,
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 11,
//       "parentId": null,
//       "name": "Series: Hostile Planet",
//       "location": "Theatre P2",
//       "allDay": false,
//       "start": "2024-05-27T19:30:00.000Z",
//       "end": "2024-05-27T20:30:00.000Z",
//       "tags": [
//           "Interest & Education"
//       ],
//       "createdAt": "2024-06-06T22:13:48.952Z",
//       "updatedAt": "2024-06-06T22:13:48.952Z",
//       "dimension": "Socialization",
//       "facilitators": [
//           "Disney",
//           " Video"
//       ],
//       "levelOfCare": [
//           "Independent"
//       ],
//       "hobbies": [
//           "Documentaries",
//           " Learning",
//           " Watching television",
//           " Watching movies"
//       ],
//       "recurrence": {
//           "type": "Weekly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 10,
//       "parentId": null,
//       "name": "Poetry Reading",
//       "location": "Savary Island Room",
//       "allDay": false,
//       "start": "2024-05-27T15:30:00.000Z",
//       "end": "2024-05-27T16:30:00.000Z",
//       "tags": [
//           "Interest & Education"
//       ],
//       "createdAt": "2024-06-06T22:13:48.952Z",
//       "updatedAt": "2024-06-06T22:13:48.952Z",
//       "dimension": "Mental",
//       "facilitators": [
//           "Active Living Assistant"
//       ],
//       "levelOfCare": [
//           "Independent"
//       ],
//       "hobbies": [
//           "Creative Writing",
//           " Poetry",
//           " Writing"
//       ],
//       "recurrence": {
//           "type": "Weekly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 9,
//       "parentId": null,
//       "name": "Chair Yoga with Peter",
//       "location": "Multipurpose Room",
//       "allDay": false,
//       "start": "2024-05-27T14:45:00.000Z",
//       "end": "2024-05-27T15:45:00.000Z",
//       "tags": [
//           "Fitness"
//       ],
//       "createdAt": "2024-06-06T22:13:48.952Z",
//       "updatedAt": "2024-06-06T22:13:48.952Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Contractor-Fitness"
//       ],
//       "levelOfCare": [
//           "Independent"
//       ],
//       "hobbies": [
//           "Stretching",
//           " Aerobics",
//           " Exercice"
//       ],
//       "recurrence": {},
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 8,
//       "parentId": null,
//       "name": "Bus Trip: Park visit and Walk",
//       "location": "Outside",
//       "allDay": false,
//       "start": "2024-05-27T14:00:00.000Z",
//       "end": "2024-05-27T16:00:00.000Z",
//       "tags": [
//           "Excursions"
//       ],
//       "createdAt": "2024-06-06T22:13:48.952Z",
//       "updatedAt": "2024-06-06T22:13:48.952Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Active Living Assistant"
//       ],
//       "levelOfCare": [
//           "Independent"
//       ],
//       "hobbies": [
//           "Nature Appreciation",
//           " Walking"
//       ],
//       "recurrence": {
//           "type": "Weekly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 5,
//       "parentId": null,
//       "name": "FootCare Nurse*",
//       "location": "Clinic",
//       "allDay": true,
//       "start": "2024-05-27T00:00:00.000Z",
//       "end": "2024-05-27T23:59:59.999Z",
//       "tags": [],
//       "createdAt": "2024-06-06T22:13:48.952Z",
//       "updatedAt": "2024-06-06T22:13:48.952Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Contractor-Other"
//       ],
//       "levelOfCare": [
//           "Independent"
//       ],
//       "hobbies": [
//           "Well Being",
//           " massage"
//       ],
//       "recurrence": {
//           "type": "Monthly"
//       },
//       "isRepeated": true,
//       "applicantId": null,
//       "attendance": []
//   },
//   {
//       "id": 7,
//       "parentId": null,
//       "name": "Excercice with Daniel",
//       "location": "Multipurpose Room",
//       "allDay": false,
//       "start": "2024-05-27T11:15:00.000Z",
//       "end": "2024-05-27T12:00:00.000Z",
//       "tags": [
//           "Fitness"
//       ],
//       "createdAt": "2024-06-06T22:13:48.952Z",
//       "updatedAt": "2024-06-06T22:13:48.952Z",
//       "dimension": "Physical",
//       "facilitators": [
//           "Active Living Assistant"
//       ],
//       "levelOfCare": [
//           "Independent"
//       ],
//       "hobbies": [
//           "Stretching",
//           " Aerobics",
//           " Exercice"
//       ],
//       "recurrence": {},
//       "isRepeated": false,
//       "applicantId": null,
//       "attendance": []
//   }
// ]
