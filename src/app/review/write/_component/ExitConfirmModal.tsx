import { Modal } from "@common/component/Modal/Modal";
const ExitConfirmModal = ({
  isModalOpen,
  setIsModalOpen,
  handleGoHospitalDetail,
}: { isModalOpen: boolean; setIsModalOpen: (isModalOpen: boolean) => void; handleGoHospitalDetail: () => void }) => {
  return (
    <>
      <Modal.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Modal.Content
          title={<Modal.Title>작성을 그만두시겠어요?</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label={"계속쓰기"} />
              <Modal.Confirm label={"작성취소"} onClick={handleGoHospitalDetail} />
            </Modal.BottomAffix>
          }
        >
          지금까지 쓴 내용은 저장되지 않아요.
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default ExitConfirmModal;
