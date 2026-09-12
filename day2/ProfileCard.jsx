function ProfileCard(props) {
  return (
    <div className="profile-card">
      <h2>{props.name}</h2>
      <p><strong>Destination:</strong> {props.destination}</p>
      <p>{props.description}</p>
      <button>Explore</button>
    </div>
  );
}

export default ProfileCard;