import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useMoreModal from "@shared/hook/useMoreModal";

const PostDetail = () => {
  const { isOpen, toggleModal } = useMoreModal();

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
      />
    </div>
  );
};

export default PostDetail;
