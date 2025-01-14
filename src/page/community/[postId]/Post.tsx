import { Button } from "@common/component/Button";
import { IcTest } from "@asset/svg";

const PostDetail = () => {
  return (
    <div>
      <Button
        leftIcon={<IcTest />}
        label={"병원고민"}
        variant={"outlineNeutral"}
        size={"tag"}
        disabled={true}
      />
    </div>
  );
};

export default PostDetail;
