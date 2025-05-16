import React, { useEffect, useState } from "react";
import Card1 from "./Card1";

interface Person {
  name: string;
  avatar: string;
  jobtitle: string;
}

export default function PeopleContainer() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://67c08172b9d02a9f224a0b60.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
      })
    );
  }, []);

  return (
    <div>
      <h1>abc</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {people.map((person) => {
          return (
            <Card1
              name={person.name}
              image={person.avatar}
              occupation={person.jobtitle}
            />
          );
        })}
      </div>
    </div>
  );
}
