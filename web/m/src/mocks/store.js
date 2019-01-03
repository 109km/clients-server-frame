const store = {
  home: {
    count: 10,
    feeds: [{
      userId: 19,
      avatarUrl: '',
      nickname: 'Super husky',
      dreamId: 20,
      title: 'Make something new',
      content: 'This is a project which will build a house',
      createdAt: '2018-09-25T10:47:27.000Z',
      updatedAt: '2018-09-25T10:47:27.000Z'
    }]
  },
  user: {
    id: 1,
    username: 'hello123',
    nickname: '无敌破坏王',
    avatarUrl: '',
    lastSignInAt: '2018-09-25T10:47:27.000Z'
  },
  dream: {
    userId: 19,
    avatarUrl: '',
    nickname: 'Super husky',
    dreamId: 20,
    title: 'Make something new',
    content: 'This is a project which will build a house',
    createdAt: '2018-09-25T10:47:27.000Z',
    updatedAt: '2018-09-25T10:47:27.000Z',
    backersList: [{
      userId: 2,
      nickname: 'WOOOOO man',
      avatarUrl: ''
    }],
    goalsList: [{
      title: '这是一个目标',
      content: '这个目标达成以后'
    }],
    tiersList: [{
      title: '给我100块钱',
      content: '还你1000块钱',
      price: 100
    }],
    postsList: [{
      postId: 2,
      title: 'Hey, jude',
      content: '<h1>Hey, I am building it up.</h1>',
      isMemberOnly: true,
      pics: [],
      createdAt: '2018-09-25T10:47:27.000Z',
      updatedAt: '2018-09-25T10:47:27.000Z'
    }],
    post: {
      postId: 2,
      title: 'Hey, jude',
      content: '<h1>Hey, I am building it up.</h1>',
      isMemberOnly: true,
      pics: [],
      createdAt: '2018-09-25T10:47:27.000Z',
      updatedAt: '2018-09-25T10:47:27.000Z',
      dreamId: 1,
      userId: 3
    }
  },
  explore: {
    recommendList: [
      {
        
      }
    ]
  }
}