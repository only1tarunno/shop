import { Link } from "react-router-dom";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import Button from "../../../../components/shared/Button";
import Loader from "../../../../components/shared/Loader";
import useUser from "../../../../hooks/useUser";

const UserProfile = () => {
  const [isUser, isUserLoading] = useUser();
  const { email, image, name, phoneNum, address } = isUser || {};
  if (isUserLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="py-16">
        <InnerSectiontitle
          subtitle="Managing Your Profile Details: Keeping Information Up-to-Date"
          title="My Profile"
        ></InnerSectiontitle>
      </div>
      <div className="text-center md:text-start flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <img
            src={image}
            className="rounded-[50%] h-52 w-52 object-cover mx-auto md:ml-auto md:mr-0"
            alt=""
          />
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="font-bold text-black text-2xl capitalize">
            Name: {name}
          </h2>
          <h3 className=" text-black">Email: {email}</h3>
          <p>Phone Number : {phoneNum ? phoneNum : "017XXX-XXXXXX"}</p>
          <p>Address : {address ? address : "No Data"}</p>
          <div>
            <Link to="/dashboard/updateProfile">
              <Button text={"Update profile"}></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
