import { FaRegCircleUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiEditCircleLine } from "react-icons/ri";

const ConctactCard = ({ contact }) => {
  // console.log(contact);

  return (
    <div>
      <div
        key={contact.id}
        className="flex justify-between items-center p-2 rounded-lg bg-yellow  "
      >
        <div className="flex gap-1">
          <FaRegCircleUser className="text-4xl text-orange" />
          <div>
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine />
          <MdDelete className="text-orange" />
        </div>
      </div>
    </div>
  );
};

export default ConctactCard;
