export const Title = (props: { text: String }) => {
  const { text } = props;
  return (
    <>
      <div className="font-[700] text-[24px] text-[#EFEEE0] mb-[20px] capitalize">
        {text}
      </div>
    </>
  );
};
