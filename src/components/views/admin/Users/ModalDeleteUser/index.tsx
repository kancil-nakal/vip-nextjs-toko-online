import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import userServices from "@/services/user";
import styles from "./Modal.module.scss";
type Props = any;

const ModalDeleteUser = (props: Props) => {
  const { deletedUser, setDeletedUser, setUsersData } = props;
  const handleDeleteUser = async () => {
    userServices.deleteUser(deletedUser.id);
    setDeletedUser({});
    const { data } = await userServices.getAllUsers();
    setUsersData(data.data);
  };
  return (
    <Modal onClose={() => setDeletedUser({})}>
      <h1 className={styles.modal__title}>Are You Sure?</h1>
      <Button type="button" onClick={() => handleDeleteUser()}>
        Yes
      </Button>
    </Modal>
  );
};

export default ModalDeleteUser;
