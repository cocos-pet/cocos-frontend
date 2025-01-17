import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";
import useSimpleBottomSheet from "@shared/hook/useSimpleBottomSheet";

const Test = () => {
  const { isOpen, openBottomSheet, closeBottomSheet } = useSimpleBottomSheet();
  console.log(isOpen);
  return (
    <div>
      <button onClick={openBottomSheet}>시작</button>
      <SimpleBottomSheet
        isOpen={isOpen}
        handleClose={closeBottomSheet}
        content="로그아웃 하시겠어요?"
        subContent="언제든 다시 오시면 기다리고 있을게요!"
        leftText="취소"
        rightText="로그아웃"
        leftOnClick={() => alert("hi")}
        rightOnClick={() => alert("hi")}
      />
    </div>
  );
};

export default Test;
