import avatar from "../assets/images/avatar/avatar.webp";
import CircleDiligence from "../ui/Circles/CircleDiligence";
import CirclePassion from "../ui/Circles/CirclePassion";
import CircleTeamPlayer from "../ui/Circles/CircleTeamwork";

const HeaderCard = () => {
  return (
    <div className="flex items-center gap-4 bg-primary-color-dark p-3 rounded-[4rem] mx-auto mt-8 w-72 relative">
      <img
        src={avatar}
        alt="avatar"
        className="w-28 h-28 rounded-full object-cover"
      />
      <div>
        <h1 className="text-lg m-0">Tomek</h1>
        <span className="text-xs text-secondary-color-light font-bold">
          Frontend Developer
        </span>
      </div>
      <CirclePassion />
      <CircleDiligence />
      <CircleTeamPlayer />
    </div>
  );
};

export default HeaderCard;
