import React, { useState } from "react";
import { NoteT } from "../note";
import Notes from "./notes";

const HomePage: React.FC = () => {
  const [notes] = useState<NoteT[]>([
    {
      id: "qq77wq5wd5",
      title: "my cute note",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqdwwqdw",
      title: "my cute 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqqwrwfwe8465",
      title: "my cute 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqqwrwfwe8465",
      title: "my cute 44444",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "qq77wq5wd5",
      title: "my cute note",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqdwwqdw",
      title: "my cute 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqqwrwfwe8465",
      title: "my cute 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqqwrwfwe8465",
      title: "my cute 44444",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "qq77wq5wd5",
      title: "my cute note",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqdwwqdw",
      title: "my cute 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqqwrwfwe8465",
      title: "my cute 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqqwrwfwe8465",
      title: "my cute 44444",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "qq77wq5wd5",
      title: "my cute note",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqdwwqdw",
      title: "my cute 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqqwrwfwe8465",
      title: "my cute 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
    },
    {
      id: "wqqwrwfwe8465",
      title: "my cute 44444",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur assumenda, explicabo illum iusto aut obcaecati earum quia doloremque veritatis atque, aliquam doloribus? Fugit consequuntur voluptate, corporis soluta deserunt ab culpa est quibusdam cumque. Possimus eveniet odit fuga cum corrupti tempora, aspernatur molestiae expedita earum accusamus numquam nostrum dolor reiciendis dolore necessitatibus amet quisquam et maiores laboriosam error. Tenetur cumque eligendi itaque perspiciatis quas alias! Voluptatibus laboriosam nobis officia ab perspiciatis odio quisquam animi architecto voluptatum sequi repellendus corporis similique, eveniet dignissimos illum mollitia tempore? Fugit laborum maxime suscipit mollitia sit, blanditiis tenetur, cum, delectus necessitatibus excepturi molestiae omnis sapiente.",
    },
  ]);

  return <Notes notes={notes} />;
};

export default HomePage;
