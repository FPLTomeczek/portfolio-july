import avatar from "../assets/images/avatar/avatar.jpg";

const HeaderCard = () => {
  return (
    <div className="flex items-center gap-4 bg-primary-color-dark p-3 rounded-[4rem] mx-14 mt-4">
      <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full" />
      <div>
        <h4>Tomek</h4>
        <span className="text-[10px] text-secondary-color">
          Frontend Developer
        </span>
      </div>
    </div>
  );
};

export default HeaderCard;
