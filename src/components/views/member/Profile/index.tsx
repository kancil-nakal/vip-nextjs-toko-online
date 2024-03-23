import MemberLayout from "@/components/layouts/MemberLayout";
import styles from "./Profile.module.scss";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Image from "next/image";

const ProfileMemberView = ({ profile }: any) => {
  return (
    <MemberLayout>
      <h1 className={styles.profile__title}>Profile Page</h1>
      <div className={styles.profile__main}>
        <div className={styles.profile__main__avatar}>
          <Image
            src={profile.image}
            alt={profile.fullname}
            width={200}
            height={200}
          />
          <label
            className={styles.profile__main__avatar__label}
            htmlFor="upload-image"
          >
            <p>
              Upload a new avatar, Larger image will be resize automatically
            </p>
            <p>
              Maximum upload size <b>1 MB</b>
            </p>
          </label>
          <input
            className={styles.profile__main__avatar__input}
            type="file"
            name="image"
            id="upload-image"
          />
        </div>
        <div className={styles.profile__main__detail}>
          <form action="">
            <Input
              label="Fullname"
              type="text"
              name="fullname"
              defaultValue={profile.fullname}
              disabled={true}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              defaultValue={profile.email}
              disabled={true}
            />
            <Input
              label="Phone"
              type="number"
              name="phone"
              defaultValue={profile.phone}
              disabled={true}
            />
            <Button type="submit" variant="primary">
              Update Profile
            </Button>
          </form>
        </div>
      </div>
    </MemberLayout>
  );
};

export default ProfileMemberView;
