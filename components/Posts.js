import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'lucymiller',
    userImg: '/person-1.jpg',
    img: '/img-1.jpg',
    caption: 'Summer Time',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
