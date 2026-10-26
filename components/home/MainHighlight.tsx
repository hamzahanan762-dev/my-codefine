export default function MainHightlight(props: any) {
  return (
    <div className="h-full w-full  flex flex-col items-center gap-5 ">
      <span className="text-[0.85rem] text-text-primary font-semibold">
        {props.highlight}
      </span>
      <div className="text-[4vw] leading-15 flex flex-col items-center font-bold">
        <h5 className="text-black">{props.h1}</h5>
        <h5 className="text-text-primary">{props.h2}</h5>
      </div>
      <p className="text-center text-text-secondary text-lg px-[17%]">
        {props.detail}
      </p>
    </div>
  );
}
