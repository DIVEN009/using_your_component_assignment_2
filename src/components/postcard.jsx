import LikeButton from "./likebutton";
import PropTypes from 'prop-types';
import "./postcard.css";


const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img className="profile-pic" src={post.profilePic} alt="Profile" />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};
PostCard.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default PostCard;
