export const data = 'This file is for placeholder utility data';

export const howTos = [
  {
    id: 1,
    title: 'How to print a todo',
    preview: 'This string is a preview of a howto item',
    content:
      "This is a string representing a howto's content and will contain [links](https://www.google.com/) and other values.",
    author: 1,
    likes: 10,
    dislikes: 5
  },
  {
    id: 2,
    title: 'How to print a todo',
    preview: 'This string is a preview of a howto item',
    content:
      "This is a string representing a howto's content and will contain [links](https://www.google.com/) and other values.",
    author: 5,
    likes: 5,
    dislikes: 10
  },
  {
    id: 3,
    title: 'How to print a todo',
    preview: 'This string is a preview of a howto item',
    content: `#Heading1
##Heading1
###Heading3
This [link](https://www.google.com/) in one line.
This goes on top <https://source.unsplash.com/random> and this goes on bottom.`,
    author: 5,
    likes: 5,
    dislikes: 10
  }
];

export const users = [
  {
    id: 1,
    username: 'Username1',
    password: 'password',
    email: 'user@email.com',
    creator: false
  },
  {
    id: 2,
    username: 'Username2',
    password: 'password',
    email: 'user@email.com',
    creator: false
  },
  {
    id: 3,
    username: 'Username3',
    password: 'password',
    email: 'user@email.com',
    creator: false
  }
];

export const likes = [
  { id: 1, user: 1, howto: 1 },
  { id: 2, user: 2, howto: 1 },
  { id: 3, user: 1, howto: 2 }
];

export const dislikes = [
  { id: 1, user: 3, howto: 1 },
  { id: 2, user: 2, howto: 2 },
  { id: 3, user: 3, howto: 2 }
];

/* ENDPOINTS
GET    https://how-to-5-api.herokuapp.com/
        - NO INPUT
GET    https://how-to-5-api.herokuapp.com/api/users/
        - NO INPUT
GET    https://how-to-5-api.herokuapp.com/api/users/:id/
        - NO INPUT
POST   https://how-to-5-api.herokuapp.com/api/users/register/
        {
          "username": "Test User",
          "email": "testuser@test.com",
          "password": "testpassword",
          "creator": true
        }
POST   https://how-to-5-api.herokuapp.com/api/users/login/
        {
            "email": "testuser@test.com",
            "password": "testpassword"
        }
PUT    https://how-to-5-api.herokuapp.com/api/users/:id/
        {
          "email": "testuser111@test.com",
          "password": "newpassword"
        }
DELETE https://how-to-5-api.herokuapp.com/api/users/:id/
        - NO INPUT
GET    https://how-to-5-api.herokuapp.com/api/how-tos/
        - NO INPUT
GET    https://how-to-5-api.herokuapp.com/api/how-tos/:id/
        - NO INPUT
POST   https://how-to-5-api.herokuapp.com/api/how-tos/
        {
          "title": "Postman Test",
          "summary": "Postman test test test",
          "content": "Postman test test test test test test test test test test.",
          "user_id": 1
        }
PUT    https://how-to-5-api.herokuapp.com/api/how-tos/:id/ !!!No Content/Summary!!!
        {
            "title": "Update Test",
            "likes": 5,
            "dislikes": 2
        }
DELETE https://how-to-5-api.herokuapp.com/api/how-tos/:id/
        - NO INPUT
POST   https://how-to-5-api.herokuapp.com/api/likes/
        {
          "user_id": 4,
          "how_to_id": 4
        }
DELETE https://how-to-5-api.herokuapp.com/api/likes/
        {
          "user_id": 4,
          "how_to_id": 4
        }
POST   https://how-to-5-api.herokuapp.com/api/dislikes/
        {
          "user_id": 4,
          "how_to_id": 4
        }
DELETE https://how-to-5-api.herokuapp.com/api/dislikes/
        {
          "user_id": 4,
          "how_to_id": 4
        }
*/
