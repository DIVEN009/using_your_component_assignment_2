import PostCard from "./components/postcard";
import "./App.css";


const posts = [
  {
    username: "JohnDoe",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Had a great day at the beach! 🌊"
  },
  {
    username: "JaneSmith",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "Loving the new book I just started! 📖"
  },
  {
    username: "MikeJohnson",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "Working on a new project, super excited! 🚀"
  }
];

const App = () => {
  return (
    <div>
      <h1>Social Media Feed</h1>
      <div className="post-list">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
