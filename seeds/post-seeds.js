const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Nam faucibus, magna vel elementum maximus, magna tellus tincidunt arcu, eu semper justo augue eget est.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Quisque nisi ante, auctor sed ex quis, consectetur tempor lacus.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Nulla mollis placerat tellus.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Nulla mollis placerat tellus.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Nunc ut ornare metus.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: ' Sed tempus massa quis augue bibendum, vitae consectetur tellus imperdiet.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Praesent volutpat a neque et vestibulum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Ut quam erat, auctor sit amet bibendum ut, posuere ut neque.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Vestibulum bibendum libero at mi euismod, et tincidunt arcu maximus.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Aliquam nibh nibh, sagittis quis est sed, pellentesque finibus nisl.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'Etiam accumsan tincidunt consectetur.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'In ac suscipit turpis.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Nulla facilisi.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;