import EventForm from "@/components/shared/utilities/EventForm";
import React from "react";

const CreteEventPage = () => {
  return (
    <main className="flex flex-col items-center w-screen border-2 border-green-600 bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <div className="flex flex-col items-center border-2 border-yellow-200 w-[90%]">
        <h3 className="h3-bold mb-16 mt-6">Create Event</h3>
        <EventForm userId={""} type="Create" />
      </div>
    </main>
  );
};

export default CreteEventPage;
