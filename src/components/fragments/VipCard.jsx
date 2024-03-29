export const VipCard = (props) => {
  return (
    <div className={`flex justify-between bg-${props.color}-500 items-center px-12 shadow-md shadow-blue-700 rounded-xl`}>
      <div>
        <p className="text-2xl font-bold tracking-widest">VIP{props.level}</p>
        <p className=" font-semibold">
          Upgrade to VIP{props.level} when you invest ₹{props.amount}
        </p>
      </div>
      <div>
        <img className="relative h-36 " src={props.src} alt="" />
      </div>
    </div>
  );
};
