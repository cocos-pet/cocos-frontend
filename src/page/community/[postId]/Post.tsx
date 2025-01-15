import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useMoreModal from "@shared/hook/useMoreModal";

const PostDetail = () => {
  const { isOpen, openModal, closeModal, toggleModal } = useMoreModal();

  const handleDelete = () => {
    alert("삭제되었습니다!");
    toggleModal();
  };

  return (
    <div>
      <MoreModal
        isOpen={isOpen}
        onToggleModal={toggleModal}
        onDelete={handleDelete}
      />
      <MoreModal
        isOpen={isOpen}
        onToggleModal={toggleModal}
        onDelete={handleDelete}
        iconSize="20"
        onEdit={() => alert("수정하기")}
      />
    </div>
  );
};

export default PostDetail;
