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
    content: `#heading 1
##heading 2
###heading 3
[this goes to google](https://www.google.com/)
This is a picture <https://source.unsplash.com/random>`,
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
