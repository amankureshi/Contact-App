import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { IoSearchSharp } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ConctactCard from "./Components/ContactCard";
import AddandUpdate from "./Components/AddandUpdate";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoteFoundContact from "./Components/NoteFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  // SearchFuction
  const filterContact = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContact = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContact);
      return filteredContact;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative flex-grow items-center">
            <IoSearchSharp className="text-white text-3xl absolute ml-1" />
            <input
              onChange={filterContact}
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
          {contacts.length <= 0 ? (
            <NoteFoundContact />
          ) : (
            contacts.map((contact) => (
              <ConctactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddandUpdate onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
