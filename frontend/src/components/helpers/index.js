import { Avatar } from "@material-ui/core";
import React, { Component } from "react";

const names = [
  "Vojislava Nor",
  "Arjun Cäcilie",
  "Firdous Kayin",
  "Arushi Moreno",
  "Penjani Mordred",
  "Olivia Silas",
  "Dorit Lucas",
  "Traci Jupp",
  "Aviv Malina",
  "Ruthi Justine",

  "Hyakinthos Séverin",
  "Maiara Guðrún",
  "Maryann Reza",
  "Quintilianus Ibro",
  "Bjarni Bevan",
  "Jeroboam Herman",
  "Daša Carme",
  "Elenora Emma",
  "Erlingr Bróðir",
  "Luciana Kimberly",
];

const avatars = [
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
  <Avatar alt="Cindy Baker" src="/static/images/avatar/4.jpg" />,
  <Avatar alt="Cindy Baker" src="/static/images/avatar/5.jpg" />,
  <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
  <Avatar alt="Cindy Baker" src="/static/images/avatar/7.jpg" />,
];

export const generateRandomAvator = (id = false, size = 80) => {
  if (id == false) id = names[Math.floor(Math.random() * names.length)];
  return (
    <Avatar
      alt={id}
      src={`https://i.pravatar.cc/80?u=${id}`}
      style={{
        margin: "16px auto",
        width: "60px",
        height: "60px",
        border: "1px black solid",
      }}
    />
  );
};

export const generateRandomName = () => {
  let name = names[Math.floor(Math.random() * names.length)];
  return name;
};

export const generateRandomID = () => {
  return Math.random().toString(36).slice(2);
};
