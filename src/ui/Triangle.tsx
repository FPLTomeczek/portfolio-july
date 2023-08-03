const Triangle = ({ direction }: { direction: string }) => {
  return <span className={`triangle triangle-${direction}`}></span>;
};

export default Triangle;
