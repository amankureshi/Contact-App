import React from "react";

const NoteFoundContact = () => {
  return (
    <div className="flex h-[60vh] items-center justify-center gap-4">
      <div>
        <img src="/Contact.png" alt="" />
      </div>
      <h2 className="capitalize text-2xl font-semibold text-white">
        Contact not found
      </h2>
    </div>
  );
};

export default NoteFoundContact;
