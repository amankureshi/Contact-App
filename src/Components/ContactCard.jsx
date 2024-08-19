import { deleteDoc, doc } from "firebase/firestore";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddandUpdate from "./AddandUpdate";
import { useState } from "react";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ConctactCard = ({ contact }) => {
  // console.log(contact);
  const { isOpen, onClose, onOpen } = useDisclouse();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

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
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <MdDelete
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddandUpdate
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default ConctactCard;
