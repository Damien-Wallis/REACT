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

  const filterPeople = (filter: string) => {
    const filtered = people.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setPeople(filtered);
  };

  return (
    <div>
      <h1>People</h1>
      <div className="border">
        <input
          className="border p-8"
          type="text"
          placeholder="Search"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
      </div>

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
