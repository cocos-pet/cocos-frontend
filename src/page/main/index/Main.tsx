import Chip from "@common/component/Chip/Chip";

const Main = () => {
  return (
    <div>
      <Chip label="Label" text="gray" bgColor="gray" />
      <Chip label="Label" text="blue" bgColor="gray" />
      <Chip label="Label" text="blue" bgColor="blue" />
      <Chip label="Label" text="blue" bgColor="gray" icon={true} />
    </div>
  );
};

export default Main;
