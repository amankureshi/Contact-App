import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { IoSearchSharp } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ConctactCard from "./Components/ContactCard";
import Modal from "./Components/Modal";
import AddandUpdate from "./Components/AddandUpdate";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative flex-grow items-center">
            <IoSearchSharp className="text-white text-3xl absolute ml-1" />
            <input
              type="text"
              className="h-10 flex-grow border-white border rounded-md  bg-transparent text-white pl-9"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl cursor-pointer text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-5">
          {contacts.map((contact) => (
            <ConctactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddandUpdate onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default App;
